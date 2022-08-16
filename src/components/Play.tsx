import React, { useEffect } from "react";
import {
  PlasmicPlay,
  DefaultPlayProps
} from "./plasmic/fat_beasts/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import useAssets from "../hooks/useAssets";

export interface PlayProps extends DefaultPlayProps {}

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {
  const { walletAddress, getAssets } = useAssets();

  useEffect(() => {
    if (walletAddress) {
      getAssets().then(data => {
        console.log('assets', data);
      })
    }
  }, [walletAddress, useAssets])
  return <PlasmicPlay root={{ ref }} {...props} />;
}

const Play = React.forwardRef(Play_);
export default Play;
