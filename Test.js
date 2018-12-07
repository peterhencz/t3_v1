class Test {
  constructor({ width, height, dataDepth }) {
    this.width = width;
    this.height = height;
    this.dataDepth = dataDepth;
  }

  init() {
    const rendererOptions = {
      antialias: true,
    };
    const renderer = new THREE.WebGLRenderer(rendererOptions);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf6caca);

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
    scene.add(cube);

    var sphere = new THREE.SphereBufferGeometry(0.02, 100, 100);

    const lights = [];

    let pointLight = new THREE.PointLight(0xf4baba, 0.31, 1);
    pointLight.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xfafafa }))
    );

    let pointLight3 = new THREE.PointLight(0xf4baba, 0.61, 1);
    pointLight3.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf2f2f2 }))
    );

    let pointLight4 = new THREE.PointLight(0xf4baba, 0.31, 1);
    pointLight4.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf1f1f1 }))
    );

    let pointLight5 = new THREE.PointLight(0xf4baba, 1, 1);
    pointLight5.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf6f6f6 }))
    );

    let pointLight6 = new THREE.PointLight(0xf4baba, 0.51, 1);
    pointLight6.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xfbfbfb }))
    );

    let pointLight7 = new THREE.PointLight(0xf4baba, 0.51, 1);
    pointLight7.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xfbfbfb }))
    );

    let pointLight8 = new THREE.PointLight(0xf4baba, 0.51, 1);
    pointLight8.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xfbfbfb }))
    );
    let pointLight9 = new THREE.PointLight(0xf4baba, 0.51, 1);
    pointLight9.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xfbfbfb }))
    );
    let pointLight2 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight2.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight10 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight10.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight11 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight11.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight14 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight14.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight12 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight12.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight15 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight15.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight16 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight16.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight17 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight17.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight18 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight18.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );
    let pointLight19 = new THREE.PointLight(0xf4baba, 0.1, 1);
    pointLight19.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf3f3f3 }))
    );

    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(pointLight12);
    scene.add(pointLight3);
    scene.add(pointLight4);
    scene.add(pointLight5);
    scene.add(pointLight6);
    scene.add(pointLight7);
    scene.add(pointLight8);
    scene.add(pointLight9);
    scene.add(pointLight11);
    scene.add(pointLight10);
    scene.add(pointLight14);
    scene.add(pointLight15);
    scene.add(pointLight16);
    scene.add(pointLight17);
    scene.add(pointLight18);
    scene.add(pointLight19);
    let light1 = new THREE.DirectionalLight(0xf3aaaa, 0.8, 0);
    light1.position.set(100, 150, -100);
    scene.add(light1);

    var light2 = new THREE.DirectionalLight(0xf4baba, 0.6, 0);
    light2.position.set(-100, -200, -100);
    lights.push(light2);

    var light3 = new THREE.PointLight(0xf4baba, 0.1, 0);
    light3.position.set(-150, 50, 150);
    lights.push(light3);

    for (let i = 0; i < lights.length; i++) {
      scene.add(lights[i]);
    }
    function animate() {
      requestAnimationFrame(animate);
      render();

      controls.update();
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.002;
      cube.rotation.z += 0.002;
    }

    function render() {
      let time = Date.now() * 0.0001;
      let time2 = Date.now() * 0.0002;
      let time3 = Date.now() * 0.0001;
      camera.position.x = Math.sin(time3 * 0.7) * 1;
      camera.position.y = Math.sin(time3 * 0.7) * 1;
      camera.position.z = Math.sin(time3 * 0.7) * 1;

      pointLight.position.x = Math.sin(time * 0.7) * 1;
      pointLight.position.y = Math.cos(time * 5) * 1;
      pointLight.position.z = Math.cos(time * 0.2) * 0.8;

      pointLight3.position.x = Math.sin(time * 1) * 0.4;
      pointLight3.position.y = Math.cos(time * 2) * 0.6;
      pointLight3.position.z = Math.cos(time * 2) * 0.8;

      pointLight2.position.x = Math.sin(time * 0.1) * 0.5;
      pointLight2.position.y = Math.cos(time * 1) * 0.8;
      pointLight2.position.z = Math.cos(time * 3) * 0.9;

      pointLight4.position.x = Math.sin(time * 1) * 0.71;
      pointLight4.position.y = Math.cos(time * 3) * 0.52;
      pointLight4.position.z = Math.cos(time * 4) * 0.6;

      pointLight5.position.x = Math.sin(time * 4) * 0.8;
      pointLight5.position.y = Math.cos(time * 3) * 0.21;
      pointLight5.position.z = Math.cos(time * 0.9) * 0.71;

      pointLight6.position.x = Math.sin(time * 1) * 0.2;
      pointLight6.position.y = Math.cos(time * 2) * 0.3;
      pointLight6.position.z = Math.cos(time * 1) * 0.4;

      pointLight7.position.x = Math.sin(time * 2) * 0.7;
      pointLight7.position.y = Math.cos(time * 3) * 0.6;
      pointLight7.position.z = Math.cos(time * 4) * 0.1;

      pointLight8.position.x = Math.sin(time * 1) * 0.3;
      pointLight8.position.y = Math.cos(time * 4) * 0.6;
      pointLight8.position.z = Math.cos(time * 5) * 0.4;

      pointLight9.position.x = Math.sin(time * 1) * 0.5;
      pointLight9.position.y = Math.cos(time * 2) * 0.2;
      pointLight9.position.z = Math.cos(time * 4) * 0.1;

      pointLight10.position.x = Math.sin(time2 * 0.7) * 0.1;
      pointLight10.position.y = Math.cos(time2 * 5) * 0.6;
      pointLight10.position.z = Math.cos(time2 * 0.2) * 0.8;

      pointLight11.position.x = Math.sin(time2 * 1) * 0.4;
      pointLight11.position.y = Math.cos(time2 * 2) * 0.6;
      pointLight11.position.z = Math.cos(time2 * 2) * 0.8;

      pointLight12.position.x = Math.sin(time2 * 0.1) * 0.5;
      pointLight12.position.y = Math.cos(time2 * 1) * 0.8;
      pointLight12.position.z = Math.cos(time2 * 3) * 0.9;

      pointLight14.position.x = Math.sin(time2 * 1) * 0.71;
      pointLight14.position.y = Math.cos(time2 * 3) * 0.52;
      pointLight14.position.z = Math.cos(time2 * 4) * 0.6;

      pointLight15.position.x = Math.sin(time2 * 4) * 0.8;
      pointLight15.position.y = Math.cos(time2 * 3) * 0.21;
      pointLight15.position.z = Math.cos(time2 * 0.9) * 0.71;

      pointLight16.position.x = Math.sin(time2 * 1) * 0.2;
      pointLight16.position.y = Math.cos(time2 * 2) * 0.3;
      pointLight16.position.z = Math.cos(time2 * 1) * 0.4;

      pointLight17.position.x = Math.sin(time2 * 2) * 0.7;
      pointLight17.position.y = Math.cos(time2 * 3) * 0.6;
      pointLight17.position.z = Math.cos(time2 * 4) * 0.1;

      pointLight18.position.x = Math.sin(time2 * 1) * 0.3;
      pointLight18.position.y = Math.cos(time2 * 4) * 0.6;
      pointLight18.position.z = Math.cos(time2 * 5) * 0.4;

      pointLight19.position.x = Math.sin(time2 * 1) * 0.5;
      pointLight19.position.y = Math.cos(time2 * 2) * 0.2;
      pointLight19.position.z = Math.cos(time2 * 4) * 0.1;
      renderer.render(scene, camera);
    }
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
