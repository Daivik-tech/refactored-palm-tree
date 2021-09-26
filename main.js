Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90 
});
camera=document.getElementById("camera");
Webcam.attatch('#camera');
function take_snapshot()
{
Webcam.snap(function(data_uri)
document.getElementById("result").innerHTML='<img id="capture_image"src="'+data_uri'"/>'
)  
}
console.log('ml5version',ml5.version);
classifier=ml5.image_Classifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
function modelLoaded()
{
console.log('Model Loaded!')    
}
function check()
{
img=document.getElementById('captured_image');
classifier.classify(img, gotResult);
}
function speak()
{
var synth=window.SpeechSynthesis;
speak_data_1="The first prediction is"+prediction_1;
speak_data_2="The second prediction is"+prediction_2;
var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
utterThis.rate=0.5;
synth.speak(utterThis);    
}
function gotResult(error, results )
{
if(error)
{
console.error(error);    
} else{
console.log(results);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
prediction_1=result[0].label;
prediction_2=result[1].label; 
speak();
if(results[0].label=="happy")
{
document.getElementById("update_emoji").innerHTML="&#128522"    
} 
if(results[0].label=="sad")
{
document.getElementById("update_emoji").innerHTML="&#128532"    
}
if(results[0].label=="sad")
{
document.getElementById("update_emoji").innerHTML="&#128532"    
}      
}   
}