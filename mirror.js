let video;

let vScale = 16;
let slider;

let cols = 70;
let rows = 52;

let boxes = [];

function setup() {
  noCanvas();
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();
  slider = createSlider(0, 255, 127);
  slider.style("width", "1338px");
  slider.parent("slider");
  button = createButton("Home");
  button.parent("button");
  button.mousePressed(returnHome);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let box = createCheckbox();
      box.style("display", "inline");
      box.parent("mirror");
      boxes.push(box);
    }
    let linebreak = createSpan("<br/>");
    linebreak.parent("mirror");
  }

}

function returnHome() {
  window.open("index.html", "_self");
}

function draw() {
  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (video.width - x + 1 + (y * video.width))*4;
      let r = video.pixels[index+0];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];

      let bright = (r+g+b)/3;

      let threshold = slider.value();

      let checkIndex = x + y * cols;

      if (bright > threshold) {
        boxes[checkIndex].checked(false);
      } else {
        boxes[checkIndex].checked(true);
      }
    }
  }

}
