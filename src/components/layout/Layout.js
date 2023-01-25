import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/home/HomePage';
import Kontakt from '../pages/kontakt/Kontakt';
import Bio from '../pages/bio/Bio';
import Musikk from "../pages/musikk/Musikk"
import CreateNav from './Nav';


function Layout() {
	return (
        <>
        <CreateNav/>
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/musikk" element={<Musikk />} />
            <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        </>
	);
}

export default Layout;