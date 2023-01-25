import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function CtaButton({text, cta}) {
    return (
        <article className="button__wrapper">
					<Button className="button btn-primary"><Link to="/kontakt" className='button__link'>{cta}</Link></Button> 
		</article>
    );
}