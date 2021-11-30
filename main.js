function preLoad() {
    //Nothing to be written here...
}

function setup() {
    canvas = createCanvas(600, 480);
    canvas.position(450, 350);
    video = createCapture(VIDEO);
    video.hide();

    colorTint = "";
}

function draw() {
    image(video, 0, 0, 0, 600, 0);
    tint(colorTint);

    fill(255, 0, 0);
    circle(10, 10, 50);

    fill(0, 255, 0);
    circle(60, 10, 50);

    fill(0, 0, 255);
    circle(110, 10, 50);

    fill(255, 0, 0);
    circle(160, 10, 50);

    fill(0, 255, 0);
    circle(210, 10, 50);

    fill(0, 0, 255);
    circle(260, 10, 50);

    fill(255, 0, 0);
    circle(310, 10, 50);

    fill(0, 255, 0);
    circle(360, 10, 50);

    fill(0, 0, 255);
    circle(410, 10, 50);

    fill(255, 0, 0);
    circle(460, 10, 50);

    fill(0, 0, 0);
    circle(510, 10, 50);

    fill(0, 255, 0);
    circle(560, 10, 50);

    fill(0, 0, 255);
    circle(610, 10, 50);

    //Rectangles

    fill(0, 0, 0);
    rect(0,35, 30, 650);

    fill(0, 0, 0);
    rect(570, 35, 30, 650);

    //An Oval

    fill(255, 100, 255);
    ellipse(300, 500, 700, 100);
} 

function take_snapshot() {
    save('mypicture.png');
}

function Filter_tint() {
    colorTint = document.getElementById("FilterColor").value;
}