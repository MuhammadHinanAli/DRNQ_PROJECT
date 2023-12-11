//IMPORTS
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; //IMPORT BUTTON
import axios from 'axios'; //IMPORT AXIOS

function GameItem(props) {
    useEffect(() => {
        console.log("Item " + props.myGame);
    }, []);

    return (
        <div>
            <Card>
                <Card.Header><b><u>{props.myGame.title}</u></b></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myGame.cover}></img>
                        <footer>
                            {props.myGame.author
                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit/' + props.myGame._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={(e) => {             //Delete Button With Function/variant
                    axios.delete('http://localhost:4000/api/game/' + props.myGame._id) //Deletes game with id
                        .then((res) => {
                            let reload = props.Reload(); //responds with Reload()
                        }) //then
                        .catch(); //catch
                }}>Delete</Button>
            </Card>
        </div>
    );

}
export default GameItem;

//FUNCTION CALLED GAMEITEM TAKES IN THE JSON DATA AND ORGANISES IT INTO THE CARD HEADER AND BODY WITH THE TITLE/THUMBNAIL/AUTHOR OF THE GAME AND DISPLAYS
//DISPLAYS 2 BUTTONS (DELETE AND EDIT) //BUTTONS WITH FUNCTIONS

