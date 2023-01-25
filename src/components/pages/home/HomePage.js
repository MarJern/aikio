import Container from "react-bootstrap/Container";
import { usePageTitle } from "../../common/PageTitle";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import H2Title from "../../layout/H2Title";
import CtaButton from "../../common/CtaButton";
import img from "../../../images/AdobeStock_309647638_Preview.jpeg"
import borde from "../../../images/full-bord-beige.png"
import brunborde from "../../../images/full-bord-brun.png"


export default function HomePage() {
	const [page_title, setPageTitle] = usePageTitle("Kikki Aikio homepage | Sami musician");
	return (
		<Container>
			<main className="wrapper">
				<section className="">
					<img className="hero__image" src={img} alt="Kikkio Aikio profile image"/>
				</section>
				<section className="">
					<div className="">
						<hr />
						<p>
							In 2023, Sami musician Kikki Aikio celebrates 20 years anniversary as a recording artis!
						</p>
						<hr />
					</div>
				</section>
				<section className="iframe__container">
					<div className="">
						<p>Liten to Kikki Aikios latest album "Hearrá Vehkiin" on Spotify</p>
						<i class="fa-brands fa-spotify"></i>
					</div>
					<iframe
						src="https://open.spotify.com/embed/album/4cL1RFOpTrDP35gmaiRraw?utm_source=generator&theme=0"
						width="100%"
						height="152"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
						title="Kikki Aikios album Hearrá Vehkiin on Spotify"
						>
					</iframe>
				</section>
				<CtaButton cta="See full discography" />
			</main>
		</Container>
	);
}
