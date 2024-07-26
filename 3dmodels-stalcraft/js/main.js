import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import {OrbitControls} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);

let object;

let controls;

const loader = new GLTFLoader();
loader.load(
  `models/${document.getElementById('model').value}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
  },
  function (progress) {
    console.log(('total progress: ' + progress.total) + ' (' + progress.loaded / progress.total * 100 + '%)');
  },
  function (error) {
    console.error('ERROR: ' + error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container").appendChild(renderer.domElement);

camera.position.x = 1;

const topLight1 = new THREE.DirectionalLight(0xFFFFFF, 5); // (color, intensity)
topLight1.position.set(500, 500, 0) //top-left-ish
topLight1.castShadow = true;
scene.add(topLight1);

const topLight2 = new THREE.DirectionalLight(0xFFFFFF, 4); // (color, intensity)
topLight2.position.set(-500, 500, 0) //top-left-ish
topLight2.castShadow = false;
scene.add(topLight2);

controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();