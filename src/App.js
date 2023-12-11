//IMPORTS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import NavbarDescription from './components/navbardescription';
import AddPage from './components/addpage';
import CollectionPage from './components/collectionpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Edit from './components/edit';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* RELINKING THE PAGES */}
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
              <Nav.Link href="/collection">Collection</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          {/* ROUTING THE PATH */}
          <Route path='/' element={<NavbarDescription></NavbarDescription>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/add' element={<AddPage></AddPage>}></Route>
          <Route path='/collection' element={<CollectionPage></CollectionPage>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>

        {/* <Header></Header>
      <Content></Content>
      <Footer></Footer>
      //APP FUNCTION WTIH HEADER, FOOTER COMPONENTS BEING IMPORTED FROM 
      //ANOTHER FOLDER
      //INSTALL BOOTSRAP IN CMD
      //INSTALL REACT ROUTER DOM IN CMD*/}
      
      </div>
    </BrowserRouter>
  );
}

export default App;

