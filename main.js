var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
}

function speak(){
var synth=window.speechSynthesis;
speak_data="Taking your in selfie in 5 seconds";
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach('#camera');
setTimeout(function(){
    photo_click();
    save()
},5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

function photo_click(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("captured_image").src;
    link.href=image;
    link.click();
}