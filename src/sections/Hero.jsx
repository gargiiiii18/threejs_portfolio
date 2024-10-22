import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";

const Hero = () => {
    // const controls = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     }, positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     }, positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //         },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     },
    // });

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative s">
            {/*<Leva/>*/}
        <div className="w-full mx-auto flex flex-col m:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi <span className="waving-hand">👋</span> ,  I am Gargi </p>
            <p className="hero_tag text-gray_gradient text-l">A Full-Stack Web Developer</p>
        </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HackerRoom
                            // position={ isMobile ? [0.9, -3.1, 2.5] : [1.3, -8.5, 2.5]}
                            // rotation={[0, -Math.PI, 0]}
                            // scale={isMobile ? 0.07 : 0.1}
                            // position={[controls.positionX, controls.positionY, controls.positionZ]}
                            // rotation={[0, -Math.PI, 0]}
                            // scale={isMobile ? 0.07 : 0.1}
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                            scale={sizes.deskScale}
                        />

                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
