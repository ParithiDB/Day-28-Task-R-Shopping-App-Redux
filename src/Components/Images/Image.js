import Image from 'react-bootstrap/Image';
import './Image.css';

function FluidImage({ImageURL = ''}) {
  return <Image src={ImageURL} fluid />;
}

export default FluidImage;