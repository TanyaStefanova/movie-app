import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound(){
    return(
        <div style={{backgroundColor:'#181818', width:'100%'}}>
        <img  src="https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error-1024x590.jpg" alt="404 page" />
        <div></div>
        <Link to='/'><Button style={{color: 'red', backgroundColor: 'white', marginLeft: '150px', marginBottom:'100px'}}>Back to Home</Button></Link>
        </div>
    );
}