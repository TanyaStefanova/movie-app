import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Layout (){

    const { onClickOpen } = useContext(AuthContext);

    return(
        <>
        <Header onClickOpen={onClickOpen}/>
        <Home />
        <Outlet/> 
        <Footer />
        </>
    );
}