import React, { Component } from 'react';
import * as THREE from 'three';
import gsap from 'gsap/all';
import { random } from 'gsap/gsap-core';

export class Back3d extends Component {
  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // resize 이벤트
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

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
        colors.push(0, 0, 0);
      }
      Background.geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(new Float32Array(colors), 3)
      );
    }

    // 배경 3D 물체
    const BackgroundSet = {
      plane: {
        width: 800,
        height: 800,
        widthSegments: 100,
        heightSegments: 100
      }
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
      vertexColors: true
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
      y: undefined
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
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
    this.frame += 0.02;
    const {
      array,
      originalPosition,
      randomValue
    } = this.Background.geometry.attributes.position;

    for (let i = 0; i < array.length; i += 3) {
      // x
      array[i] =
        originalPosition[i] + Math.cos(this.frame + randomValue[i]) * 0.02;
      this.Background.geometry.attributes.position.needsUpdate = true;

      // y
      array[i + 1] =
        originalPosition[i + 1] +
        Math.sin(this.frame + randomValue[i + 1]) * 0.02;
      this.Background.geometry.attributes.position.needsUpdate = true;
    }

    // 마우스 오버 효과
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.Background);
    if (intersects.length > 0) {
      const { color } = intersects[0].object.geometry.attributes;

      // vertice 1
      color.setX(intersects[0].face.a, 0.6);
      color.setY(intersects[0].face.a, 0.6);
      color.setZ(intersects[0].face.a, 0.6);

      // vertice 2
      color.setX(intersects[0].face.b, 0.6);
      color.setY(intersects[0].face.b, 0.6);
      color.setZ(intersects[0].face.b, 0.6);

      // vertice 3
      color.setX(intersects[0].face.c, 0.6);
      color.setY(intersects[0].face.c, 0.6);
      color.setZ(intersects[0].face.c, 0.6);

      color.needsUpdate = true;

      const initialColor = {
        r: 0,
        g: 0,
        b: 0
      };

      const hoverColor = {
        r: 0.6,
        g: 0.6,
        b: 0.6
      };

      gsap.to(hoverColor, {
        r: initialColor.r,
        g: initialColor.g,
        b: initialColor.b,
        duration: 1,
        onUpdate: () => {
          // vertice 1
          color.setX(intersects[0].face.a, hoverColor.r);
          color.setY(intersects[0].face.a, hoverColor.g);
          color.setZ(intersects[0].face.a, hoverColor.b);

          // vertice 2
          color.setX(intersects[0].face.b, hoverColor.r);
          color.setY(intersects[0].face.b, hoverColor.g);
          color.setZ(intersects[0].face.b, hoverColor.b);

          // vertice 3
          color.setX(intersects[0].face.c, hoverColor.r);
          color.setY(intersects[0].face.c, hoverColor.g);
          color.setZ(intersects[0].face.c, hoverColor.b);
        }
      });
    }
  };

  render() {
    return <div ref={(el) => (this.element = el)}></div>;
  }
}

export default Back3d;
