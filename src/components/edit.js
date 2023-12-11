//IMPORTS
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
    let { id } = useParams();

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/game/' + id)
                .then((response) => {
                    setTitle(response.data.title);
                    setCover(response.data.cover);
                    setAuthor(response.data.author);
                })
                .catch(
                    (error) => {
                        console.log(error);
                    }
                );
        }, []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const game = {
            title: title,
            cover: cover,
            author: author
        }

        axios.put('http://localhost:4000/api/game/' + id, game)
            .then((res) => {
                navigate('/collection');
            })
            .catch(
                (error) => {
                    console.log(error)
                });
    }
    return (
        <div>
            <h2>Welcome To The Edit Collection Page</h2>
            <hr></hr>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Game Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Game Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Game Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                        value="Edit Game">
                    </input>
                </div>
            </form>

        </div>
    );
}


//FUNCTION CALLED EDIT USED TO ALTER THE DATA OF THE GAMES THROUGH UNIQUE ID
//AXIOS PUT USED TO RETRIEVE AND ALTER THE DATA THROUGH THE SERVER TO THE CLIENT
//DIVS LABELS USED TO CREATE THE FORM
//BUTTON USED TO SUBMIT THE CHANGES
//NAVIGATE USED TO REDIRECT DATA TO THE COLLECTION PAGE 