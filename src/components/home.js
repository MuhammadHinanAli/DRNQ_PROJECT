//IMPORTS
import { useEffect, useState } from "react";
import axios from "axios";
import Games1 from "./games1";

function Home() {

    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:4000/apis/games')
                .then(
                    (response) => {
                        setData(response.data.mygames1)  //changed name to mygames1 //array name
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )

        }, []
    );

    return (
        <div >
            <h1>WELCOME TO THE HOME PAGE</h1>
            <hr></hr>
            <br></br>
            <h2>UPCOMING GAMES</h2>
            <hr></hr>
            <br></br>
            <Games1 myGames1={data}></Games1>
        </div>
    );

}

export default Home;
//FUNCTION CALLED HOME WHICH RETURNS THE DATA FROM THE SERVER WITH THE HELP OF GAME1 FUNCTION, IMPORTED FROM game.js
//AXIOS USED WITH BODY PARSER FROM THE SERVER.JS TO DISPLAY THE JSON DATA FROM LOCALHOST:4000/APIS/GAMES THROUGH AN ARRAY
//RESPONSE COLLECTS DATA FROM THE ARRAY INTO SETDATA 