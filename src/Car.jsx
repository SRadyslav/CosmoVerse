import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import carModel from './models/car.glb?url'

function Car({ x, y, z }) {

    const loader = new GLTFLoader()
    loader.load(carModel, (d) => {
        const entity = document.getElementById("car")
        entity.object3D.add(d.scene)
    })
    return (
        <a-entity
            id="car"
            position={`${x} ${y} ${z}`}
            scale="0.1 0.1 0.1"
            rotation="0 20 0.2"
        >
        </a-entity>
    )
}



export default Car