import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF, useMatcapTexture, Text } from "@react-three/drei";


import auto from "./meermans_indy_toy.glb";
import omgeving from "./omgeving.glb";
import moon from "./moon.glb";
import LightingStudio from "../Lighting/day.js";



export default () => {
    const [animation, setActive] = useState(false);
    const [Lighting, dayLight] = useState(false);

    const materials  = useGLTF(auto, true);
    const  natuur  = useGLTF(omgeving, true);
    const { nodes, sky }  = useGLTF(moon, true);

    const carRef = useRef();
    const natuurRef = useRef();
    const beginPosition = [0,0.71,0];
    const endPosition = [0,0.71,6];


  console.log("materials:", materials);
  console.log("scene:", natuur);
  console.log("moon", nodes);


  const [matcap] = useMatcapTexture(
    "63584B_E6E0D6_A8A092_BFB6A8", // Index or ID string, see: https://github.com/emmelleppi/matcaps/
    1024 // Texture size (64, 128, 256, 512, 1024)
  );
    useFrame(() => {
        if(animation == true){
            carRef.current.position.z  += 0.01;
                if(carRef.current.position.z > endPosition[2]){
                   // carRef.current.position.x  += 0.035;
                   setActive (!animation)

                    carRef.current.position.set(0,0.71,0) ;
                    console.log(carRef.current.position);

                }
        }
    });

    useEffect(() => {
        document.body.classList.toggle('Dark');

      },[Lighting])
  
  return (
      <group>

                <primitive
                    object={materials.scene}
                    position ={animation ?  [0,0.71,0] : beginPosition}
                    ref={carRef}
                    onClick={  e => setActive (!animation) }
                    receiveShadow= {true}

                > </primitive>
            
            
                
                <primitive
                object={ natuur.scene}
                position ={[0,0,0]}
                ref={natuurRef}
                />
                    
                {Lighting && <LightingStudio />}


                <mesh  rotation={[0, 5.7, 0]}>
                    <Text position={[3.13, 2.2, -2]} fontSize={0.2}>Click on the vehicle</Text>
                    <Text position={[3.13, 1.9, -2]} fontSize={0.2}>Or the moon </Text>

                    <meshStandardMaterial />
                    </mesh>


                    <mesh 
                        geometry={nodes.Icosphere.geometry} 
                        position={[16, 25, -25]}
                        rotation={[1.1, 1.7, 1.0]}
                        scale={[2, 2, 2]}
                        ref={natuurRef}
                        onClick={  e => dayLight (!Lighting) }>

                        <meshMatcapMaterial matcap={matcap} />
                        
                    </mesh>
                
        </group>
    );
};