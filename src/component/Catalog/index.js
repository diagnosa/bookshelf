import { useEffect, useState } from 'react';
import { parseStringPromise } from 'xml2js';
import api from '../../api';
import Card from '../Card';

const path = `/review/list/${process.env.REACT_APP_GR_UID}.xml`;
function Catalog() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // axios({
        //     url,
        //     headers: {
        //         Accept: 'application/xml',
        //     },
        //     params: {
        //         key: process.env.REACT_APP_GR_API_KEY,
        //         v: 2,
        //         sort: 'num_ratings',
        //     },
        // })
        //     .then((result) => result.data)
        api.getDetails(path, {
            key: process.env.REACT_APP_GR_API_KEY,
            v: 2,
            sort: 'num_ratings',
        })
            .then(parseStringPromise)
            .then(
                (result) => {
                    const {
                        GoodreadsResponse: { reviews },
                    } = result;
                    setIsLoaded(true);
                    console.log(reviews[0].review);
                    setItems(reviews[0].review);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return (
            <div>
                Error: {error.message} {error.response}
            </div>
        );
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {items.map((item) => (
                <Card
                    key={item.id[0]}
                    title={item.book[0].title[0] || 'judul'}
                    image={
                        item.book[0].image_url[0] ||
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1467556925l/30835803._SX98_.jpg'
                    }
                />
            ))}
        </div>
    );
}

export default Catalog;
