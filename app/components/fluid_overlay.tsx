'use client'

import { Fluid } from '@whatisjery/react-fluid-distortion';
import { EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';

export default function FluidOverlay({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          background: '#000000',
        }}>
        <EffectComposer>
          <Fluid
            radius={0.03}
            curl={10}
            swirl={5}
            distortion={1}
            force={2}
            pressure={0.94}
            densityDissipation={0.98}
            velocityDissipation={0.99}
            intensity={0.3}
            rainbow={false}
            blend={0}
            showBackground={true}
            backgroundColor='#a7958b'
            fluidColor='#cfc0a8' />
        </EffectComposer>
      </Canvas>;
      {children}
    </>
  )
}



