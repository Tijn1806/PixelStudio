export default class PenTool {
  constructor(color = "#000000") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  use(pixel) {
    if (pixel) {
      pixel.setColor(this.color);
    }
  }
}