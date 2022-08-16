import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useFractalContext } from "./useFractalContext";

const CLIENT_ID = "e0zyZpK7ojL5ozFD1Kww1APjsMePdj99FX3StE";

const useWallet = () => {
  const {
    walletAddress,
    setWalletAddress,
    email,
    setEmail,
    username,
    setUsername,
    publicKey,
    setPublicKey,
    bearerToken,
    setBearerToken
  } = useFractalContext()!;
  const [approvalUrl, setApprovalUrl] = useState(undefined);
  const [approvalCode, setApprovalCode] = useState(undefined);
  const [approver, setApprover] = useState(0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (approvalUrl) {
      window.open(approvalUrl, "_blank", "noopener");
      setApprover(1);
    }
  }, [approvalUrl]);

  const getApprovalResult = useCallback(() => {
    const payload = {
      clientId: CLIENT_ID,
      code: approvalCode,
    };
    const url = `https://auth-api.fractal.is/auth/v2/approval/result`;
    return axios.post(url, payload).then((res) => {
      console.log(res);
      return res.data;
    });
  }, [approvalCode]);

  useEffect(() => {
    console.log("Interval-1", approver);
    approver &&
      getApprovalResult()
        .then((data) => {
          console.log("Interval-2", data);
          setApprover(0);
          setBearerToken(data.bearerToken);
          setUserId(data.userId);
        })
        .catch((e) => {
          setTimeout(() => {
            setApprover(approver + 1);
          }, 4000);
        });
  }, [approver, getApprovalResult]);

  useEffect(() => {
    if (bearerToken) {
      const url = "https://api.fractal.is/sdk/v1/wallet/info";
      const options = {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      };
      axios.get(url, options).then((res) => {
        console.log(res);
        setWalletAddress(res.data.accountPublicKey);
        setEmail(res.data.email)
        setUsername(res.data.username);
      });
    }
  }, [walletAddress, bearerToken]);

  const connectWallet = useCallback(() => {
    const url = `https://auth-api.fractal.is/auth/v2/approval/geturl?clientId=${CLIENT_ID}&scope=items:read&scope=identify&scope=coins:read`;
    axios
      .get(url)
      .then((res) => {
        setApprovalUrl(res.data.url);
        setApprovalCode(res.data.code);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [setWalletAddress, setPublicKey]);

  const disconnectWallet = async (): Promise<void> => {
    setWalletAddress(undefined);
    setEmail(undefined);
    setUsername(undefined);
    setBearerToken(undefined);
  };

  return {
    connectWallet,
    disconnectWallet,
    email,
    username,
    walletAddress,
    publicKey,
  };
};

export default useWallet;
