import * as THREE from "three"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);

camera.position.z = 5;
// cube.position.x = -1;

function animate() {
//     cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;
// cube.rotation.set(0.4, 0.2, 0);

	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );