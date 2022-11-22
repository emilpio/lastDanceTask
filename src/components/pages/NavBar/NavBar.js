import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <nav>
      <Navbar bg='primary' variant='dark' className={styles.nav}>
        <Container>
          <Navbar.Brand as={NavLink} to='/'>
            Waiter.App
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavBar;
