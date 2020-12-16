import { useImage } from 'react-image';
import style from './CardImage.module.css';

function CardImage({ imageSrc }) {
    const srcList = imageSrc.replace('._SX98_.jpg', '._SX200_.jpg');
    const { src } = useImage({
        srcList,
    });
    return (
        <div
            className={style.wrapper}
            style={{ backgroundImage: `url(${src})` }}
            alt="book title"
        />
    );
}

export default CardImage;
