leftWristX = "";
leftWristY = "";
rightWristX= "";
rightWristY = "";   

function setup(){
canvas = createCanvas(400,400)
canvas.center()
video = createCapture(VIDEO )
video.hide()

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function preload(){

}

function draw(){
    image(video,0,0,400,400)
    image("india.png",0,0, leftWristX,leftWristY)
}

function modelLoaded(){
    console.log("dem")
}
function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  leftWristX = results[0].pose.leftWrist.x;
	  leftWristY = results[0].pose.leftWrist.y;
	  console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

	  rightWristX = results[0].pose.rightWrist.x;
	  rightWristY = results[0].pose.rightWrist.y;
	  console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	}
  } 
  