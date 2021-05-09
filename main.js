noseX="";
noseY="";
LeftWrist="";
RightWrist="";
difference="";
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
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        RightWrist=result[0].pose.rightWrist.x;
        LeftWrist=result[0].pose.leftWrist.y;
        difference=floor(LeftWrist-RightWrist);
        console.log(noseX);
        console.log(noseY); 
        console.log(RightWrist);
        console.log(LeftWrist); 
        console.log(difference);
        document.getElementById("diff").innerHTML="square size= "+difference+"px";
    }
}
function draw(){
background("black");
fill(157, 249, 252);
stroke(0,0,0);
square(noseX ,noseY,difference);

}

