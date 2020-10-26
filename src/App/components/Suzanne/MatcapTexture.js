import React from "react";
import { useGLTF, useMatcapTexture, useSubdivision } from "@react-three/drei";

import suzanne from "./suzanne.glb";

export default () => {
  const { nodes } = useGLTF(suzanne, true);
  const suzanneRef = useSubdivision(2);

  const [matcap] = useMatcapTexture(
    "515151_DCDCDC_B7B7B7_9B9B9B", // Index or ID string, see: https://github.com/emmelleppi/matcaps/
    1024 // Texture size (64, 128, 256, 512, 1024)
  );

  return (
    <mesh geometry={nodes.Suzanne.geometry} ref={suzanneRef}>
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};
