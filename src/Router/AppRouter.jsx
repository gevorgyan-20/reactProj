import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Layout from "../Pages/Layout/Layout"
import HomePage from "../Pages/HomePage/HomePage"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllFilmData } from "../Store/allFilmDataSlice/API.js"
import SingleFilmPage from "../Pages/SingleFilmPage/SingleFilmPage.jsx"
import FavouritesPage from "../Pages/FavouritesPage/FavouritesPage.jsx"
import LastViewsPage from "../Pages/LastViewsPage/LastViewsPage.jsx"
import { addWantWatch, deleteWantWatch, selectAllFilmData } from "../Store/allFilmDataSlice/allFilmDataSlice.js"
import LoadingPage from "../Pages/LoadingPage/LoadingPage.jsx"

const AppRouter = () => {

    const { wantWatch } = useSelector(selectAllFilmData)
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true)

    const ScrollToTop = () => {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
    };

    useEffect(() => {
      dispatch(fetchAllFilmData());
    }, []);


    let wantWatchThis = (id) => {
            let film = wantWatch.filter((el) => el.imdbID === id)
            if(!film.length) {            
                dispatch(addWantWatch(id))
            } else {
                dispatch(deleteWantWatch(id))
            }
    }

    if(isLoading) {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }

    return (
        <div>
            <Routes>
            {ScrollToTop()}
                <Route path="/" element={<Layout/>}>
                    {isLoading ? 
                    <>
                        <Route index element={<LoadingPage/>}/>
                        <Route path='favourites' element={<LoadingPage/>}/>
                        <Route path='single' element={<LoadingPage/>}/>
                        <Route path='lasts' element={<LoadingPage/>}/>
                    </>
                    :
                    <>
                        <Route index element={<HomePage wantWatchFunc={wantWatchThis}/>}/>
                        <Route path="single" element={<SingleFilmPage wantWatchFunc={wantWatchThis}/> } />
                        <Route path="favourites" element={<FavouritesPage wantWatchFunc={wantWatchThis}/>}/>
                        <Route path="lasts" element={<LastViewsPage wantWatchFunc={wantWatchThis}/>}/>
                    </>
                    }
                </Route>
            </Routes>
        </div>
    )
}

export default AppRouter;