import { useEffect, useState } from "react";
import axios from 'axios';
import { parseStringPromise } from "xml2js";

function Catalog() { 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
        axios({
            url: `${process.env.REACT_APP_GR_URL}shelf/list.xml`,
            headers: {
                'Accept': 'application/xml',
            },
            params: {
                key: process.env.REACT_APP_GR_API_KEY, 
                user_id: process.env.REACT_APP_GR_UID, 
            },
        })
        .then(result=>result.data)
        .then(parseStringPromise)
        .then(
            (result) => {
                const {
                    GoodreadsResponse:{
                        shelves
                }} = result;
                setIsLoaded(true);
                setItems(shelves[0].user_shelf);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
  
    if (error) {
        return <div>Error: {error.message} {error.response}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id[0]._}>
                        {item.name[0]}
                    </li>
                ))}
            </ul>
        );
    }
  }

export default Catalog;