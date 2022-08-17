function preload(){
}
 function setup(){
    canvas = createCanvas(400,400);
    video = createCapture(VIDEO);
    video.hide();
 }
 function draw(){   
   rect(50, 50, 300, 300);
   image(video, 75, 100, 250, 200);
   circle(72, 72, 100);
   circle(328, 72, 100);
   circle(328, 328, 100);
   circle(72, 328, 100);   
 }
  function take_snapshot(){
    save("picture.png");
  }
function filter_tint(){
    tint_color = document.getElementById("color-name").value;
}