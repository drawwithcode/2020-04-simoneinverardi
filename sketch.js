let video;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(320, 240);
  // background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
}

function draw() {
  image(video, 0, 0);
}
