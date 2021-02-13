import axios from 'axios';
import Goodreads from './goodreads.js';

const goodreadsAPI = new Goodreads(axios.create);

export default goodreadsAPI;
