import './style.css'
import { Scene } from './Scene'
import { Box } from './Box'

/** @type HTMLCanvasElement */
let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d');
let scene = new Scene(ctx)
scene.add(new Box(canvas.width / 2, canvas.height / 2, 100, 100, 50));
let previous, current = 0
let start = new Date().getTime();

setInterval(() => {
    previous = current
    current = new Date().getTime() - start;
    let delta = current - previous
    scene.beforeUpdate();
    scene.update(delta);
    scene.draw()

}, 0)