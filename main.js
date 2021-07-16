var predict_one = "";
var predict_two = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

live_camera = document.getElementById("camera");

Webcam.attach(live_camera);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id= 'user_img' src= >" + data_uri + ">";
    })
}

console.log(ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/81e1c6qNV/model.json", ModelLoaded);

function ModelLoaded() {
    console.log("Model Loaded!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is " + predict_one;
    speak_data2 = "And the second prediction is " + predict_two;

    var utter_this = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utter_this);
}