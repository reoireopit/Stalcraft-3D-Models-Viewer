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
var ak105 = false;
var ak203 = false;
var ak308 = false;
var akm = false;
var aks74 = false;
var aksu = false;
var alk22 = false;
var alpine = false;
var am17 = false;
var amb17 = false;
var an94 = false;
var aps = false;
var ash12 = false;
var aug = false;
var aug_9mm = false;
var aug_9xs = false;
var aug_a2 = false;
var aug_a3 = false;
var benelli = false;
var benelli_shorty = false;
var beretta = false;
var beretta_93 = false;
var kojemyaka = false;
var bizon = false;
var bm16 = false;
var bm16_obrez = false;
var bolt = false;
var snowball = false;

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
      else if (choose === "ak105" && isload === true && ak105 !== true){
          loadmodel();
          isload = false;
          ak105= true;
      }
      else if (choose === "ak203" && isload === true && ak203 !== true){
          loadmodel();
          isload = false;
          ak203= true;
      }
      else if (choose === "ak308" && isload === true && ak308 !== true){
          loadmodel();
          isload = false;
          ak308= true;
      }
      else if (choose === "akm" && isload === true && akm !== true){
          loadmodel();
          isload = false;
          akm= true;
      }
      else if (choose === "aks74" && isload === true && aks74 !== true){
          loadmodel();
          isload = false;
          aks74= true;
      }
      else if (choose === "aksu" && isload === true && aksu !== true){
          loadmodel();
          isload = false;
          aksu= true;
      }
      else if (choose === "alk22" && isload === true && alk22 !== true){
          loadmodel();
          isload = false;
          alk22= true;
      }
      else if (choose === "alpine" && isload === true && alpine !== true){
          loadmodel();
          isload = false;
          alpine= true;
      }
      else if (choose === "am17" && isload === true && am17 !== true){
          loadmodel();
          isload = false;
          am17= true;
      }
      else if (choose === "amb17" && isload === true && amb17 !== true){
          loadmodel();
          isload = false;
          amb17= true;
      }
      else if (choose === "an94" && isload === true && an94 !== true){
          loadmodel();
          isload = false;
          an94= true;
      }
      else if (choose === "aps" && isload === true && aps !== true){
          loadmodel();
          isload = false;
          aps= true;
      }
      else if (choose === "ash12" && isload === true && ash12 !== true){
          loadmodel();
          isload = false;
          ash12= true;
      }
      else if (choose === "aug" && isload === true && aug !== true){
          loadmodel();
          isload = false;
          aug= true;
      }
      else if (choose === "aug_9mm" && isload === true && aug_9mm !== true){
          loadmodel();
          isload = false;
          aug_9mm= true;
      }
      else if (choose === "aug_9xs" && isload === true && aug_9xs !== true){
          loadmodel();
          isload = false;
          aug_9xs= true;
      }
      else if (choose === "aug_a2" && isload === true && aug_a2 !== true){
          loadmodel();
          isload = false;
          aug_a2= true;
      }
      else if (choose === "aug_a3" && isload === true && aug_a3 !== true){
          loadmodel();
          isload = false;
          aug_a3= true;
      }
      else if (choose === "benelli" && isload === true && benelli !== true){
          loadmodel();
          isload = false;
          benelli= true;
      }
      else if (choose === "benelli_shorty" && isload === true && benelli_shorty !== true){
          loadmodel();
          isload = false;
          benelli_shorty= true;
      }
      else if (choose === "beretta" && isload === true && beretta !== true){
          loadmodel();
          isload = false;
          beretta= true;
      }
      else if (choose === "beretta_93" && isload === true && beretta_93 !== true){
          loadmodel();
          isload = false;
          beretta_93= true;
      }
      else if (choose === "kojemyaka" && isload === true && kojemyaka !== true){
          loadmodel();
          isload = false;
          kojemyaka= true;
      }
      else if (choose === "bizon" && isload === true && bizon !== true){
          loadmodel();
          isload = false;
          bizon= true;
      }
      else if (choose === "bm16" && isload === true && bm16 !== true){
          loadmodel();
          isload = false;
          bm16= true;
      }
      else if (choose === "bm16_obrez" && isload === true && bm16_obrez !== true){
          loadmodel();
          isload = false;
          bm16_obrez= true;
      }
      else if (choose === "bolt" && isload === true && bolt !== true){
          loadmodel();
          isload = false;
          bolt= true;
      }
      else if (choose === "snowball" && isload === true && snowball !== true){
          loadmodel();
          isload = false;
          snowball= true;
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