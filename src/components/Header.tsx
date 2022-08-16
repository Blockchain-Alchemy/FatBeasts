import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps,
} from "./plasmic/fat_beasts/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useHistory } from "react-router-dom";
import useWallet from "../hooks/useWallet";

export interface HeaderProps extends DefaultHeaderProps {}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<"div">) {
  const history = useHistory();
  const { walletAddress, username, connectWallet, disconnectWallet } = useWallet();
  console.log('walletAddress', walletAddress)
  console.log('username', username)

  const handlePlayButton = (e: any) => {
    e.preventDefault();
    history.push("/play");
  }
  
  const handleFractalLogin = (e: any) => {
    e.preventDefault();
    if (walletAddress) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  return (
    <PlasmicHeader
      root={{ ref }}
      playButton={{
        onClick: handlePlayButton,
      }}
      fractalButton={{
        onClick: handleFractalLogin,
        children: <span>{ username? `Logout` : "Login with Fractal" }</span>
      }}
      {...props}
    />
  );
}

const Header = React.forwardRef(Header_);
export default Header;
