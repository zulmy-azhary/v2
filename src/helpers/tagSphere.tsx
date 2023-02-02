import { allSkills } from "./skills";
import type { CSSProperties, MutableRefObject, ReactNode, RefObject } from "react";
import type { Items, TagSphereProps } from "@/types/tagCloud";

export const defaultStyles = {
  getContainer: (radius: number, fullWidth: boolean, fullHeight: boolean) =>
    ({
      position: "relative",
      width: fullWidth ? "100%" : `${2 * radius}px`,
      maxWidth: "100%",
      minHeight: `${2 * radius}px`,
      height: fullHeight ? "100%" : `${2 * radius}px`,
      touchAction: "none"
    } as CSSProperties)
};

export const computeInitialPosition = (index: number, textsLength: number, size: number) => {
  const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
  const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2
  };
};

export const updateItemPosition = (item: Items, sc: number[], depth: number): Items => {
  const newItem = { ...item, scale: "" };
  const rx1 = item.x;
  const ry1 = item.y * sc[1] + item.z * -sc[0];
  const rz1 = item.y * sc[0] + item.z * sc[1];

  const rx2 = rx1 * sc[3] + rz1 * sc[2];
  const ry2 = ry1;
  const rz2 = rz1 * sc[3] - rx1 * sc[2];

  const per = (2 * depth) / (2 * depth + rz2); // todo
  newItem.x = rx2;
  newItem.y = ry2;
  newItem.z = rz2;

  if (newItem.x === item.x && newItem.y === item.y && newItem.z === item.z) {
    return item;
  }

  newItem.scale = per.toFixed(3);
  let alpha: number = per * per - 0.25;
  alpha = parseFloat((alpha > 1 ? 1 : alpha).toFixed(3));

  const itemEl = (newItem.ref as unknown as MutableRefObject<HTMLElement>).current;
  if (itemEl) {
    const left = (newItem.x - itemEl.offsetWidth / 2).toFixed(2);
    const top = (newItem.y - itemEl.offsetHeight / 2).toFixed(2);
    const transform = `translate3d(${left}px, ${top}px, 0) scale(${newItem.scale})`;

    itemEl.style.webkitTransform = transform;
    itemEl.style.transform = transform;
    itemEl.style.filter = `grayscale(${(alpha - 1) * -8}) blur(${
      (alpha - 1) * -5 > 1 ? Math.floor((alpha - 1) * -8) : 0
    }px)`;
    itemEl.style.zIndex = String(Math.floor(alpha * 1000));
    itemEl.style.opacity = String(alpha);
  }

  return newItem;
};

export const createItem = (
  text: string | ReactNode,
  index: number,
  textsLength: number,
  size: number,
  itemRef: HTMLElement
): Items => {
  const transformOrigin = "50% 50%";
  const transform = "translate3d(-50%, -50%, 0) scale(1)";
  const itemStyles = {
    willChange: "transform, opacity, filter",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: index + 1,
    filter: "alpha(opacity=0)",
    opacity: 0,
    WebkitTransformOrigin: transformOrigin,
    MozTransformOrigin: transformOrigin,
    OTransformOrigin: transformOrigin,
    transformOrigin: transformOrigin,
    WebkitTransform: transform,
    MozTransform: transform,
    OTransform: transform,
    transform: transform
  } as CSSProperties;
  const itemEl = (
    <span ref={itemRef as unknown as RefObject<HTMLElement>} key={index} style={itemStyles}>
      {text}
    </span>
  );

  return {
    ref: itemRef,
    el: itemEl,
    ...computeInitialPosition(index, textsLength, size)
  };
};

export const defaultState: TagSphereProps = {
  texts: allSkills,
  maxSpeed: 7,
  initialSpeed: 7,
  initialDirection: 135,
  keepRollingAfterMouseOut: true,
  useContainerInlineStyles: true,
  fullWidth: false,
  fullHeight: false
};
