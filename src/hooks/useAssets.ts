import { useCallback } from "react";
import axios from "axios";
import { useFractalContext } from "./useFractalContext";

const useAssets = () => {
  const { walletAddress, bearerToken } = useFractalContext()!;

  const getAssets = useCallback(
    () => {
      if (walletAddress && bearerToken) {
        const url = "https://api.fractal.is/sdk/v1/wallet/items";
        const options = {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        };
        return axios.get(url, options).then((res) => res.data);
      } else {
        return Promise.reject("Please connect your wallet");
      }
    },
    [walletAddress]
  );

  return {
    walletAddress,
    getAssets,
  };
};

export default useAssets;
