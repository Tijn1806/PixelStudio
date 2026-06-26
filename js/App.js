import Grid from "./Grid.js";
import PenTool from "./PenTool.js";

export default class App {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.grid = new Grid(this.canvas.width, this.canvas.height, 25);
    this.penTool = new PenTool("#000000");

    this.colorPicker = document.getElementById("colorPicker");
  }

  start() {
    this.grid.render(this.ctx);
    this.addEventListeners();
  }

  addEventListeners() {
    this.canvas.addEventListener("click", event => {
      this.handleCanvasClick(event);
    });

    this.colorPicker.addEventListener("input", event => {
      this.penTool.setColor(event.target.value);
    });
  }

  handleCanvasClick(event) {
    const rect = this.canvas.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const pixel = this.grid.getPixelAt(mouseX, mouseY);

    this.penTool.use(pixel);
    this.grid.render(this.ctx);
  }
}