import http from "./httpService";
import {apiUrl} from '../config.json';
export async function getMovies(){
const result = await http.get(`${apiUrl}/movies`);
console.log(result);
return result;
}

export function deleteMovie(movieId){
    return http.delete(`${apiUrl}/movies/${movieId}`);
}

export async function getMovie(movieId){
    const result = await http.get(`${apiUrl}/movies/${movieId}`);
    
    return result;
    }

    export async function saveMovie(movie){
        
if(movie._id){
    const body = {...movie}
    delete body._id;
    return http.put(`${apiUrl}/movies/${movie._id}`,body)
}

return http.post(`${apiUrl}/movies`,movie)

        }