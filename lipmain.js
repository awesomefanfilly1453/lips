mouth_X=0;
mouth_Y=0;

function preload(){
    lip= loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    
    posenet=ml5.poseNet(video,modelLoaded);
       posenet.on("pose",gotposes);
}
function modelLoaded(){
    console.log("PoseNet is initialized");

}
function draw(){
  image(video,0,0,350,350);
image(lip,mouth_X,mouth_Y,40,40);  
}
function gotposes(result){
    console.log(result);
    if (result.length>0){
        mouth_X=result[0].pose.nose.x;
        mouth_Y=result[0].pose.nose.y;
    }
}
function takepic(){
    save("HEY LIPSTCK KIDDO.png");
}
