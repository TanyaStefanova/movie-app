import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";

export default function Layout (){
    return(
        <>
        <Header/>
        <Home />
        <Outlet/> 
        </>
    );
}