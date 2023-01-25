import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import { usePageTitle } from "../../common/PageTitle";
import H2Title from "../../layout/H2Title";
import img from "../../../images/ridduriddu.jpg"

export default function Kontakt() {
    const [page_title, setPageTitle] = usePageTitle("Kontakt oss | Floww media");
    return (
        <Container className="wrapper">
            <Heading title="Contact" />
            <img className="image" src={img} alt="Kikkio Aikio performing at the Riddu Riddu festival"/>
            <section className="">
                <p className="intro__text">Please dont hesitate to get in touch with me if you have any questions or requests.</p>
            </section>
            <section className="">
                <p>Kikki Aikio</p>
                <p><span className="kontakt">kikki@kikkiaikio.no</span></p>
            </section>
        </Container>
    );
}