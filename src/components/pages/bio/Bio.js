import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { usePageTitle } from "../../common/PageTitle";
import H2Title from "../../layout/H2Title";
import img from "../../../images/ridduriddu.jpg"

export default function Kontakt() {
    const [page_title, setPageTitle] = usePageTitle("Kontakt oss | Floww media");
    return (
        <main>
            <Container className="wrapper">
                <Heading title="Biography" />
                <img className="image" src={img} alt="Kikkio Aikio performing at the Riddu Riddu festival"/>
                <article className="">
                    <p className="">Kikki Aikio er en samisk singer/song writer fra Tromsø. Hun har gitt ut sanger på samisk, norsk og engelsk og gir ut all musikk fra sitt eget plateselskap Nival Records.</p>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </article>
            </Container>
        </main>
    );
}