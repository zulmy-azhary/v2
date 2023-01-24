/* eslint-disable react-hooks/exhaustive-deps */
import { createItem, defaultState, defaultStyles, updateItemPosition } from "@/helpers/tagSphere";
import { TagSphereProps } from "@/types/tagCloud";
import { createRef, ReactNode, useEffect, useRef, useState, useCallback } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  radius?: number;
  texts?: ReactNode[];
}

export const TagSphere: React.FC<Props> = (props) => {
  const {
    maxSpeed,
    initialSpeed,
    texts,
    initialDirection,
    keepRollingAfterMouseOut,
    fullHeight,
    fullWidth,
    style,
    useContainerInlineStyles,
  }: TagSphereProps = { ...defaultState, ...props };

  let radius = props.radius;

  if (!radius) {
    radius = texts.length * 15;
  }

  const depth = 1 * radius;
  const size = 1.5 * radius;
  const itemHooks = texts.map(() => createRef());
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    setItems(() =>
      texts.map((text, index) => createItem(text, index, texts.length, size, itemHooks[index]))
    );
  }, [texts]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [firstRender, setFirstRender] = useState(true);
  const [lessSpeed, setLessSpeed] = useState(maxSpeed);
  const [active, setActive] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent | React.Touch) => {
    const rect = (containerRef.current as HTMLDivElement).getBoundingClientRect();

    setMouseX(() => (e.clientX - (rect.left + rect.width / 2)) / 5);
    setMouseY(() => (e.clientY - (rect.top + rect.height / 2)) / 5);
  };

  const checkTouchCoordinates = (e: React.TouchEvent) => {
    const rect = (containerRef.current as HTMLDivElement).getBoundingClientRect();
    const touchX = e.targetTouches[0].clientX;
    const touchY = e.targetTouches[0].clientY;

    if (touchX > rect.left && touchX < rect.right && touchY < rect.bottom && touchY > rect.top) {
      return true;
    }

    return false;
  };

  const next = useCallback(() => {
    setItems((items: any) => {
      if (lessSpeed == 0) return items;
      let a: number, b: number;

      if (radius) {
        if (!keepRollingAfterMouseOut && !active && !firstRender) {
          setLessSpeed((lessSpeedCurrent) => {
            const lessConstant = lessSpeed * (maxSpeed / 200);
  
            return lessSpeedCurrent - lessConstant > 0.01 ? lessSpeedCurrent - lessConstant : 0;
          });
  
          a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * lessSpeed;
          b = (Math.min(Math.max(-mouseX, -size), size) / radius) * lessSpeed;
        } else if (!active && !firstRender && keepRollingAfterMouseOut) {
          a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * (maxSpeed * 0.5);
          b = (Math.min(Math.max(-mouseX, -size), size) / radius) * (maxSpeed * 0.5);
        } else {
          a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
          b = (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;
        }
        if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return items; // pause
  
        // calculate offset
        const l = Math.PI / 180;
        const sc = [Math.sin(a * l), Math.cos(a * l), Math.sin(b * l), Math.cos(b * l)];

        return items.map((item: any) => updateItemPosition(item, sc, depth));
      }
    });
  }, [
    active,
    depth,
    firstRender,
    keepRollingAfterMouseOut,
    lessSpeed,
    maxSpeed,
    mouseX,
    mouseY,
    radius,
    size,
  ]);

  const init = () => {
    setActive(false);
    const mouseX0 = initialSpeed * Math.sin(initialDirection * (Math.PI / 180));
    const mouseY0 = -initialSpeed * Math.cos(initialDirection * (Math.PI / 180));

    setMouseX(() => mouseX0);
    setMouseY(() => mouseY0);

    next();
  };

  useEffect(() => {
    init();
    setItems((items: any) => [...items]);
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(next);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, lessSpeed, active, items, props.radius, next]);

  return (
    <div
      className={props.className}
      ref={containerRef}
      onMouseOver={() => {
        setActive(true);
        setFirstRender(false);
        setLessSpeed(maxSpeed);
      }}
      onMouseOut={() => {
        init();
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={() => {
        setActive(true);
        setLessSpeed(maxSpeed);
        setFirstRender(false);
      }}
      onTouchMove={(e) => {
        if (checkTouchCoordinates(e)) {
          handleMouseMove(e.targetTouches[0]);
        } else {
          setActive(false);
        }
      }}
      style={
        useContainerInlineStyles
          ? style || defaultStyles.getContainer(radius, fullWidth, fullHeight)
          : undefined
      }
    >
      {items.map((item) => item.el)}
    </div>
  );
}


export default TagSphere;