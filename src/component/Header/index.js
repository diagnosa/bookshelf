import { useImage } from 'react-image';
import style from './Header.module.css';
import headerImg from './headerImg.png';

function Header() {
    useImage({
        srcList: headerImg,
    });
    return (
        <header className={style.wrapper}>
            <div className={style.cover__back} />
            <div className={style.title}>
                <h1>
                    <span className={style.owner}>Diagnosa's </span>
                    <span>Bookshelf</span>
                </h1>
            </div>
            <div className={style.cover__front} />
            <div className={`${style.cover__front} ${style.cover__left}`} />
        </header>
    );
}

export default Header;
