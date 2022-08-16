import React from "react";

export interface FractalContextValue {
  walletAddress: string | undefined;
  setWalletAddress: (address: string | undefined) => void;
  email: string | undefined;
  setEmail: (address: string | undefined) => void;
  username: string | undefined;
  setUsername: (address: string | undefined) => void;
  publicKey: string | undefined;
  setPublicKey: (publicKey: string | undefined) => void;
  bearerToken: string | undefined;
  setBearerToken: (publicKey: string | undefined) => void;
}

export const FractalContext = React.createContext<FractalContextValue>({} as any);

export type FractalContextInstance = typeof FractalContext;

if (process.env.NODE_ENV !== "production") {
  FractalContext.displayName = "FractalContext";
}

export default FractalContext;
