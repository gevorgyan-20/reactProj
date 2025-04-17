import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllFilmData } from '../../Store/allFilmDataSlice/allFilmDataSlice'
import './singleStyleBlock.css'

const SingleStyleBlock = ({data, func}) => {
    const { wantWatch } = useSelector(selectAllFilmData)
    
    
  return (
    <div className="container">
        <div className="topBlock">
                <div className='leftBlock'>
                    <div className='imgBlock' style={{backgroundImage: `url(${data.poster})`}}>
                        {/* <img src={data.poster} alt="poster" /> */}
                    </div>
                </div>
                <div className='rightBlock'>
                    <div className='watchLaterIconBlock'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" cursor='pointer' fill={wantWatch.find((film) => film.imdbID === data.imdbID) ? 'gold' : 'black'} className="bi bi-clock" viewBox="0 0 16 16"  onClick={(e) => func(data.imdbID)}>
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                        </svg> 
                    </div>
                    <div className='title'>
                        <span className='firstSpan'>Title</span>
                        <span className='secondSpan'>{data.title}</span>
                    </div>
                    <div>
                        <span className='firstSpan'>Genre</span>
                        <span className='secondSpan'>{data.genre}</span>
                    </div>
                    <div>
                        <span className='firstSpan'>Language</span>
                        <span className='secondSpan'>{data.language}</span>
                    </div>
                    <div>
                        <span className='firstSpan'>Year</span>
                        <span className='secondSpan'>{data.year}</span>
                    </div>
                    <div>
                        <span className='firstSpan'>Runtime</span>
                        <span className='secondSpan'>{data.runtime}</span>
                    </div>
                    <div>
                        <span className='firstSpan'>Actors</span>
                        <span className='secondSpan'>{data.actors}</span>
                    </div>
                    <div>
                        <span className='firstSpan'>Director</span>
                        <span className='secondSpan'>{data.director}</span>
                    </div>
                </div>
        </div>
        <div className="bottomBlock">
            <div>
                <span className='firstSpan'><span style={{color: 'red'}}>P</span>lot</span>
                <span className='secondSpan'>{data.plot}</span>
            </div>
        </div>
    </div>
  )
}

export default SingleStyleBlock