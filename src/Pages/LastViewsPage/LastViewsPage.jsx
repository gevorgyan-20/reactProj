import React from 'react'
import './lastViewsPage.css'
import { useSelector } from 'react-redux'
import { selectAllFilmData } from '../../Store/allFilmDataSlice/allFilmDataSlice'
import SingleBlock from '../../Components/SingleBlock/SingleBlock'
import PageTitleComp from '../../Components/PageTitleComp/PageTitleComp'

const LastViewsPage = ({wantWatchFunc}) => {
    const {viewFilms} = useSelector(selectAllFilmData)
    
  return (
    <div className='lastViewsPage'>
         <PageTitleComp/>
        <div className="lastViewRenderBlock">
            <div className="container">
            {viewFilms.length === 0 ? 'Not "Views" yet' : viewFilms.map((el) => {
                return (
                    <SingleBlock key={Math.random() * 9999} runtime={el.Runtime} plot={el.Plot} actors={el.Actors} director={el.Director} title={el.Title} imdbID={el.imdbID} poster={el.Poster} genre={el.Genre} language={el.Language} year={el.Year} imdbRating={el.imdbRating} func={wantWatchFunc}/>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default LastViewsPage