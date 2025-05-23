import axios from "axios";
const kinopoiskApi = import.meta.env.VITE_API_KEY_KINOPOISK
export default class MovieService {

    static async fetchMovies(ID) {
        const responce = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${ID}`,{
            headers: {
                'X-API-KEY':  kinopoiskApi,
            },
        })

        return responce.data
    }
    static async fetchTrailer(ID) {
        try {
            const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${ID}/videos`, {
                headers: {
                    'X-API-KEY':  kinopoiskApi,
                }
            });
            return response.data;
        } catch (error) {
            console.error("Ошибка запроса трейлера:", error);
            throw error;
        }
    }
}