// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fFJHtbGqcaWW2c2Nmp4MzF
// Component: Q6zRT60FMv7L-
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
import TextInput from "../../TextInput"; // plasmic-import: ROtQgIK8xA0Q98/component
import Button from "../../Button"; // plasmic-import: bNISewQ8dYFBQ/component

import { useScreenVariants as useScreenVariants_8Yv2MsPbyErlEv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8YV2MsPbyERLEv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_fat_beasts.module.css"; // plasmic-import: fFJHtbGqcaWW2c2Nmp4MzF/projectcss
import sty from "./PlasmicHomeCta.module.css"; // plasmic-import: Q6zRT60FMv7L-/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: tZVSSlQAEBBnV6/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZCo1t9j8SbIq6d/icon
import fat2PngSDdTfBAhq from "./images/fat2Png.png"; // plasmic-import: sDDTfBAhq/picture

export type PlasmicHomeCta__VariantMembers = {};

export type PlasmicHomeCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeCta__VariantsArgs;
export const PlasmicHomeCta__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeCta__ArgsType = {};
type ArgPropType = keyof PlasmicHomeCta__ArgsType;
export const PlasmicHomeCta__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeCta__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  img?: p.Flex<typeof p.PlasmicImg>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultHomeCtaProps {
  className?: string;
}

function PlasmicHomeCta__RenderFunc(props: {
  variants: PlasmicHomeCta__VariantsArgs;
  args: PlasmicHomeCta__ArgsType;
  overrides: PlasmicHomeCta__OverridesType;

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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__p1RGn)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gpSr
          )}
        >
          {"Get Fat in your Inbox"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__toD8I
          )}
        >
          {
            "Subscribe to our newsletter and get the pure alpha: exclusive demos, drops and whitelist spots."
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9O8D)}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            color={"dark" as const}
            placeholder={"Your email..." as const}
          />

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"blue" as const}
          >
            {"Subscribe"}
          </Button>
        </p.Stack>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__s8Jp9
          )}
        >
          {"We don't spam or sell your data."}
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox__pqldZ)}>
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
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: fat2PngSDdTfBAhq,
              fullWidth: 1000,
              fullHeight: 1000,
              aspectRatio: undefined
            }}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "button", "img"],
  textInput: ["textInput", "textbox"],
  button: ["button"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  button: typeof Button;
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeCta__VariantsArgs;
    args?: PlasmicHomeCta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeCta__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomeCta__ArgProps,
          internalVariantPropNames: PlasmicHomeCta__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta";
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps
  }
);

export default PlasmicHomeCta;
/* prettier-ignore-end */
