import React, { useState } from 'react'
import '../HomePage/homePage.css'
import { selectAllFilmData } from '../../Store/allFilmDataSlice/allFilmDataSlice'
import { useSelector } from 'react-redux'
import SingleBlock from '../../Components/SingleBlock/SingleBlock'
import HomeSearchBlock from '../../Components/HomeSerachBlock/HomeSearchBlock'
import PageTitleComp from '../../Components/PageTitleComp/PageTitleComp'


const HomePage = ({wantWatchFunc}) => {
    const {filmData} = useSelector(selectAllFilmData)

    const [searched, setSearched] = useState([])
    const [notFind, setNotFind] = useState(false)

    let findSearchedItem = (e) => {
        let arr = []
        let strArray = e.target.value.toLowerCase().split('', e.target.value.length)
        
        
        filmData.forEach((el) => {
            let textArray = el.Title.toLowerCase().split('',e.target.value.length)
            let count = 0
            textArray.forEach((symb, index) => symb === strArray[index] && count++)

            if(count === e.target.value.length) {
                arr.push(el)
            }
        })
        
        setSearched(arr)

        if(e.target.value.length > 0) {
            setNotFind(true)
        } else {
            setNotFind(false)
        }
    }

  return (
    <div className='homePage'>
        <PageTitleComp/>
        <HomeSearchBlock func={findSearchedItem}/>
        <div className="filmRenderBlock">
            <div className="container">
            {searched.length > 0 ? searched.map((el) => {
                return (
                    <SingleBlock key={Math.random()*555} runtime={el.Runtime} plot={el.Plot} actors={el.Actors} director={el.Director} title={el.Title} imdbID={el.imdbID} poster={el.Poster} genre={el.Genre} language={el.Language} year={el.Year} imdbRating={el.imdbRating} func={wantWatchFunc}/>
                )
            }) : 
            notFind ? 'No films found' : filmData.map((el) => {
                return (
                    <SingleBlock key={Math.random()*555} runtime={el.Runtime} plot={el.Plot} actors={el.Actors} director={el.Director} title={el.Title} imdbID={el.imdbID} poster={el.Poster} genre={el.Genre} language={el.Language} year={el.Year} imdbRating={el.imdbRating} func={wantWatchFunc}/>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default HomePage;