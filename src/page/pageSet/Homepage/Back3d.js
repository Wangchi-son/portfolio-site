import React, { Component } from "react";
import * as THREE from "three";
import gsap from "gsap/all";
import { random } from "gsap/gsap-core";

export class Back3d extends Component {
  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // raycaster
    const raycaster = new THREE.Raycaster();

    // 무대
    const scene = new THREE.Scene();

    // 카메라
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // 영사기
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(width, height);

    // 픽셀단위 값 조정
    renderer.setPixelRatio(devicePixelRatio);

    // HTML canvas 생성
    this.element.appendChild(renderer.domElement);

    // randomValue
    const randomValue = [];

    // 전체 배경 설정
    function generateBackground() {
      Background.geometry.dispose();
      Background.geometry = new THREE.PlaneGeometry(
        BackgroundSet.plane.width,
        BackgroundSet.plane.height,
        BackgroundSet.plane.widthSegments,
        BackgroundSet.plane.heightSegments
      );

      // x,y,z 값 조정
      const { array } = Background.geometry.attributes.position;
      for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
          const x = array[i];
          const y = array[i + 1];
          const z = array[i + 2];

          array[i] = x + (Math.random() - 0.5) * 3;
          array[i + 1] = y + (Math.random() - 0.5) * 3;
          array[i + 2] = z + (Math.random() - 0.5) * 3;
        }
        randomValue.push(Math.random() * Math.PI * 3);
      }

      // randomValue 정의
      Background.geometry.attributes.position.randomValue = randomValue;

      // OriginalPosition 정의
      Background.geometry.attributes.position.originalPosition =
        Background.geometry.attributes.position.array;

      // 컬러
      const colors = [];
      for (let i = 0; i < Background.geometry.attributes.position.count; i++) {
        //r,g,b
        colors.push(0, 0, 1);
      }
      Background.geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(colors), 3)
      );
    }

    // 배경 3D 물체
    const BackgroundSet = {
      plane: {
        width: 800,
        height: 800,
        widthSegments: 100,
        heightSegments: 100,
      },
    };
    const BackgroundGeometry = new THREE.PlaneGeometry(
      BackgroundSet.plane.width,
      BackgroundSet.plane.height,
      BackgroundSet.plane.widthSegments,
      BackgroundSet.plane.heightSegments
    );
    const BackgroundMeterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      flatShading: THREE.FlatShading,
      vertexColors: true,
    });
    const Background = new THREE.Mesh(BackgroundGeometry, BackgroundMeterial);
    scene.add(Background);
    generateBackground();

    // 빛
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0.25, -0.25, 1);
    scene.add(light);

    // 카메라 셋
    camera.position.z = 50;
    camera.rotateX(-50);
    camera.rotateY(-50);

    // 마우스 셋
    const mouse = {
      x: undefined,
      y: undefined,
    };
    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 + 1;
    });

    // frame
    const frame = 0;

    // 외부 전달
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.Background = Background;

    this.raycaster = raycaster;
    this.mouse = mouse;

    this.frame = frame;
    this.randomValue = randomValue;
    this.animate();
  }

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);

    // 배경 움직임
    this.frame += 0.01;
    const {
      array,
      originalPosition,
      randomValue,
    } = this.Background.geometry.attributes.position;

    for (let i = 0; i < array.length; i += 3) {
      // x
      array[i] =
        originalPosition[i] + Math.cos(this.frame + randomValue[i]) * 0.01;
      this.Background.geometry.attributes.position.needsUpdate = true;

      // y
      array[i + 1] =
        originalPosition[i + 1] +
        Math.sin(this.frame + randomValue[i + 1]) * 0.01;
      this.Background.geometry.attributes.position.needsUpdate = true;
    }
  };

  render() {
    return <div ref={(el) => (this.element = el)}></div>;
  }
}

export default Back3d;
