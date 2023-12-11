import { useState } from "react";
import axios from "axios";


function AddPage() {

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, cover, author);

        const game = {
            title: title,
            cover: cover,
            author: author
        };

        axios.post('http://localhost:4000/api/game', game)
            .then()
            .catch();
    }


    return (
        <div>
            <h1>WELCOME TO THE GAME ADD PAGE</h1>
            <br></br>
            <hr></hr>
            <h2> Add Games To Your Collection!</h2>
            <br></br>
            <hr></hr>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Game Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Game Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Game Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Add Game"></input>
            </form>
        </div>
    );
}
export default AddPage;

//FUNCTION CALLED ADDPAGE USED TO ENTER THE DATA OF THE GAMES ONTO THE SCHEME FROM CLIENT TO THE SERVER
//AXIOS POST USED TO SEND DATA FROM CLIENT TO THE SEVER
//DIVS LABELS USED TO CREATE THE FORM
//BUTTON USED TO SUBMIT THE GAME ADDED