import axios from 'axios'

const apiKey = '16958496-eed71f695e795e31d6c8ecae3';
axios.defaults.baseURL = 'https://pixabay.com'

async function fetchPhotos({ page = 1, keyWord = '', itemPerPage = 12 }) {
  try {
    const response = await axios.get(`/api/?q=${keyWord}&page=${page}&image_type=photo&orientation=horizontal&per_page=${itemPerPage}&key=${apiKey}`);
    const { hits } = response.data
    return hits;
  } catch (error) {
    console.log(error);
  }
};

export default { fetchPhotos };