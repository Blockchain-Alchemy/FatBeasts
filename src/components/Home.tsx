import * as React from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "./plasmic/fat_beasts/PlasmicHome";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useHistory } from "react-router-dom";

export interface HomeProps extends DefaultHomeProps {}

function Home_(props: HomeProps, ref: HTMLElementRefOf<"div">) {
  const history = useHistory();

  const handlePlayButton = (e: any) => {
    e.preventDefault();
    history.push("/play");
  };

  return (
    <PlasmicHome
      root={{ ref }}
      playButton={{
        onClick: handlePlayButton,
      }}
      {...props}
    />
  );
}

const Home = React.forwardRef(Home_);
export default Home;
