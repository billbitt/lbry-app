import * as THREE from 'three';

import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/OBJLoader';
import 'three/examples/js/loaders/STLLoader';

// Currently it's not possible to import the files within the "examples/js" directory.
// Fix: https://github.com/mrdoob/three.js/issues/9562#issuecomment-383390251

global.THREE = THREE;

module.exports = global.THREE;
