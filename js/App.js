import Grid from "./Grid.js";
import PenTool from "./PenTool.js";
import EraserTool from "./EraserTool.js";

export default class App {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.grid = new Grid(this.canvas.width, this.canvas.height, 25);

    this.penTool = new PenTool("#000000");
    this.eraserTool = new EraserTool();
    this.activeTool = this.penTool;

    this.colorPicker = document.getElementById("colorPicker");
    this.penButton = document.getElementById("penButton");
    this.eraserButton = document.getElementById("eraserButton");
    this.clearButton = document.getElementById("clearButton");
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
      this.activeTool = this.penTool;
    });

    this.penButton.addEventListener("click", () => {
      this.activeTool = this.penTool;
    });

    this.eraserButton.addEventListener("click", () => {
      this.activeTool = this.eraserTool;
    });

    this.clearButton.addEventListener("click", () => {
      this.grid.clear();
      this.grid.render(this.ctx);
    });
  }

  handleCanvasClick(event) {
    const rect = this.canvas.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const pixel = this.grid.getPixelAt(mouseX, mouseY);

    this.activeTool.use(pixel);
    this.grid.render(this.ctx);
  }
}