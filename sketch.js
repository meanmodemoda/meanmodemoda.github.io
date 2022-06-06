// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let inc = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseDetail(1);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(0.01 * frameCount);

  img = createImage(250, 250);
  img.loadPixels();

  var m = map(noise(frameCount * 0.004), 0, 1, 1.5, 2);
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let r = map(x, 0, img.width, 50, 120);
      let g = map(y, 0, img.height, 20, 140);
      let c = color(r * m, g * m, 100 * m);
      img.set(x, y, c);
    }
  }
  img.updatePixels();
  noSmooth();
  image(img, -width, -width, width * 2, width * 2);
}
