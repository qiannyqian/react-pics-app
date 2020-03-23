import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID maSrrraLCnI5h09bQ9AWcS3apmRbOuYeld2x-mHh1C8',
  },
});
