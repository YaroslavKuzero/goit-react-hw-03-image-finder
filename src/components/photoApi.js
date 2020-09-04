import axios from 'axios'

const apiKey = '16958496-eed71f695e795e31d6c8ecae3';

const fetchPhotos = ({ page = 1, keyWord = '', itemPerPage = 12 }) => {
  return (axios.get(`https://pixabay.com/api/?q=${keyWord}&page=${page}&image_type=photo&orientation=horizontal&per_page=${itemPerPage}&key=${apiKey}`).then(res => res.data.hits))
};

export default { fetchPhotos };