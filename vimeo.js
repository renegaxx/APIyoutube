import axios from 'axios';

const API_KEY = '';

export const buscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    });
    return pesquisa.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    throw erro;
  }
};
