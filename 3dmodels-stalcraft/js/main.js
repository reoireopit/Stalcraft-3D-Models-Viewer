import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import {OrbitControls} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);

var object;

let controls;

const loader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container").appendChild(renderer.domElement);

camera.position.x = 1;

const topLight1 = new THREE.DirectionalLight(0xFFFFFF, 5);
topLight1.position.set(500, 500, 0);
topLight1.castShadow = true;
scene.add(topLight1);

const topLight2 = new THREE.DirectionalLight(0xFFFFFF, 4);
topLight2.position.set(-500, 500, 0);
topLight2.castShadow = false;
scene.add(topLight2);

controls = new OrbitControls(camera, renderer.domElement);

var isload = false;
function loadmodel(){
    if (isload === false){
      loader.load(`models/${document.querySelector('#model').value}/scene.gltf`, function (gltf){
        object = gltf.scene;
        scene.add(object);
        isload = true;
      });
    }
}

var choose = "nothing";

var aek545 = false;
var aek919 = false;
var aa12 = false;
var aek971 = false;
var ak12 = false;
var ak15 = false;
var ak103 = false;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  if (document.querySelector('#model').value !== 'choose'){
    loadmodel();
    choose = document.querySelector('#model').value;
      if (choose === "aek545" && isload === true && aek545 !== true){
          loadmodel();
          isload = false;
          aek545 = true;
      }
      else if (choose === "aek919" && isload === true && aek919 !== true){
          loadmodel();
          isload = false;
          aek919 = true;
      }
      else if (choose === "aa12" && isload === true && aa12 !== true){
          loadmodel();
          isload = false;
          aa12 = true;
    }
      else if (choose === "aek971" && isload === true && aek971 !== true){
          loadmodel();
          isload = false;
          aek971= true;
      }
      else if (choose === "ak12" && isload === true && ak12 !== true){
          loadmodel();
          isload = false;
          ak12= true;
      }
      else if (choose === "ak15" && isload === true && ak15 !== true){
          loadmodel();
          isload = false;
          ak15= true;
      }
      else if (choose === "ak103" && isload === true && ak103 !== true){
          loadmodel();
          isload = false;
          ak103= true;
      }
      else {
          choose = 'choose';
      }
  }
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();