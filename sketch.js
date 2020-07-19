var canvas, backgroundImg;
var gameState=0;
var playerCount;
var distance=0;
var database;

var form,player,game;
var allPlayers;
var athletes=[];
var athlete1,athlete2,athlete3,athlete4;
var athlete1_img,athlete2_img,athlete3_img,athlete4_img;
var track;

function preload(){
    track= loadImage("track.png");
    athlete1_img= loadImage("download.png");
    athlete2_img= loadImage("download.png");
    athlete3_img= loadImage("download.png");
    athlete4_img= loadImage("download.png");
}
function setup(){
    canvas= createCanvas(displayWidth - 20, displayHeight-30);
    database= firebase.database();
    game= new Hurdle();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
     game.update(1);
    }

    if(gameState===1){
        clear();
        game.play();
    }
}