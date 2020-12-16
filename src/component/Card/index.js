import { lazy, Suspense, useState } from 'react';
import style from './Card.module.css';

const CardImage = lazy(() => import('./CardImage'));
function Card({ title, image }) {
    const [error] = useState(null);
    if (error) {
        return (
            <div>
                Error: {error.message} {error.response}
            </div>
        );
    }
    return (
        <div className={`${style.cover} ${style.wrapper}`}>
            <Suspense
                lazy
                fallback={<div className={style.cover__placeholder} />}
            >
                <CardImage imageSrc={image} />
            </Suspense>
            <div className={style.title}>{title}</div>
        </div>
    );
}

export default Card;
