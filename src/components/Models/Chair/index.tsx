import { useGLTF, useTexture } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
import { useCustomization } from '../../../context/index.';

const Chair = (props: any) => {
  const { nodes, materials } = useGLTF('./models/chair.gltf');
  const { material, legs, chairColor, cushionColor } = useCustomization();

  const leatherTextureProps = useTexture({
    normalMap: '/textures/leather/Leather_008_Normal.jpg',
    roughnessMap: '/textures/leather/Leather_008_Roughness.jpg',
    aoMap: '/textures/leather/Leather_008_Ambient Occlusion.jpg',
  });

  const fabricTextureProps = useTexture({
    normalMap: '/textures/fabric/Fabric_Knitted_006_normal.jpg',
    roughnessMap: '/textures/fabric/Fabric_Knitted_006_roughness.jpg',
    aoMap: '/textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg',
  });

  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={(nodes.Chair as any).geometry} castShadow>
        <meshStandardMaterial
          {...(material === 'leather'
            ? leatherTextureProps
            : fabricTextureProps)}
          color={chairColor?.color}
        />
      </mesh>

      <mesh
        castShadow
        geometry={(nodes.Cushion as any).geometry}
        position={[0, 0.06, 0.04]}
      >
        <meshStandardMaterial
          {...fabricTextureProps}
          color={cushionColor?.color}
        />
      </mesh>

      <mesh
        castShadow
        geometry={(nodes.Legs1 as any).geometry}
        material={materials.Legs}
        visible={legs === 1}
      />

      <mesh
        castShadow
        geometry={(nodes.Legs2 as any).geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
    </group>
  );
};

export default Chair;

useGLTF.preload('./models/chair.gltf');
