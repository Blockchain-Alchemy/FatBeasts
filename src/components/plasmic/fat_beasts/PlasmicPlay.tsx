// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fFJHtbGqcaWW2c2Nmp4MzF
// Component: VCwli71SrazLZ
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
import Header from "../../Header"; // plasmic-import: yst91SIuD0z2o/component
import Section from "../../Section"; // plasmic-import: xQZqj_08OeywF/component
import Bullet from "../../Bullet"; // plasmic-import: 3n8BC68tkVi7t/component
import Button from "../../Button"; // plasmic-import: bNISewQ8dYFBQ/component
import HomeCta from "../../HomeCta"; // plasmic-import: Q6zRT60FMv7L-/component
import Footer from "../../Footer"; // plasmic-import: _jH-vUy8igQ4z/component

import { useScreenVariants as useScreenVariants_8Yv2MsPbyErlEv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8YV2MsPbyERLEv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_fat_beasts.module.css"; // plasmic-import: fFJHtbGqcaWW2c2Nmp4MzF/projectcss
import sty from "./PlasmicPlay.module.css"; // plasmic-import: VCwli71SrazLZ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZCo1t9j8SbIq6d/icon
import fatbeastsLogoKGMclZFzT from "./images/fatbeastsLogo.png"; // plasmic-import: kGMclZFzT/picture
import screenShot20220811At14301PMjpgLv6S5GuM from "./images/screenShot20220811At14301PMjpg.jpeg"; // plasmic-import: -Lv6S5guM/picture
import foxCubNftpngGo5Il69J from "./images/foxCubNftpng.png"; // plasmic-import: go5il69J_/picture

export type PlasmicPlay__VariantMembers = {};

export type PlasmicPlay__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlay__VariantsArgs;
export const PlasmicPlay__VariantProps = new Array<VariantPropType>();

export type PlasmicPlay__ArgsType = {
  unity?: React.ReactNode;
  ticketImage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPlay__ArgsType;
export const PlasmicPlay__ArgProps = new Array<ArgPropType>(
  "unity",
  "ticketImage"
);

export type PlasmicPlay__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  section?: p.Flex<typeof Section>;
  replaceWithUnity?: p.Flex<typeof p.PlasmicImg>;
  img?: p.Flex<typeof p.PlasmicImg>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPlayProps {
  unity?: React.ReactNode;
  ticketImage?: React.ReactNode;
  className?: string;
}

function PlasmicPlay__RenderFunc(props: {
  variants: PlasmicPlay__VariantsArgs;
  args: PlasmicPlay__ArgsType;
  overrides: PlasmicPlay__OverridesType;

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
    <React.Fragment>
      {}

      {}

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          {true ? (
            <Section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames("__wab_instance", sty.section)}
              hasSubtitle={true}
              hasTitle={true}
              subtitle={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ioxLa
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {
                        "Play Fat Beasts while it's in development. If you have a "
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Fat Beasts NFT"}
                    </span>
                    <React.Fragment>
                      {
                        " in your wallet, you'll have unlimited access to the game as it's being created. You'll be the first to try new updates and features. "
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
              }
              title={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cXMmy
                  )}
                >
                  {"Let's Play Fat Beasts"}
                </div>
              }
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qkQZ)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__bXso)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.columns__rPnsF)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___2Lrrq
                        )}
                      >
                        {true ? (
                          <p.PlasmicImg
                            data-plasmic-name={"replaceWithUnity"}
                            data-plasmic-override={overrides.replaceWithUnity}
                            alt={""}
                            className={classNames(sty.replaceWithUnity)}
                            displayHeight={"500px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"700px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: fatbeastsLogoKGMclZFzT,
                              fullWidth: 1443,
                              fullHeight: 767,
                              aspectRatio: undefined
                            }}
                          />
                        ) : null}

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___4GuZv
                          )}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: null,
                            value: args.unity
                          })}
                        </div>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__swIj9
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: (
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__hBXdN)}
                              displayHeight={"458px" as const}
                              displayMaxHeight={"none" as const}
                              displayMaxWidth={"100%" as const}
                              displayMinHeight={"0" as const}
                              displayMinWidth={"0" as const}
                              displayWidth={"auto" as const}
                              loading={"lazy" as const}
                              src={{
                                src: screenShot20220811At14301PMjpgLv6S5GuM,
                                fullWidth: 400,
                                fullHeight: 908,
                                aspectRatio: undefined
                              }}
                            />
                          ),

                          value: args.ticketImage
                        })}
                      </div>
                    </div>
                  </div>

                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.columns__a3SRh)}
                    >
                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__bny11
                          )}
                        >
                          <p.PlasmicImg
                            data-plasmic-name={"img"}
                            data-plasmic-override={overrides.img}
                            alt={""}
                            className={classNames(sty.img)}
                            displayHeight={"auto" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"none" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"100%" as const}
                            src={{
                              src: foxCubNftpngGo5Il69J,
                              fullWidth: 2600,
                              fullHeight: 2600,
                              aspectRatio: undefined
                            }}
                          />
                        </div>
                      ) : null}

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__qzM3P
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__iAqaO
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__woJzi
                            )}
                          >
                            {"Fat Beast NFT for Access"}
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__dztH
                            )}
                          >
                            {
                              "Play the game while it's under development by owning a Fat Beasts NFT in your wallet, you get:"
                            }
                          </div>

                          <Bullet
                            className={classNames(
                              "__wab_instance",
                              sty.bullet__op9Z
                            )}
                          >
                            {"Early Access"}
                          </Bullet>

                          <Bullet
                            className={classNames(
                              "__wab_instance",
                              sty.bullet__i6RqN
                            )}
                          >
                            {"Automatic Whitelist to Official Drop"}
                          </Bullet>

                          <Bullet
                            className={classNames(
                              "__wab_instance",
                              sty.bullet__rdXa
                            )}
                          >
                            {"Airdrops"}
                          </Bullet>

                          <Bullet
                            className={classNames(
                              "__wab_instance",
                              sty.bullet___4OMLm
                            )}
                          >
                            {"Early Adopter Community Member Status"}
                          </Bullet>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__iouYc
                            )}
                          >
                            {
                              "Support this indie project and watch it take shape. Your support allows us to make more enjoyable games for you!"
                            }
                          </div>

                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__qdsIj
                            )}
                          >
                            <Button
                              className={classNames(
                                "__wab_instance",
                                sty.button__volXi
                              )}
                              color={"red" as const}
                            >
                              {"Buy A Fat Beast NFT"}
                            </Button>

                            <Button
                              className={classNames(
                                "__wab_instance",
                                sty.button__dYvmB
                              )}
                              color={"outlineRed" as const}
                            >
                              {"Learn More"}
                            </Button>
                          </p.Stack>
                        </p.Stack>
                      </div>
                    </p.Stack>
                  ) : null}
                </p.Stack>
              ) : null}
            </Section>
          ) : null}

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "section",
    "replaceWithUnity",
    "img",
    "homeCta",
    "footer"
  ],
  header: ["header"],
  section: ["section", "replaceWithUnity", "img"],
  replaceWithUnity: ["replaceWithUnity"],
  img: ["img"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: typeof Section;
  replaceWithUnity: typeof p.PlasmicImg;
  img: typeof p.PlasmicImg;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlay__VariantsArgs;
    args?: PlasmicPlay__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlay__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPlay__ArgProps,
          internalVariantPropNames: PlasmicPlay__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlay";
  } else {
    func.displayName = `PlasmicPlay.${nodeName}`;
  }
  return func;
}

export const PlasmicPlay = Object.assign(
  // Top-level PlasmicPlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    replaceWithUnity: makeNodeComponent("replaceWithUnity"),
    img: makeNodeComponent("img"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPlay
    internalVariantProps: PlasmicPlay__VariantProps,
    internalArgProps: PlasmicPlay__ArgProps
  }
);

export default PlasmicPlay;
/* prettier-ignore-end */