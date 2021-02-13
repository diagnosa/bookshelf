class Goodreads {
    constructor(createApiService) {
        const baseURL = process.env.REACT_APP_GR_URL;
        const headers = { Accept: 'application/xml' };
        this.api = createApiService({ baseURL, headers });
    }

    getDetails(path, params) {
        const baseURL = process.env.REACT_APP_GR_URL;
        console.log(`${baseURL}${path}`);
        console.log();
        return this.api
            .get(path, params)
            .then((result) => result.data)
            .catch((error) => {
                console.log(error);
            });
    }
}

export default Goodreads;
