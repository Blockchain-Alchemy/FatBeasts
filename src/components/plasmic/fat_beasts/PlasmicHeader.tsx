// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fFJHtbGqcaWW2c2Nmp4MzF
// Component: yst91SIuD0z2o
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: bNISewQ8dYFBQ/component

import { useScreenVariants as useScreenVariants_8Yv2MsPbyErlEv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8YV2MsPbyERLEv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_fat_beasts.module.css"; // plasmic-import: fFJHtbGqcaWW2c2Nmp4MzF/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: yst91SIuD0z2o/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZCo1t9j8SbIq6d/icon
import gangBeastsMinpngF80E6DJjz from "./images/gangBeastsMinpng.png"; // plasmic-import: f80e6dJJZ/picture

export type PlasmicHeader__VariantMembers = {
  synced: "synced";
};

export type PlasmicHeader__VariantsArgs = {
  synced?: SingleBooleanChoiceArg<"synced">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>("synced");

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a">;
  img?: p.Flex<typeof p.PlasmicImg>;
  freeBox?: p.Flex<"div">;
  aboutButton?: p.Flex<typeof Button>;
  about?: p.Flex<"div">;
  playButton?: p.Flex<typeof Button>;
  about2?: p.Flex<"div">;
  fractalButton?: p.Flex<typeof Button>;
};

export interface DefaultHeaderProps {
  synced?: SingleBooleanChoiceArg<"synced">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8Yv2MsPbyErlEv()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <a
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        href={"/" as const}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"100px" as const}
          loading={"lazy" as const}
          src={{
            src: gangBeastsMinpngF80E6DJjz,
            fullWidth: 290,
            fullHeight: 159,
            aspectRatio: undefined
          }}
        />
      </a>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {true ? (
          <Button
            className={classNames("__wab_instance", sty.button___3Xdss)}
            color={"clear" as const}
            link={"/play" as const}
            size={"compact" as const}
          >
            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oevve
                )}
              >
                {"Features"}
              </div>
            ) : null}
          </Button>
        ) : null}

        {true ? (
          <Button
            className={classNames("__wab_instance", sty.button__ba3H9)}
            color={"clear" as const}
            link={"/pricing" as const}
            size={"compact" as const}
          >
            {"Pricing"}
          </Button>
        ) : null}

        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <Button
            data-plasmic-name={"aboutButton"}
            data-plasmic-override={overrides.aboutButton}
            className={classNames("__wab_instance", sty.aboutButton)}
            color={"clear" as const}
            size={"compact" as const}
          >
            <div
              data-plasmic-name={"about"}
              data-plasmic-override={overrides.about}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.about
              )}
            >
              {"About"}
            </div>
          </Button>
        ) : null}

        <Button
          data-plasmic-name={"playButton"}
          data-plasmic-override={overrides.playButton}
          className={classNames("__wab_instance", sty.playButton)}
          color={"clear" as const}
          link={"/play" as const}
          size={"compact" as const}
        >
          <div
            data-plasmic-name={"about2"}
            data-plasmic-override={overrides.about2}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.about2
            )}
          >
            {"Play"}
          </div>
        </Button>

        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <Button
            data-plasmic-name={"fractalButton"}
            data-plasmic-override={overrides.fractalButton}
            className={classNames("__wab_instance", sty.fractalButton)}
            color={"red" as const}
            endIcon={null}
            link={"/play" as const}
            showEndIcon={true}
          >
            {"Login with Fractal"}
          </Button>
        ) : null}

        {true ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lodvy
            )}
          >
            {"or"}
          </div>
        ) : null}

        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <Button
            className={classNames("__wab_instance", sty.button__jgNjz)}
            color={"red" as const}
            endIcon={null}
            link={"/play" as const}
            showEndIcon={true}
          >
            {"Sync Wallet"}
          </Button>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "link",
    "img",
    "freeBox",
    "aboutButton",
    "about",
    "playButton",
    "about2",
    "fractalButton"
  ],
  link: ["link", "img"],
  img: ["img"],
  freeBox: [
    "freeBox",
    "aboutButton",
    "about",
    "playButton",
    "about2",
    "fractalButton"
  ],
  aboutButton: ["aboutButton", "about"],
  about: ["about"],
  playButton: ["playButton", "about2"],
  about2: ["about2"],
  fractalButton: ["fractalButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  img: typeof p.PlasmicImg;
  freeBox: "div";
  aboutButton: typeof Button;
  about: "div";
  playButton: typeof Button;
  about2: "div";
  fractalButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    aboutButton: makeNodeComponent("aboutButton"),
    about: makeNodeComponent("about"),
    playButton: makeNodeComponent("playButton"),
    about2: makeNodeComponent("about2"),
    fractalButton: makeNodeComponent("fractalButton"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */