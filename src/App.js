import logo from './logo.svg';
import './App.css';
// import "./style.css"
// import Axioussection from './PageNationCard';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import CryptoList from './CryptoList';
import PageNation from './PageNation';

function App() {

  const [movieData , setMovieData]=useState([])
  const [currentPage , setCurrentPage]=useState(1)
  const [postPerPage , setpostPerPage]=useState(10)

  useEffect(()=>{
      axios.get("https://api.tvmaze.com/shows/1/episodes")
      .then((res)=>{
         console.log(res.data)
         setMovieData(res.data)
      })
  },[])

   const lastPostIndex=currentPage*postPerPage;
   const firstPostIndex=lastPostIndex-postPerPage;
   const currentPosts=movieData.slice(firstPostIndex,lastPostIndex)

  return (
    <div className="App">
      <h2>Movie's Collection</h2>
      <CryptoList movieData={currentPosts}/>
      <PageNation 
      totalPosts={movieData.length}
      postPerPage={postPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      
      />
    </div>
  );
}

export default App;
