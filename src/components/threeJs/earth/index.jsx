import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import * as Three from "three";
import { useRef, useState, useEffect } from "react";
import {
  Earth_Clouds,
  Earth_Daymap,
  Earth_Nightmap,
  Earth_Normalmap,
  Earth_Specularmap,
} from "../../../assets/utils/threejs";

const Earth = () => {
  const [texturesLoaded, setTexturesLoaded] = useState(false);
  const eartRotationRef = useRef();
  const cloudsRotationRef = useRef();
  const earthPositionRef = useRef([-0.1, 0, 3.4]); 
  const targetPosition = [1, 0, 3]; 
  const [isDay, setIsDay] = useState(Earth_Daymap);

  useEffect(() => {
    
    const currentHour = new Date().getHours();
    
    
    if (currentHour >= 6 && currentHour < 18) {
      setIsDay(Earth_Daymap); 
    } else {
      setIsDay(Earth_Nightmap);
    }
  }, []);


  // Load textures manually using useLoader
  const [normalMap, specularMap, cloudsMap, colorMap] = useLoader(TextureLoader, [
    Earth_Normalmap,
    Earth_Specularmap,
    Earth_Clouds,
    isDay,
  ]);

  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setTexturesLoaded(true);
    }, 10); 

    return () => clearTimeout(timer); 
  }, []);

  // Animate Earth transition to its final position
  useFrame(() => {
    const lerpFactor = 0.05; 
    earthPositionRef.current = earthPositionRef.current.map((current, index) =>
      Three.MathUtils.lerp(current, targetPosition[index], lerpFactor)
    );

    if (eartRotationRef.current) {
      eartRotationRef.current.position.set(
        ...earthPositionRef.current
      );
      eartRotationRef.current.rotation.y += 0.002;
    }

    if (cloudsRotationRef.current) {
      cloudsRotationRef.current.position.set(
        ...earthPositionRef.current
      );
      cloudsRotationRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <>
    <pointLight color="rgb(255, 247, 221) " position={[2,0,5]} intensity={20}/>
      {/* Stars always render immediately */}
      <Stars
        radius={300}
        depth={60}
        count={2000}
        factor={7}
        saturation={0}
        fade={true}
      />

      {/* Render Earth only after textures are loaded */}
      {texturesLoaded && (
        <>
          {/* Clouds */}
          <mesh ref={cloudsRotationRef}>
            <sphereGeometry args={[1.005, 32, 32]} />
            <meshPhongMaterial
              map={cloudsMap}
              opacity={0.4}
              depthWrite={true}
              transparent={true}
              side={Three.DoubleSide}
            />
          </mesh>

          {/* Earth */}
          <mesh ref={eartRotationRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial
              map={colorMap}
              normalMap={normalMap}
              metalness={0.4}
              roughness={0.7}
            />
          </mesh>
        </>
      )}
    </>
  );
};

export default Earth;
