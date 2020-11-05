let box;

function preload(){
}

function setup() {
box = createCheckbox(false);
box.changed(myCheckedEvent);
box.parent("box");
}

function myCheckedEvent() {
  if (this.checked()) {
    window.open("index1.html", "_self");
  }
}

function draw() {
  }
