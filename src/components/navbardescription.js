function NavbarDescription() {

    return (
        <div>
            <h1>Welcome to the Game Application</h1>
            <hr></hr>
            <br></br>
            <h2>The Time is {new Date().toLocaleTimeString()}.</h2>
            <hr></hr>
            <h3>GAMING APPLICATION DESIGNED WITH REACT AND EXPRESS JS</h3>
            <p>Application designed to run with client and a server (front end and back end)</p>
            <p>Data is added/deleted/edited through the server</p>
            <p>This Application retrieves data from the server through JSON format and mongoose cluster</p>
            <p>Home Page shows few upcoming games, Add page makes the user to add games to the collection and the collection page displays your games and even lets you alter any of your games.</p>
            <hr></hr>
            <h4>Made by Muhammad Hinan Ali Year 3 Software Development</h4>
        </div>
    );
}
export default NavbarDescription;

//FUCNTION CALLED NAVBARDESCRIPTION, RETURNS FEW TAGS WITH TEXT
