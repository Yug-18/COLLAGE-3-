var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start1() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}


recognition.onresult = function (event) {
    console.log(event)
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").value = Content;
    if(Content == "Take my selfie."){
       console.log("Taking Selfie")
        setTimeout()
    }
    
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera")

function setTimeout() {
    img_id = "selfie1"
    Webcam.attach(camera)
    speak_data = "Taking Your Selfie in 5 seconds!"
    var synth = window.speechSynthesis
    var utter_this = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter_this)
    setTimeout(function(){
        takeSnapshot()
    },5000)
}

function setTimeout() {
    img_id = "selfie2"
    Webcam.attach(camera)
    speak_data = "Taking Your Selfie in 10 seconds!"
    var synth = window.speechSynthesis
    var utter_this = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter_this)
    setTimeout(function(){
        takeSnapshot()
    },10000)
}

function setTimeout() {
    img_id = "selfie3"
    Webcam.attach(camera)
    speak_data = "Taking Your Selfie in 15 seconds!"
    var synth = window.speechSynthesis
    var utter_this = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter_this)
    setTimeout(function(){
        takeSnapshot()
    },15000)
}

function takeSnapshot()
{
    console.log(img_id)
    Webcam.snap(function(data_uri){
        if(img_id == "selfie1")
        {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>'
        }

        if(img_id == "selfie2")
        {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>'
        }

        if(img_id == "selfie3")
        {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>'
        }

    })
}
