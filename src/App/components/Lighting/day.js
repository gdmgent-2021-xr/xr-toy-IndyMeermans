import React from "react";

export default () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow={true}
        color="hsl(0, 0%, 70%)"
        intensity={0.6}
        position={[0, 8, 6]}
      />
      <directionalLight
        castShadow={true}
        color="hsl(210, 100%, 70%)"
        position={[-6, 0, 0]}
      />
      <directionalLight
        castShadow={true}
        color="hsl(30, 100%, 70%)"
        position={[8, 0, 0]}
      />
      s
    </group>
  );
};
