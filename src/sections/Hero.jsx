import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";

const Hero = () => {
    const controls = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        }, positionY: {
            value: 2.5,
            min: -10,
            max: 10
        }, positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
    });
    return (
        <section className="min-h-screen w-full flex flex-col relative s">
        <div className="w-full mx-auto flex flex-col m:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi <span className="waving-hand">👋</span> ,  I am Gargi </p>
            <p className="hero_tag text-gray_gradient text-l">A Full-Stack Web Developer</p>
        </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <HackerRoom
                            // scale={0.07}
                            position={[0, 0, 0]}
                            rotation={[0, -Math.PI/2, 0]}
                            scale={[controls.positionX, controls.positionY, controls.positionZ]}
                        />
                        <Leva/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
