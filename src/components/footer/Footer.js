import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import FooterNav from "./FooterNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

    return (
        <footer className="fluid">
            <div className='footer__desktop__wrapper'>
                <Col className="footer__desktop">
                    <div className="">
                        {/* <i class="fa-brands fa-apple fa-sxl"></i> */}
                        <a href="https://music.apple.com/no/artist/kikki-aikio/553226019" >
                            <FontAwesomeIcon icon={faApple} size="xl" />
                        </a>
                        <a href="https://open.spotify.com/artist/26H7lZChIpCT1kAVQ2qtzC?si=1nshYNBnTpqbrhsSXSG2VA" >
                            <FontAwesomeIcon icon={faSpotify} size="xl" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCWUnyCVx5i41C7qSPVvUvmw/featured" >
                            <FontAwesomeIcon icon={faYoutube} size="xl" />
                        </a>
                    </div>
                </Col>
            </div>
            <div>
            <Col className="flex-column footer__desktop footer__nav">
                    <FooterNav />
            </Col>
            </div>
            <div>
            <Col className="flex-column footer__desktop">
                <p>Floww Media 2023</p>
            </Col>
            </div>
        </footer>
    );
}