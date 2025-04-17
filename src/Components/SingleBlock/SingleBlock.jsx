import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addViewFilms, selectAllFilmData } from '../../Store/allFilmDataSlice/allFilmDataSlice'
import { useNavigate } from 'react-router-dom'
import './singleBlock.css'

const SingleBlock = ({imdbID, poster, title, genre, language, year, imdbRating, plot, actors, director, runtime, func}) => {
  const {viewFilms, wantWatch} = useSelector(selectAllFilmData)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  return (
    <div className='singleFilmBlock' style={{opacity: !viewFilms.find((el) => el.imdbID === imdbID) ? '0.8' : '0.4'}} key={Math.random() * 99999 }>
    
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={wantWatch.find((film) => film.imdbID === imdbID) ? 'gold' : 'black'} className="bi bi-clock" viewBox="0 0 16 16"  onClick={(e) => func(imdbID)}>
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
                        <div className="blockk" onClick={() => {navigate('/single', {state: {imdbID:imdbID, runtime: runtime, plot: plot, actors: actors, director: director, poster: poster, title: title, genre: genre, language: language, year: year, imdbRating: imdbRating}}); dispatch(addViewFilms(imdbID))}}>
                            <div className='imageBlock'>
                              <img src={poster} alt="poster" />
                            </div>
                            <div className='title'>{title}</div>
                            <div className="bottomPart">      
                              <div>IMDB: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='gold' className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>{imdbRating}</div>
                              <div style={{color: '#bf090e', fontWeight: 'bold', fontStyle: 'italic' }}>{year}</div>
                            </div>
                          </div>
                      </div>
  )
}

export default SingleBlock