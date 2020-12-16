import { useImage } from "react-image";
import logo from './comingSoonLogo.png';
import './LogoImage.css';

function LogoImage() {
    const {src} = useImage({
        srcList: logo,
    })
    return (
        <img src={src} className="Logo-image" alt="logo" />
    );
}

export default LogoImage;
