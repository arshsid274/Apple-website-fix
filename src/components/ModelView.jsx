import { OrbitControls, PerspectiveCamera, View, Html } from "@react-three/drei"

import * as THREE from 'three'
import IPhone from "./IPhone"
import Macbook from "./Macbook" 

import Lights from "./Lights"
import { Suspense } from "react"
import Loader from './Loader'




const ModelView = ({index, groupRef, gsapType, controlRef, size, item, setRotationState}) => {
  return (


    <View
    index={index}
    id={gsapType}
    groupRef={groupRef}
    
    controlRef={controlRef}
    size={size}
    item={item}
    className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]': '' }`}>

        {/* Ambient Light  */}

        <ambientLight intensity={0.3 } />
        

        <PerspectiveCamera makeDefault position={[0, 0,4]}/>

        <Lights/>

        <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}/>





        <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
           <Suspense fallback={<Loader></Loader>}>
  <IPhone scale={index === 1 ? [15, 15, 15] : [17,17,17]} 
  item={item}
  size={size}/>


</Suspense>





        </group>

         {/* <group
        ref={groupRef}
        name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
           <Suspense fallback={<Html><div>Loading...</div></Html>}>
  
<Macbook screenImage="/assets/images/MacScreen.png" scale={index === 1 ? [10, 10, 10] : [13,13,13]} />

</Suspense>





        </group> */}

        



    </View>
  )
}

export default ModelView