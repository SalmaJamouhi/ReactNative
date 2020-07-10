// API/TMDBApi.js

const API_TOKEN = "4affd18f3e0a994792d77c37277523b4";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

  export function getImageFromApi (name){
    return 'https://image.tmdb.org/t/p/w300' + name
  }

  export function getFilmsDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
  }