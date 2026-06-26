export default class EraserTool {
  constructor() {
    this.color = "#ffffff";
  }

  use(pixel) {
    if (pixel) {
      pixel.setColor(this.color);
    }
  }
}