function preload(){

}
function setup() {
    canvas = createCanvas(640,480)
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
}
function draw(){
    image(video, 0, 0, 640,480);
    tint(tint_color);
    fill("red");
    stroke("red");
    circle(50, 420, 70);
    circle(590,420 , 70);
    circle(50, 50, 70);
    circle(590, 50, 70);
fill("green");
stroke("green");


    rect(50, 420, 600, 30);
    rect(590,420,600 , 30);
    rect(50, 50,40 , 450);
    rect(590, 10, 40 , 450);



}
function take_snapshot(){
    save('student_name.png')
}
function filter_tint()
{
    tint_color = document.getElementById('color_name').value;
}