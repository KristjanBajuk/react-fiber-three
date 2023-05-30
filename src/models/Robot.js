/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import * as THREE from 'three';
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Robot(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/lilChick.gltf");
    const { actions } = useAnimations(animations, group);

    const playRevealAnimation = () => {
        console.log("Reveal Animation");
        actions.LittleChick_Reveal.reset().play();
        actions.LittleChick_Reveal.loop = THREE.LoopOnce;
    }

    return (
        <group ref={group} onClick={()=>playRevealAnimation()} {...props} dispose={null}>
            <group name="Scene">
                <group name="LittleChick" userData={{ name: "LittleChick" }}>
                    <primitive object={nodes.Root} />
                    <primitive object={nodes.Leg_R_IK} />
                    <primitive object={nodes.Legl_IK} />
                    <group name="Cube" userData={{ name: "Cube" }}>
                        <skinnedMesh
                            name="Cube_1"
                            geometry={nodes.Cube_1.geometry}
                            material={materials.Lil_Chick}
                            skeleton={nodes.Cube_1.skeleton}
                        />
                        <skinnedMesh
                            name="Cube_2"
                            geometry={nodes.Cube_2.geometry}
                            material={materials["Material.001"]}
                            skeleton={nodes.Cube_2.skeleton}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/lilChick.gltf");
