import api from '../api';
import { parseStringPromise } from 'xml2js';

class CatalogService {
    constructor() {
        this.path = `/review/list/${process.env.REACT_APP_GR_UID}.xml`;
    }

    getBookList(sortOption) {
        return api
            .getDetails(this.path, {
                sort: sortOption,
            })
            .then(parseStringPromise)
            .then((result) => {
                const {
                    GoodreadsResponse: { reviews },
                } = result;
                return reviews[0].review;
            });
    }
}

export default CatalogService;
