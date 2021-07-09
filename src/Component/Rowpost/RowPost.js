import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../Constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [UrlId,setUrlId] =useState('')
    useEffect(() => {
     axios.get(props.url).then(response=>{
         console.log(response.data);
         setMovie(response.data.results)
     }).catch(err=>{
         alert('network error')
     })
    }, [])
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 2,
        },
      };
      const handleMovie =(id)=>{
          console.log(id)
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('array empty')
            }     
        })
      }
    return (
        <div className='row'>
           <h2>{props.title}</h2>
           <div className="posters">
               {movie.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} />
               )}
              
               
           </div>
           {UrlId && <YouTube videoId={UrlId.key}/>}
        </div>
    )
}

export default RowPost
