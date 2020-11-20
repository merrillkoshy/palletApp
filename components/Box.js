import React, { useState, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

export const Box = ({ size, position, color, texture }) => {
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  // useEffect(() => {
  //   let timeout
  //   const toggleActive = () => {
  //     timeout = setTimeout(() => {
  //       setActive(Number(!activeRef.current))
  //       toggleActive()
  //     }, Math.random() * 2000 + 1000)
  //   }
  //   toggleActive()
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [])

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
  });

  const scale = spring.to([0, 1], [1, 2]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  console.log(texture);
  return (
    <a.mesh
      rotation-y={rotation}
      scale-x={scale}
      scale-y={scale}
      scale-z={scale}
      position={position}
    >
      <boxBufferGeometry attach="geometry" args={size} />
      <a.meshStandardMaterial
        roughness={0.5}
        attach="material"
        color={color}
        map={texture}
      />
    </a.mesh>
  );
};
