import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import GlitchShader from './GlitchShader';

// HACK: Needed to make OBJLoader loader to work
// since it expect TREE as a global variable in a browser
if (typeof window !== 'undefined') {
  window.THREE = THREE;
} else {
  global.THREE = THREE;
}

require('three/examples/js/loaders/OBJLoader');

const Logo = ({ scale }) => {
  const mountRef = useRef(null);
  const controls = useRef(null);

  const h = 180 * scale;
  const w = 1200 * scale;

  const zoom = 6 * scale;

  useEffect(() => {
    let frameId;
    const startTime = Date.now();

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -(w / 100) / zoom,
      w / 100 / zoom,
      h / 100 / zoom,
      -(h / 100) / zoom,
      0.01,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    let logoMesh;

    const loader = new window.THREE.OBJLoader();

    loader.load('logo_01.obj', obj => {
      logoMesh = obj.children[0];
      const mUniforms = {
        time: { value: 0 },
        mousePos: { value: new THREE.Vector3() },
      };
      const material = new THREE.ShaderMaterial({
        uniforms: mUniforms,
        vertexShader: GlitchShader.vertex,
        fragmentShader: GlitchShader.fragment,
        side: THREE.DoubleSide,
      });
      logoMesh.material = material;
      scene.add(logoMesh);
    });

    camera.position.z = 4;
    camera.position.y = 0.3;
    renderer.setClearColor('#FFFFFF');
    renderer.setSize(w, h);
    renderer.setPixelRatio(2);

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      // width = mountRef.current.clientWidth;
      // height = mountRef.current.clientHeight;
      // renderer.setSize(width, height);
      // camera.aspect = width / height;
      // camera.updateProjectionMatrix();
      renderScene();
    };
    let mouse = new THREE.Vector2();
    const worldMouse = new THREE.Vector3();
    const handleMouseMove = event => {
      mouse.x =
        ((event.clientX - renderer.domElement.offsetLeft) /
          renderer.domElement.clientWidth) *
          2 -
        1;
      mouse.y =
        -(
          (event.clientY - renderer.domElement.offsetTop) /
          renderer.domElement.clientHeight
        ) *
          2 +
        1;
      worldMouse.set(
        mouse.x,
        mouse.y,
        (camera.near + camera.far) / (camera.near - camera.far),
      );
      worldMouse.unproject(camera);
      worldMouse.z = 0;
      if (logoMesh) {
        logoMesh.material.uniforms.mousePos.value = worldMouse;
      }
    };
    const animate = () => {
      if (logoMesh) {
        logoMesh.material.uniforms.time.value = (Date.now() - startTime) / 1000;
      }
      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    mountRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    start();

    controls.current = { start, stop };

    return () => {
      stop();

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div style={{ height: h, width: w }} ref={mountRef} />;
};

Logo.defaultProps = {
  scale: 0.55,
};

export default Logo;
