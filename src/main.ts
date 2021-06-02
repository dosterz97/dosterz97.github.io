import './style.css'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('globalCanvas') as HTMLCanvasElement
})

renderer.setPixelRatio(window.devicePixelRatio || 1)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)

renderer.render(scene, camera)

const geometry = new THREE.TorusBufferGeometry(10, 3 , 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 })
const torus = new THREE.Mesh(geometry, material)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20, 20,20)
const ambientLight = new THREE.AmbientLight(0xffffff)
const pointLightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)
const controls = new OrbitControls(camera, renderer.domElement)
scene.add(torus)
scene.add(pointLight)
scene.add(ambientLight)
scene.add(pointLightHelper)
scene.add(gridHelper)

const skyTexture = new THREE.TextureLoader().load('src/assets/sky.jpg');
scene.background = skyTexture;


const zachTexture = new THREE.TextureLoader().load('src/assets/zach.png');

const zach = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: zachTexture }));

scene.add(zach);

const grassTexture = new THREE.TextureLoader().load('src/assets/grass.jpg');
const normalTexture = new THREE.TextureLoader().load('src/assets/water.jpg');

const grassBall = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: grassTexture,
    normalMap: normalTexture,
  })
);

scene.add(grassBall);

grassBall.position.z = 30;
grassBall.position.setX(-10);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff})
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3)
    .fill(0)
    // @ts-expect-error
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill(undefined).forEach(addStar)



function animate() {
  requestAnimationFrame(animate)
 
  torus.rotation.x += 0.1
  torus.rotation.y += 0.005
  torus.rotation.z -= 0.2
 
  controls.update()

  renderer.render(scene, camera)
}


animate()
