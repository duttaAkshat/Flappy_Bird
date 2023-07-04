var hole = document.getElementById("hole");
var game = document.getElementById("game");
var result = document.getElementById("result");
var text = document.getElementById("text");
var bird = document.getElementById("bird");
var block = document.getElementById("block");
var hole = document.getElementById("hole");

var score = 0;
var jumping = 0;

hole.addEventListener("animationiteration", RanHole)

function RanHole(){
    var random = -((Math.random()*320)+180)
    hole.style.top = random+"px"
    score ++;
}

var fall = setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if(jumping==0){
        bird.style.top = (birdTop+2)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTop = (600+holeTop)
    if((birdTop >600) || (blockLeft<40)&&(blockLeft> -40)&&((birdTop<hTop)||(birdTop>hTop+100))){
        result.style.display = "block";
        text.innerText = `Your final score is : ${score}`;
        game.style.display = "none";
        score=0;
    }
}, 10)

window.addEventListener("keydown", hop)
function hop(){
    jumping=1;
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if(birdTop>6){
        bird.style.top = (birdTop-60) + "px";
    }
    setTimeout(function(){
        jumping = 0;
    },100)
}