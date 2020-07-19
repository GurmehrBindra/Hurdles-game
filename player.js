class Player{
    constructor(){
        this.index= null;
        this.distance= 0;
        this.name= null;
        this.rank= null;
    }

    getCount(){
        var playerCountref= database.ref("playerCount");
        playerCountref.on("value", function(data){
            playerCount= data.val();
        })
    }

    update(){
        var playerIndex= "players/player"+ this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    static getPlayerInfo(){
        var playerInfoRef= database.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers= data.val();
        })
    }

    getAthletesAtEnd(){
        database.ref("AthletesAtEnd").on("value",(data)=>{
          this.rank=data.val()
        });
      }
    
      static updateAthletesAtEnd(rank){
        database.ref("/").update({
          AthletesAtEnd:rank
        })
      }
    }
