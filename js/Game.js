class Game
{
    constructor(){

    }

    getState()
    {
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data)
        {
             gameState=data.val();
        })
    }


    update(state)
    {
        database.ref('/').update({
            gameState:state
        })
    }

    start()
    {
        if(gameState===0) {
            playerObject=new Player();
            playerObject.getCount();

            form =new Form();
            form.display();

        }
    }
}