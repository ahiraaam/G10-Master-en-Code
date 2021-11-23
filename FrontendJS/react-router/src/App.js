import { Navbar,Nav,Container, NavbarBrand,Card,Button  } from "react-bootstrap";
import { Switch,Route, Link, useLocation, useParams,useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="danger" expand="lg">
          <Container>
            <NavbarBrand as={Link} to='/' > HOME </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <LinkContainer to="/">
                  <Nav.Link >
                    Home
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/portafolio">
                  <Nav.Link >
                    Portafolio
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contacto">
                  <Nav.Link >
                    Contacto
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link as={Link} to="/contacto"> Contacto2 </Nav.Link> {/*  Otra opcion de colocar links con estilos de boostrap  */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/portafolio'>
          <Portafolio />
        </Route>
        <Route exact path='/contacto'>
          <Contacto />
        </Route>

        <Route path='/portafolio/:pid'>
          <PortafolioDetalle />
        </Route>

        <Route path='*'>
          <Error404 />
        </Route>

      </Switch>
    </div>
  );
}

function Home(){
  return(
    <h1>Home</h1>
  );
}

function Portafolio(){
  return(
    <React.Fragment>
      <h1>Portafolio</h1>
      <Container>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Pinterest</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button as={Link} to='/portafolio/1' variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Cajero</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button as={Link} to='/portafolio/2' variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Pokedex</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button as={Link} to='/portafolio/3' variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
      </Container>
    </React.Fragment>
    
  );
}

function PortafolioDetalle()
{
  let { pid } = useParams();
  let history = useHistory();

  const proyectos = [
    { id: 1, nombre:"Pinterest", desc:"descripcion" },
    { id: 2, nombre:"Cajero", desc:"descripcion" },
    { id: 3, nombre:"Pokedex", desc:"descripcion" }
  ]

  return(
    <React.Fragment>
      <h1> Detalle Portafolio</h1>
      <ul>
        <li> ID: {proyectos[ pid -1 ].id} </li>
        <li> Nombre: {proyectos[ pid -1 ].nombre} </li>
        <li> descripcion: {proyectos[ pid -1 ].desc} </li>
      </ul>

      <Button variant="danger" onClick={ ()=>{ 
        console.log(history);
        //history.push('/portafolio');
        history.goBack();
       }}>
        Regresar a portafolio
      </Button>

      {/*<Link to='/portafolio' > Regresar </Link>*/ }

    </React.Fragment>
  );
}

function Contacto(){
  return(
    <h1>Contacto</h1>
  );
}

function Error404(){
  let location = useLocation();
  console.log(location);
  return(
    <React.Fragment>
      <h1>Error 404</h1>
      <p>No se encontro la ruta: { location.pathname } </p>
    </React.Fragment>
  );
}

export default App;
