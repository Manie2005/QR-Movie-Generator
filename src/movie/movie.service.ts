import { Injectable } from '@nestjs/common';
import axios from 'axios';//For the external API Use

@Injectable()
export class MovieService {
private readonly apiKey= process.env.TMDB_API_KEY; // TMDB's public API Key

async gen10RandomMovies():Promise<any>{
const pageNumb = Math.floor(Math.random()*50) +1; //Generate page Number from 1 to 50
const res= await axios.get(`https://api.themoviedb.org/3/movie/popular`,{
    params:{
        api_key: this.apiKey,
        pageNumb,
    },
});
const movies = res.data.results
return movies.slice(0,10)
}
}
