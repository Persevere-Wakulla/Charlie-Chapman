import * as THREE from "three"
import { Wireframe } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { color } from "three/examples/jsm/nodes/Nodes.js";
const w= window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w/h, 1, 500);
const renderer = new THREE.WebGLRenderer({antialias: true});
camera.position.z = 5;
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

const earthGroup = new  THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
scene.add(earthGroup);
new OrbitControls(camera, renderer.domElement);
const detail = 12;
const loader = new THREE.TextureLoader()
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("../textures/00_earthmap1k.jpg")
});
const earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

const lightsMat = new THREE.MeshToonMaterial({
  color:0x228B22
})

// const knot = new THREE.Mesh(
//   new THREE.TorusKnotGeometry(0.5, 0.1),
//   new THREE.MeshNormalMaterial({}),
// );
// const knotBoxHelper = new THREE.BoxHelper(knot, 0x00ff00);
// scene.add(knotBoxHelper);


const lightsMesh =  new THREE.Mesh(geometry, lightsMat)
earthGroup.add(lightsMesh)
// const geometry1 = new THREE.RingGeometry( -.05, 1.5, 32 ); 
// const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
// const mesh = new THREE.Mesh( geometry1, material1 ); scene.add( mesh );
// mesh.position.x = 2;
earthMesh.position.x = -2.5;

const geometry1 = new THREE.IcosahedronGeometry(1, detail);
const material1 = new THREE.MeshStandardMaterial({
  map: loader.load("../textures/03_earthlights1k.jpg")
});
const earthMesh1 = new THREE.Mesh(geometry1, material1);
scene.add(earthMesh1);
earthMesh1.position.x = 2.5;
const size = 10;
const divisions = 10;



//  sphere.position.x = 2;

// const stars = getStarfield;
// scene.add(stars)
// const lightsMat = new THREE.MeshBasicMaterial({
   
//   map: loader.load("../textures/03_earthlights1k.jpg"),
//   blending: THREE.AdditiveBlending
// })
// const lightsMesh = new THREE.Mesh(geometry, lightsMat)
// earthGroup.add(lightsMesh)
const hemiLight = new THREE.HemisphereLight();
scene.add(hemiLight);
// const sunLight = new THREE.DirectionalLight(0xffffff);
// sunLight.position.set(-2, 0.5, 1.5)
// scene.add(sunLight);

const geometry3 = new THREE.BoxGeometry( 100, 100, 100 ); 
const edges = new THREE.EdgesGeometry( geometry ); 
const line = new THREE.LineSegments(edges, new THREE.LineDashedMaterial( { color: 0x191970} ) ); 
scene.add( line );
const lod = new THREE.LOD();



// const geometry4 = new THREE.BoxGeometry( 1, 1, 1 );
// const material4 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

// const cubeA = new THREE.Mesh( geometry4, material4 );
// cubeA.position.set( 5, 1, 0 );

// const cubeB = new THREE.Mesh( geometry4, material4 );
// cubeB.position.set( -5, -1, 0 );

//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
// const group = new THREE.Group();
// group.add( cubeA );
// group.add( cubeB );

// scene.add( group );

// const light = new THREE.PointLight(0xFFFF00
//   );
// light.position.set( .05, 0.7, 1);
// scene.add(light);
const sphere = new THREE.SphereGeometry();
const object = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( 0xff0000 ) );
const box = new THREE.BoxHelper( object, 0xffff00 );
scene.add( box );


function animate() {
    requestAnimationFrame(animate)
    earthMesh1.rotation.z += 0.012;
    earthMesh.rotation.y += 0.005;
    line.rotation.y += 0.008;
    // lightsMesh.rotation.y += 0.002;
    renderer.render(scene, camera)
}
animate()