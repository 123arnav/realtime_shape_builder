function preload(){

}

function setup(){
canvas=createCanvas(420,420);
canvas.position(800,170);
video=createCapture(VIDEO);
video.size(420,420);
console.log(ml5.version);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotposes)

}
function modelLoaded(){
    console.log("loaded")
    
}

function gotposes(result){
    if(result.length>0){
        console.log(result);
        shapeX=result[0].pose.nose.x;
        shapeY=result[0].pose.nose.y;
        console.log(shapeX);
        console.log(shapeY); 
    }
}
function draw(){
fill(157, 249, 252)
stroke(0,0,0)
square(100,100,50)
}

