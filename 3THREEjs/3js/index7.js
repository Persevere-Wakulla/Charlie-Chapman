import * as THREE from "three"
import { TextGeometry } from "three/examples/jsm/Addons";
import { FontLoader, Wireframe } from "three/examples/jsm/Addons.js";
import { color } from "three/examples/jsm/nodes/Nodes.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const w= window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w,h)
document.body.appendChild(renderer.domElement);
const fov =95;
const aspect= w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
new OrbitControls(camera, renderer.domElement);

camera.position.z = 2;
const scene = new THREE.Scene()
const size = 10;
const divisions = 10;

const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
pointLight.position.set( 10, 10, 10 );
scene.add( pointLight );

const spotLight = new THREE.SpotLight( 0xF0FFFF );
spotLight.position.set( 10, 10, 10 );
scene.add( spotLight );

const spotLightHelper = new THREE.SpotLightHelper( spotLight );
scene.add( spotLightHelper );

const geo = new THREE.CylinderGeometry(.5,.1)
const mat = new THREE.MeshPhysicalMaterial({
	color: 0xFFF8DC
	,
	flatShading:true,
});
const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshStandardMaterial( {
	color: 0xFF00FF, 
	side: THREE.DoubleSide,
	flatShading:true
} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );
plane.position.x = 1.9;

const geometry2 = new THREE.CircleGeometry( 1, .5 ); 
const material2 = new THREE.LineDashedMaterial( { color: 0x008B8B} ); 
const circle = new THREE.Mesh( geometry2, material2 ); scene.add( circle );
circle.position.x = -1.9;

scene.add(circle )
 const wireMat = new THREE.MeshBasicMaterial({
	color:0xDC143C,
 })
 const wireMesh = new THREE.Mesh(geometry2, wireMat);
 scene.add(wireMesh)
 wireMesh.position.x = -1.9;


 const wireMat1 = new THREE.MeshBasicMaterial({
	color:0xDC143C,
 })
 const wireMesh1 = new THREE.Mesh(geometry, wireMat);
 scene.add(wireMesh1)
 wireMesh1.position.x = 1.9;

//  const wireMesh1 = new THREE.Mesh(geometry2, wireMat);
//  scene.add(wireMesh1)
//  wireMesh1.position.x = 1.9;

 function animate(t =0){
	// console.log(t);
	requestAnimationFrame(animate)
	// mesh.rotation.z = t*0.0001
	plane.rotation.z = t*0.0008
	circle.rotation.z = t*0.0008
	// mesh.rotation.y = t*0.0008
	wireMesh.rotation.z = t*-0.0008
	wireMesh1.rotation.z = t*-0.0008
	// mesh.scale.setScalar(Math.cos(t *0.001) + 1.0)
	renderer.render(scene, camera)
 }
animate()






// const loader = new FontLoader();
// const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
// const torus = new THREE.Mesh( geometry, material ); scene.add( torus );

// const extrudeSettings = {
// 	steps: 2,
// 	depth: 16,
// 	bevelEnabled: true,
// 	bevelThickness: 1,
// 	bevelSize: 1,
// 	bevelOffset: 0,
// 	bevelSegments: 1
// };


// loader.load( 'a dripping marker_Regular.json', function ( font ) {

// 	const geometry = new TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		depth: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );
// } );
