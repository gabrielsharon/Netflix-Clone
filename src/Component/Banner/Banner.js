import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
    const [movie,setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])
            setMovie(response.data.results[0])
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${(movie ? imageUrl+movie.backdrop_path:"")})`}} className="banner"><br/><br/><br/><br/>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className="banner_button">
                <button className='button'>Play</button>
                <button className='button'>Wach Later</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
        <div className="fade-bottom"></div>
        </div>

    )
}

export default Banner
