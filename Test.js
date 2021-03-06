class Test {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
  }

  init() {
    const rendererOptions = {
      antialias: true,
    };
    const renderer = new THREE.WebGLRenderer(rendererOptions);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd6ccc9);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const controls = new THREE.OrbitControls(camera);
    controls.update();

    const geometry = new THREE.CubeGeometry(0.6, 0.6, 0.6);
    const material = Test.createMaterialPalette(100);
    const cube = new THREE.Mesh(geometry, material);

    //CUBE

    // scene.add(cube);

    let sphere = new THREE.SphereBufferGeometry(0.01, 100, 100);
    let time = Date.now() * 0.0001;

    const lights = [];
    const pointLights = [];

    function makePointLight(color, intensity) {
      let pointLight = new THREE.PointLight(color, intensity, 1);
      pointLight.add(
        new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff6128 }))
      );
      pointLights.push(pointLight);
      console.log(color);
      console.log(sphere);
      console.log(pointLights);
    }

    let light1 = new THREE.DirectionalLight(0xf3aaaa, 0.8, 0);
    light1.position.set(100, 150, -100);
    lights.push(light1);

    var light2 = new THREE.DirectionalLight(0xf4baba, 0.6, 0);
    light2.position.set(-100, -200, -100);
    lights.push(light2);

    var light3 = new THREE.DirectionalLight(0xf4baba, 0.1, 0);
    light3.position.set(-150, 50, 150);
    lights.push(light3);

    for (let i = 0; i < 400; i++) {
      makePointLight(0xf4baba, 0.5);
    }

    for (let i = 0; i < pointLights.length; i++) {
      scene.add(pointLights[i]);
    }

    for (let i = 0; i < lights.length; i++) {
      scene.add(lights[i]);
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.002;
      cube.rotation.z += 0.002;
      render();
    }

    //fix camera

    camera.position.set(1, 1, 1);

    function render() {
      let time = Date.now() * 0.000002;
      let time2 = Date.now() * 0.0001;
      function spotlightPosition(positionX, positionY, positionZ) {
        for (let i = 0; i < pointLights.length; i++) {
          pointLights[i].position.x = Math.sin(
            time - positionX * Math.floor(Math.random() - i)
          );
          pointLights[i].position.y = Math.cos(
            time + positionY * Math.floor(Math.random() - i)
          );
          pointLights[i].position.z = Math.sin(
            (time + positionZ) * Math.floor(Math.random() + i)
          );
        }
      }
      // Camera in motion

      // camera.position.x = Math.cos(time2 * 7) + 2;
      // camera.position.y = Math.cos(time2 - 7) + 2;
      // camera.position.z = Math.sin(time2 / 7) + 2;

      spotlightPosition(7, 7, 3);

      renderer.render(scene, camera);
    }
    console.log(scene);
    animate();
  }

  static createMaterialPalette(count) {
    const materials = [];
    for (let i = 0; i < count; i++) {
      const material = new THREE.MeshPhongMaterial();
      material.color = new THREE.Color(0xffffff);
      materials.push(material);
      material.transparent = true;
      material.opacity = 0.8;
    }
    return materials;
  }
}
