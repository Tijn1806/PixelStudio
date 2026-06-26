import Grid from "./Grid.js";

export default class App {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.grid = new Grid(this.canvas.width, this.canvas.height, 25);
  }

  start() {
    this.grid.render(this.ctx);
  }
}