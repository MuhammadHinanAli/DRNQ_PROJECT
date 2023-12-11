//IMPORTS
import Games from "./games";
import { useEffect, useState } from "react";
import axios from "axios";

function CollectionPage() {

    const [data, setData] = useState([]);

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/games')
                .then(
                    (response) => {
                        setData(response.data);
                    })
                .catch(
                    (error) => {
                        console.log(error);
                    })
        }, []
    );


    const Reload = (e) => {
        axios.get('http://localhost:4000/api/games')
            .then(
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <div>
            <h1>WELCOME TO THE COLLECTION PAGE</h1>
            <hr></hr>
            <br></br>
            <Games myGames={data} ReloadData={Reload}></Games>
        </div>
    );
}
export default CollectionPage;

//FUNCTION CALLED COLLECTIONPAGE WITH FEW TAGS, USED TO RELOAD PAGE AND RETRIEVE DATA THROUGH AXIOS FROM THE SERVER INTO THE CLIENT 
