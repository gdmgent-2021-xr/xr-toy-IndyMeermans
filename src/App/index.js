import React, { Suspense } from "react";
// import { Canvas } from "react-three-fiber";
import { FlyControls, OrbitControls } from "@react-three/drei";
import { DefaultXRControllers, VRCanvas } from "@react-three/xr";

import {
  GlTransmissionFormat,
  Lighting,
  Suzanne,
  Tripod,
} from "App/components";
import "./styles.css";

export default () => {
  return (
    <VRCanvas invalidateFrameloop={false}>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      <FlyControls dragToLook={true} />
      {false && <DefaultXRControllers />}
      {false && <Lighting />}
      {true && <Tripod />}
      {false && (
        <Suspense fallback={null}>
          <Suzanne />
          <GlTransmissionFormat />
        </Suspense>
      )}
    </VRCanvas>
  );
};
