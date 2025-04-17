import React from 'react'
import { useLocation } from 'react-router-dom';
import './singleFilmPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { rateFilm, selectAllFilmData } from '../../Store/allFilmDataSlice/allFilmDataSlice';
import SingleStyleBlock from '../../Components/SingleStyleBlock/SingleStyleBlock';
import PageTitleComp from '../../Components/PageTitleComp/PageTitleComp';

const SingleFilmPage = ({wantWatchFunc}) => {
    const {myRates} = useSelector(selectAllFilmData)

    const dispatch = useDispatch()
    let location = useLocation()
    
    let x = myRates.find((el) => el.film.imdbID === location.state.imdbID)
    let circlesArray = [0,1,2,3,4,5,6,7,8,9,10]
    
    // onClick={(e) => wantWatchFunc(location.state.imdbID)}

    return (
    <div className='singleFilmPage'>
        <PageTitleComp/>
        <SingleStyleBlock data={location.state} func={wantWatchFunc}/>
        <div className="container second">
            <div className="currentRate">IMDB Rating:  <span style={{color: 'red', fontSize: '18px'}}>{location.state.imdbRating}</span></div>
            <div className='myRatesBlock'>
                <div className="rates">
                {circlesArray.map((el) => {
                        return(
                            <div key={Math.random() * 99999} className='circleRates' onClick={() => dispatch(rateFilm({film: location.state, rate: el}))}>
                                {el}
                            </div>
                        )
                })}
                </div>
           
                <div className='myRate'>
                {x ? `Your Rate : ${x.rate}` : ''}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleFilmPage;