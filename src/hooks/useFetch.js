import { useState,useEffect } from "react"

export const useFetch = (api, queryTerm="") => {
  const apiKey = process.env.REACT_APP_API_KEY;
    const[data,setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api}?api_key=${apiKey}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url]);
  return { data }
}
