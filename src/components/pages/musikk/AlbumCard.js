import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Album({title, release, type, image, alt, spotify, apple, youtube}) {
    return (
        <>
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Img className='album__image' variant="top" src={image} alt={alt} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <div className="album_info">
                        <Card.Text className='album_info-item'>{release}</Card.Text>
                        <p className='album_info-item'>|</p>
                        <Card.Text className='album_info-item'>{type}</Card.Text>
                    </div>
                    <div className='wrapper__icon-light'>
                        <Card.Link href={apple} target="_blank">
                            <FontAwesomeIcon icon={faApple} size="xl" />
                        </Card.Link>
                        <Card.Link href={spotify} target="_blank">
                            <FontAwesomeIcon icon={faSpotify} size="xl" />
                        </Card.Link>
                        <Card.Link href={youtube} target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="xl" />
                        </Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Album;