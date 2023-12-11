//IMPORTS
import Card from 'react-bootstrap/Card';

function GameItem1(props) {

    return (
        <div>
            <Card>
                <Card.Header><b><u>{props.myGame1.title}</u></b></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myGame1.thumbnailUrl} width={500} height={300}></img>
                        <footer>
                            <u>{props.myGame1.authors[0]}</u>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    );

}

export default GameItem1;

//FUNCTION CALLED GAMEITEM1 TAKES IN THE JSON DATA AND ORGANISES IT INTO THE CARD HEADER AND BODY WITH THE TITLE/THUMBNAIL/AUTHOR OF THE GAME AND DISPLAYS