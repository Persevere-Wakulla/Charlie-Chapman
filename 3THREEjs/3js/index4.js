import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75,w/h,0.1,1000);
// camera.position.z = 5;
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(w,h);
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.outputColorSpace = THREE.SRGBColorSpace;
// document.body.appendChild(renderer.domElement);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshStandardMaterial({
//     color:0xffff00,
// });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube)

const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);



function animate(){
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.02;
    renderer.render(scene,camera);
    controls.update();

}

animate()