import { useEffect, useState } from 'react';
import { CatalogService } from '../../services';
import Card from '../Card';

// const path = `/review/list/${process.env.REACT_APP_GR_UID}.xml`;
function Catalog() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const catalogService = new CatalogService();
        catalogService.getBookList('num_ratings').then(
            (bookList) => {
                setIsLoaded(true);
                setItems(bookList);
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
