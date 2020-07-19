class Hurdle{
    constructor(){

    }

    getState(){
      var gameStateRef= database.ref("gameState");
      gameStateRef.on("value",function(data){
          gameState= data.val();
      })
    }

    update(state){
        gameState= database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if (gameState===0) {
            player= new Player();
            var playerCountRef= await database.ref("playerCount").once("value");  
        if(playerCountRef.exists()){
            playerCount= playerCountRef.val();
            player.getCount();   
        }
        form= new Form();
        form.display();
      }

      athlete1= createSprite(100,200);
      athlete1.addImage("download.png",athlete1_img);
      athlete2= createSprite(300,200);
      athlete2.addImage("download.png",athlete2_img);
      athlete3= createSprite(500,200);
      athlete3.addImage("download.png",athlete3_img);
      athlete4= createSprite(700,200);
      athlete4.addImage("download.png",athlete4_img);

     


     }

    

     play(){
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            background("#C68767");
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

            var index = 0;
      
            var x = 175;
            var y;
      
            for(var plr in allPlayers){
              
              index = index + 1 ;
      
              x = x + 200;

              
              //use data form the database to display the cars in y direction
              y = displayHeight - allPlayers[plr].distance;
              athletes[index-1].x = x;
              athletes[index-1].y = y;

              for(var i=0; i<3810;i=i+30){
                hurdles= createSprite(x,y);
                hurdles.addImage("hurdles.jpg");

                globalThis.startButton.mousePressed(()=>{
                  athletes[index-1].y=y-10;
                })
            
                
              }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
      
          
      
          
        }
        end(){
          console.log("GAME ENDED");
          //game.update(2);
          console.log(player.rank);
     }
    
}