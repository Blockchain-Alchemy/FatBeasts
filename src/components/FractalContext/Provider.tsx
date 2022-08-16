import React, { useMemo, useState } from "react";
import { FractalContext } from "./Context";

export interface FractalProviderProps {
  children: React.ReactNode;
}

function FractalProvider({ children }: FractalProviderProps) {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined);
  const [bearerToken, setBearerToken] = useState<string | undefined>(undefined);

  return (
    <FractalContext.Provider
      value={{
        email,
        setEmail,
        username,
        setUsername,
        walletAddress,
        setWalletAddress,
        publicKey,
        setPublicKey,
        bearerToken,
        setBearerToken,
      }}
    >
      {children}
    </FractalContext.Provider>
  );
}

export default FractalProvider;
