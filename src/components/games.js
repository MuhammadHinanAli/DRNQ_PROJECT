//IMPORT
import GameItem from "./gameitem";

function Games(props) {

    return props.myGames.map(
        (game) => {
            return <GameItem myGame={game} key={game._id} Reload={() => { props.ReloadData() }}></GameItem> //Reload={()=>{props.ReloadData()}}
        }
    );
}
export default Games;

//FUNCTION CALLED GAMES WHICH RETURNS THE MAPPING OF THE FUNCTION CALLED GAMEITEM FOR THE JSON DATA IN THE SERVER.JS, ALSO CALLS RELOAD.
