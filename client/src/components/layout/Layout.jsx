import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import MovieList from "../movie-list/MovieList";
import Footer from "../footer/Footer";

export default function Layout ({onClickOpen}){
    return(
        <>
        <Header onClickOpen={onClickOpen}/>
        <Home />
        {/* <MovieList/> */}
        <Outlet/> 
        <Footer />
        </>
    );
}