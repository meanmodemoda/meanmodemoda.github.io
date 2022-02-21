
let t;
let pixelMap = [];
let noiseScale = 0.001;
let noiseMax = 1;
const pane = new Tweakpane();
const params = {
  redBelle: 0,
  redSole: 1,
  redBull: 0,
  redSin: 155,
  greenIn: 0.2,
  greenEr: 1,
  greenEst: 50,
  greenOut: 150,
  blueMoon: 0,
  blueNoon: 1,
  blueSnooze: 0,
  bluePill: 255,
}

pane.addInput(params, "redBelle", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "redSole", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "redBull", { min: 0, max: 255, step: 1 });
pane.addInput(params, "redSin", { min: 0, max: 255, step: 1 });
pane.addInput(params, "greenIn", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "greenEr", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "greenEst", { min: 0, max: 255, step: 1 });
pane.addInput(params, "greenOut", { min: 0, max: 255, step: 1 });
pane.addInput(params, "blueMoon", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "blueNoon", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "blueSnooze", { min: 0, max: 255, step: 1 });
pane.addInput(params, "bluePill", { min: 0, max: 255, step: 1 });

function setup() {

  createCanvas(windowWidth, windowHeight)
  noStroke();
  background(255);
  noiseDetail(5, 0.9);
  // noLoop();
}

function draw() {
  makeMap();
  drawMap();
  textFont('Gluten');
  textSize(28);
  textAlign(CENTER);
  fill(255);
  noStroke();
  text('Under Construction', width / 2, height * 7 / 8);
  pop();
}

function makeMap() {
  for (let i = 0; i < width; i++) {
    pixelMap[i] = [];
    for (let j = 0; j < height; j++) {
      pixelMap[i][j] = pickColor(i, j);
    }
  }


}

function pickColor(i, j) {

  let height = noise((i) * noiseScale, (j) * noiseScale)
  let colorT = "#facade";//set up a color and initialize to a pink color if things go wrong
  let colorR = floor(map(noise(height, 1), params.redBelle, params.redSole, params.redBull, params.redSin))
  let colorG = floor(map(noise(height, 3), params.greenIn, params.greenEr, params.greenEst, params.greenOut))
  let colorB = floor(map(noise(height, 4), params.blueMoon, params.blueNoon, params.blueSnooze, params.bluePill))

  colorT = [colorR, colorG, colorB]
  return color(colorT);

}


function drawMap() {

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      set(i, j, pixelMap[i][j])
    }
  }
  updatePixels();

}
