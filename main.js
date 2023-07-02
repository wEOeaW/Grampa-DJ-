function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()  {
    console.log('PoseNet Is Initialized')
}

function draw() {
    Image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results);
{
if(results.length > 0)
    {
    console.log(results);
    }
}