import React from "react";

export default () => {
  return (
    <group>
      <ambientLight intensity={0.1} />
  
      <spotLight
         castShadow={true}
         shadow-mapSize-height={512}
         shadow-mapSize-width={512}
        color="hsl(210, 100%, 70%)"
        position={[16, 25, -25]}
        rotation={[1.1, 1.7, 1.0]}
      />
      <spotLight
          castShadow={true}
         shadow-mapSize-height={512}
         shadow-mapSize-width={512}
        color="hsl(30, 100%, 70%)"
        position={[16, 25, -25]}
        rotation={[1.1, 1.7, 1.0]}
      />
         <spotLight
          castShadow={true}
         shadow-mapSize-height={512}
         shadow-mapSize-width={512}
        color="hsl(30, 100%, 20%)"
        position={[4, 2, 4]}        
      />
             

    </group>
  );
};
