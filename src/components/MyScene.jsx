import React, { Component } from "react";
import * as THREE from "three";

export default class Scene extends Component {
  componentDidMount() {
    //scene
    this.scene = new THREE.Scene();

    //renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.mount.appendChild(this.renderer.domElement);

    //camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    //Create Box
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({ color: "#ffffff" });

    this.cube = new THREE.Mesh(geometry, material);

    //add scene
    this.scene.add(this.cube);
    this.animation();
    this.renderer.render(this.scene, this.camera);
  }

  animation = () => {
    requestAnimationFrame(this.animation);
    this.cube.rotation.z += 0.01;
    this.cube.rotation.x += 0.01;
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
