import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Heading from "../../layout/Heading";
import Row from 'react-bootstrap/Row';
import { usePageTitle } from "../../common/PageTitle"
import Album from "./AlbumCard";
import hearra from "../../../images/hearra-album.png";
import binna from "../../../images/binna-album.jpg";
import desert from "../../../images/In-The-Desert-album.png";
import traer from "../../../images/traer-album.jpeg";
import illu from "../../../images/illu-album.jpg";
import rohkos from "../../../images/rohkos-album.png";
import rohkos2 from "../../../images/rohkos2-album.jpg";
import beaivi from "../../../images/Dat-beaivi-album.png";
import eva from "../../../images/Eva-album.jpg";
import dakkar from "../../../images/dakkar-album.jpg";
import vaimmo from "../../../images/Vaimmocatnasat.jpg";
import cold from "../../../images/my-cold-heart.jpg";



export default function HomePage() {
	const [page_title, setPageTitle] = usePageTitle("Discography | Kikki Aikio");
	return (
        <main className="wrapper">
            <Heading title="Discography" />
            <Container className="py-5">
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Col  className="col-12 col-md-6 col-lg-3">
                            <Album image={hearra} alt="Cover graphic for Kikki Aikios album Hearrá Vehkin" title="Hearrá Vehkin" release="2022" type="ALBUM" spotify="https://open.spotify.com/album/4cL1RFOpTrDP35gmaiRraw?si=9fn97be1TgSiE7EqT9hnaA" apple="https://music.apple.com/no/album/hearr%C3%A1-vehkiin/1642358164" youtube="" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={desert} alt="Cover graphic for Kikki Aikios album Into the Desert" title="Into the desert" release="2021" type="ALBUM" spotify="https://open.spotify.com/album/28MuhxG4f2s7rgnS0t7bhc?si=-cVkOZYQSgOFtVLaS1lF2g" apple="https://music.apple.com/no/album/tr%C3%A6r/1516624731" youtube="https://www.youtube.com/watch?v=W49xcwHBWQ0&list=OLAK5uy_ncohAIRnfD8On2DPvLAgqHluNHD_8kyYA" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={traer} alt="Cover graphic for Kikki Aikios album Trær" title="Trær" release="2020" type="ALBUM" spotify="https://open.spotify.com/album/7viM5wk9UiniEnLaOq1SFt?si=qDowMqE0QqKfalqgFfqixg" apple="https://music.apple.com/no/album/tr%C3%A6r/1516624731" youtube="https://www.youtube.com/watch?v=W49xcwHBWQ0&list=OLAK5uy_ncohAIRnfD8On2DPvLAgqHluNHD_8kyYA" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={illu} alt="Cover graphic for Kikki Aikios single Illu" title="Illu" release="2019" type="SINGLE" spotify="https://open.spotify.com/album/4s9AbIXsr9WByDFeAuCqET?si=7-kpRfMNTI-mstXNaG_iqA" apple="https://music.apple.com/no/album/illu-single/1488642461" youtube="https://www.youtube.com/watch?v=KgJzKZmz8Bk&list=OLAK5uy_m98RA-ChLRh65AFaX7p6-uNC_I3uNDuYo" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={rohkos2} alt="Cover graphic for Kikki Aikios single Rohkos II" title="Rohkos II" release="2019" type="SINGLE" spotify="https://open.spotify.com/album/0npb5vLYwWpaqVfZwducJ3?si=s3cn7bdGSISyvihcFSNmaA" apple="https://music.apple.com/no/album/rohkos-ii-single/1477516023" youtube="" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={beaivi} alt="Cover graphic for Kikki Aikios single Dát beaivi" title="Dát beaivi" release="2019" type="SINGLE" spotify="https://open.spotify.com/album/1PgJo4UAQimXUjjSKqOCZf?si=oa4cnKaxSE6mb7GZnn462g" apple="https://music.apple.com/no/album/d%C3%A1t-beaivi-single/1471336473" youtube="" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={dakkar} alt="Cover graphic for Kikki Aikios single Dákkár dáhpáhusat" title="Dákkár dáhpáhusat" release="2019" type="SINGLE" spotify="https://open.spotify.com/album/0em0lD3iVnoMwkrSnehZPK?si=97qG1nH1R5GahS-xN_TCeA" apple="https://music.apple.com/no/album/d%C3%A1kk%C3%A1r-d%C3%A1hp%C3%A1husat-mat-o%C4%91%C4%91asit-%C3%A1rpejit-du-v%C3%A1immu-single/1459102704" youtube="https://www.youtube.com/watch?v=jQILTAMfL0k&list=OLAK5uy_mh1MWHKc6IDgmhmly2uDxOze2g1ejsTTY" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={rohkos} alt="Cover graphic for Kikki Aikios single Rohkos" title="Rohkos" release="2019" type="SINGLE" spotify="https://open.spotify.com/album/1VrLQaTIaWtumeo9krLQoB?si=UIzerl6tS1iihykRI5_5kw" apple="https://music.apple.com/no/album/rohkos-single/1450174849" youtube="https://www.youtube.com/watch?v=UGDr6XPtFvM&list=OLAK5uy_kalgD0c9cz0BjDTUPUxMNmHUSdjGtoTM0" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={eva} alt="Cover graphic for Kikki Aikios album Eva čihkkon čivggat" title="Eva čihkkon čivgga" release="2015" type="ALBUM" spotify="https://open.spotify.com/album/0cXmKG0lhJCShWymsM7XO5?si=wjwt3mf9TlimM2xXvmc3_g" apple="https://music.apple.com/no/album/binna-banna/906809407" youtube="https://www.youtube.com/watch?v=H1oGkLBxJPs&list=OLAK5uy_kXqZuYvc3B2AHEadmW4RiCfGE-CpNBUBw" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={binna} alt="Cover graphic for Kikki Aikios album Binna Banna" title="Binna Banna" release="2014" type="ALBUM" spotify="https://open.spotify.com/album/0cXmKG0lhJCShWymsM7XO5?si=wjwt3mf9TlimM2xXvmc3_g" apple="https://music.apple.com/no/album/binna-banna/911300738" youtube="https://www.youtube.com/watch?v=Q5ZLumIvk8s&list=OLAK5uy_ll8IwCKGT-AOF2SU_i2XPiNkvctW1Bn4c" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={binna} alt="Cover graphic for Kikki Aikios album Binna Banna" title="Binna Banna (Norsk versjon)" release="2014" type="ALBUM" spotify="https://open.spotify.com/album/3EJVqacGOhjRN2H8DSTUM7?si=9PL_Tf-qTkOsN8AoVVsW6g" apple="https://music.apple.com/no/album/binna-banna/906809407" youtube="https://www.youtube.com/watch?v=H1oGkLBxJPs&list=OLAK5uy_kXqZuYvc3B2AHEadmW4RiCfGE-CpNBUBw" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={vaimmo} alt="Cover graphic for Kikki Aikios album Binna Banna" title="Váimmočatnasat" release="2013" type="ALBUM" spotify="https://open.spotify.com/album/2GrDLz6HHBFpE4CYRS26Da?si=cQtu7xR5RGCI_UjiTS-QiA" apple="https://music.apple.com/no/album/v%C3%A1immo%C4%8Datnasat/794528259" youtube="https://www.youtube.com/watch?v=flmreKDcVmM&list=OLAK5uy_lU1YfVczUqJJO9j0d4kI_ZATieLA8sO5c" />
                    </Col>
                    <Col  className="col-12 col-md-6 col-lg-3">
                        <Album image={cold} alt="Cover graphic for Kikki Aikios album My Cold Heart" title="My Cold Heart" release="2012" type="ALBUM" spotify="https://open.spotify.com/album/17di0NFd8HrY7GOcLGNHJ6?si=BLYiNe0ERwu-CKsBWgPQrA" apple="https://music.apple.com/no/album/my-cold-heart/920479156" youtube="https://www.youtube.com/watch?v=mkg7vlEfUUo&list=OLAK5uy_lFp6xIxNiHiL8uHLI8SsynjWkyItSv_os" />
                    </Col>
                </Row>
            </Container>
        </main>
	);
}