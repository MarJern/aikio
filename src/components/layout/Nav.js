import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AuthContext from "../../context/AuthContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import borde from "../../images/full-bord-beige.png"


function CreateNav() {
	const [auth, setAuth] = useContext(AuthContext);

	const navigate = useNavigate();

	// function logout() {
	// 	setAuth(null);
	// 	navigate("/");
	// }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()

	return (
		<Navbar expand="lg" sticky="top" className={classNames (scrollPosition > 0 ? 'nav__sticky' : 'nav__bar')}>
            <Container fluid>
            {/* <section className="container__borde">
				<img className="borde" src={borde} alt=""/>
			</section> */}
            <Navbar.Brand href="/" className="logo">Kikki Aikio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-inline d-lg-none" />
            <Navbar.Collapse id="nav-dropdown-dark-example" menuvariant="dark">
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link">Hjem</NavLink>
					<NavLink to="/bio" className="nav-link">Bio</NavLink>
					<NavLink to="/musikk" className="nav-link">Musikk</NavLink>
					<NavLink to="/kontakt" className="nav-link">Kontakt</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
	);
}

export default CreateNav;
