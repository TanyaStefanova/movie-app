import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function AddFavourites() {

    const {  ownerId, isAuthenticated } = useContext(AuthContext);
    // const navigate = useNavigate();
    

    //    {!isAuthenticated && (
    //     navigate('/register')
    // )} 
    

    

    return (
        <div >
            <span style={{ color: 'white', fontSize: '13px', paddingRight: '5px' }}>Add to Favourites</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color="red"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
        </div>
    );
}