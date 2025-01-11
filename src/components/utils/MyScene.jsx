import { Canvas } from '@react-three/fiber';

import { Suspense } from 'react';
import Earth from '../threeJs/earth/index';

const MyScene = () => {
  return (
    <Canvas >
   <Suspense fallback={null}>
    <Earth/>
   </Suspense>
    </Canvas>
  );
};



export default MyScene;
