import { useState, useEffect } from "react";
import axios from "axios";


const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const url = `https://api.giphy.com/v1/gifs/random?api_key=0K7qVgvb4F9lRVaRzuaZD8oX8jvp7DHF`;

  const fetchData = async ()=>{
    setLoading(true);
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`:url);

    const imgSrc = data.data.images.downsized_large.url; 
    setGif(imgSrc);

    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);


  return {gif, loading, fetchData};

};

export default useGif;
