import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav"


function FooterNav() {

	return (
        <nav>
			<Nav className="justify-content-center">
				<Nav.Item>
					<Nav.Link href="/" className="nav-link footer__link desktop__link">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/bio" className="nav-link footer__link desktop__link">Bio</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/musikk" className="nav-link footer__link desktop__link">Musikk</Nav.Link>
				</Nav.Item>
					<Nav.Item>
				<Nav.Link href="/kontakt" className="nav-link footer__link desktop__link">Kontakt</Nav.Link>
				</Nav.Item>
			</Nav>
        </nav>
	);
}

export default FooterNav;