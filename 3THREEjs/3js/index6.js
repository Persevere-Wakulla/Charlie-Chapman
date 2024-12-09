import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xC71585} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;


// const geometry1 = new THREE.CircleGeometry( 2, 2 ); 
// const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
// const circle = new THREE.Mesh( geometry1, material1 ); 
// scene.add( circle );

const geometry3 = new THREE.RingGeometry( 1, 2,12 ); 
const material3 = new THREE.MeshBasicMaterial( { color: 0x008080, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry3, material3 ); scene.add( mesh );

const geometry2 = new THREE.TorusGeometry( 2, 0.03, 2, 4 ); 
const material2 = new THREE.MeshBasicMaterial( { color: 0xC71585 } ); 
const torus = new THREE.Mesh( geometry2, material2 ); 
scene.add( torus );

const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 15;
scene.add(dodecahedron);

const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );
// const light = new THREE.HemisphereLight( 0xFFD700, 0x080820, 1 );
// const helper = new THREE.HemisphereLightHelper( light, 5 );
// scene.add( helper );

// const helper = new THREE.SkeletonHelper( skinnedMesh );
// scene.add( helper );

camera.position.z = 10;
function animate(t) {
cube.rotation.y += 0.01;
cube.rotation.x += 0.08;
mesh.rotation.y = t * 0.0001

// torus.rotation.y += 0.01;
mesh.rotation.x += 0.08;


	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );