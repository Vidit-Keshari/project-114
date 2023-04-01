function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(385, 150);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
}

function take_snapshot() {
    save('project_114.png');
}