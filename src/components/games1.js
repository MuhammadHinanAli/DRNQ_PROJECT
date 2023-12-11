//IMPORTS
import GameItem1 from "./gameitem1";

function Games1(props) {

    return props.myGames1.map(
        (game1) => {
            return <GameItem1 myGame1={game1} key={game1.isbn}></GameItem1>
        }
    );
}

export default Games1;

//FUNCTION CALLED GAMES1 WHICH RETURNS THE MAPPING OF THE FUNCTION CALLED GAMEITEM1 FOR THE JSON DATA IN THE SERVER.JS

