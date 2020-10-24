import http from "./httpService";

const apiEndPoint = 'http://localhost:8000/api/movies';
export async function getMovies(){
const result = await http.get(apiEndPoint);
console.log(result);
return result;
}

export function deleteMovie(movieId){
    return http.delete(`${apiEndPoint}/${movieId}`);
}
