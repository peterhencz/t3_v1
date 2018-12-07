class Test {
  constructor({ baseMapUrl, dataMapUrl, width, height, dataDepth }) {
    this.baseMapUrl = baseMapUrl;
    this.dataMapUrl = dataMapUrl;
    this.width = width;
    this.height = height;
    this.dataDepth = dataDepth;
  }

  init() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const controls = new THREE.OrbitControls(camera);
    camera.position.set(0, 1, 1);
    controls.update();

    const geometry = new THREE.BoxGeometry(1, 0.1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xf4baba });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    setupLights() {
      const lights = [];
  
      const light1 = new THREE.PointLight(0xffffff, 0.5, 0);
      const light2 = new THREE.PointLight(0xffffff, 0.5, 0);
      const light3 = new THREE.PointLight(0xffffff, 0.5, 0);
  
      light1.position.set(0, 200, 0);
      light2.position.set(100, 200, 100);
      light3.position.set(-100, -200, -100);
  
      lights.push(light1);
      lights.push(light2);
      lights.push(light3);
  
      for (let i = 0; i < lights.length; i++) {
        this.scene.add(lights[i]);
      }
    }

    animate();
  }
}
