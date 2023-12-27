import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function AuthGuard() {
    const { isAuthenticated, onClickOpen } = useContext(AuthContext);
    const navigate = useNavigate();

    if(!isAuthenticated) {
        useEffect(() => {
            navigate('/login');
            onClickOpen();
        }, []);
    }

    return <Outlet />;
}