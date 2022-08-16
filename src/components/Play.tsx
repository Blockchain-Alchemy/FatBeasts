import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import {
  PlasmicPlay,
  DefaultPlayProps,
} from "./plasmic/fat_beasts/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import useAssets from "../hooks/useAssets";

export interface PlayProps extends DefaultPlayProps {}

const unityContext = new UnityContext({
  loaderUrl: "Build/public.loader.js",
  dataUrl: "Build/public.data.unityweb",
  frameworkUrl: "Build/public.framework.js.unityweb",
  codeUrl: "Build/public.wasm.unityweb",
});

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {
  const { walletAddress, getAssets } = useAssets();
  const [items, setItems] = useState<any>(null);

  useEffect(() => {
    !walletAddress && setItems(null);
  }, [walletAddress])

  useEffect(() => {
    if (walletAddress) {
      getAssets().then((data) => {
        console.log("assets", data);
        setItems(data.items)
      });
    }
  }, [walletAddress, getAssets]);

  const ticketImageView = () => {
    return (
      <div style={{ marginLeft: '60px', marginTop: '6px', cursor: "pointer" }}>
        {items && items.length > 0 ? (
          <img
            src="images/ticket.jpeg"
            alt="ticket"
            style={{height: '458px'}}
            onClick={() => {}}
          />
        ) : (
          <img
            src="images/need.jpeg"
            alt="Need Ticket"
            style={{height: '458px'}}
            onClick={() => {}}
          />
        )}
      </div>
    );
  };

  return (
    <PlasmicPlay
      root={{ ref }}
      {...props}
      ticketImage={ticketImageView()}
      unity={
        <Unity
          unityContext={unityContext}
          style={{
            height: "100%",
            width: 913,
            border: "0",
            background: "grey",
          }}
        />
      }
    />
  );
}

const Play = React.forwardRef(Play_);
export default Play;
