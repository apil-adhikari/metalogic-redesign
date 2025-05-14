import { type MouseEvent } from "react";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSketch,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import type { IconType } from "react-icons";
import { TbBrandReactNative } from "react-icons/tb";
import { DiJava } from "react-icons/di";

export const TechStacks = () => {
  return (
    <div className="bg-neutral-50px-4 py-12 bg-gradient-to-r from-red-500 to to-blue-500">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-white text-center italic">
          Tech Stacks we Use
        </h2>
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <section className="py-10 overflow-x-clip  flex justify-center  ">
      <div className="container">
        <div></div>

        <div>
          <div className="divide-y divide-neutral-900 border border-neutral-900">
            <div className="grid grid-cols-10 divide-x divide-neutral-900 animate bg-white">
              <LinkBox Icon={SiHtml5} href="#" />
              <LinkBox Icon={SiCss3} href="#" />
              <LinkBox Icon={SiJavascript} href="#" />
              <LinkBox Icon={SiTypescript} href="#" />
              <LinkBox Icon={SiReact} href="#" />
              <LinkBox Icon={SiVuedotjs} href="#" />
              <LinkBox Icon={SiNextdotjs} href="#" />
              <LinkBox Icon={SiNodedotjs} href="#" />
              <LinkBox Icon={SiExpress} href="#" />
              <LinkBox Icon={SiMongodb} href="#" />
            </div>
            <div className="grid grid-cols-3 divide-x divide-neutral-900 bg-white">
              <LinkBox Icon={SiFlutter} href="#" />
              <LinkBox Icon={TbBrandReactNative} href="#" />
              <LinkBox Icon={DiJava} href="#" />
            </div>
            <div className="grid grid-cols-5 divide-x divide-neutral-900 bg-white">
              <LinkBox Icon={SiGithub} href="#" />
              <LinkBox Icon={SiGit} href="#" />
              <LinkBox Icon={SiDocker} href="#" />
              <LinkBox Icon={SiKubernetes} href="#" />
              <LinkBox Icon={SiSketch} href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon }: { Icon: IconType; href: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </div>
  );
};
