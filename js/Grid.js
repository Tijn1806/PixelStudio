import Pixel from "./Pixel.js";

export default class Grid {
  constructor(width, height, pixelSize) {
    this.width = width;
    this.height = height;
    this.pixelSize = pixelSize;
    this.pixels = [];

    this.createPixels();
  }

  createPixels() {
    for (let y = 0; y < this.height; y += this.pixelSize) {
      for (let x = 0; x < this.width; x += this.pixelSize) {
        const pixel = new Pixel(x, y, this.pixelSize);
        this.pixels.push(pixel);
      }
    }
  }

  render(ctx) {
    this.pixels.forEach(pixel => {
      pixel.draw(ctx);
    });
  }
}