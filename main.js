var num=0
var apple=""
var x=0;
var y=0;
function preload(){
    apple=loadImage("apple.png")
}
function setup(){
    canvas=createCanvas(500,400);
}
speechRecognition=window.webkitSpeechRecognition;
recognition=new speechRecognition();

function start(){
 document.getElementById("status").innerHTML="Recording!!!";
 recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    rec=event.results[0][0].transcript;
    num=Number(rec)
    document.getElementById("status").innerHTML="You have spoken "+rec; 
        x=Math.floor(Math.random()*500);
        y=Math.floor(Math.random()*400);
    
}        
function draw(){  
    for(var i=1;i<=num;i=i+1){

      image(apple,x,y,20,20);
    }
    }
