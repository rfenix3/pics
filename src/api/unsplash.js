import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
      Authorization: 'Client-ID b11b27b5346cfdf271be1228d9f5b74a47e7b2492d0705cdef895743825ba8a5'
    }
});
