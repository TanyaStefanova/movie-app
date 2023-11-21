import { Link } from "react-router-dom"; 

export default function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" style={{top: '45px'}}>
        <Link  className="navbar-brand p-0" to="/">
            <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
            {/*<img src="img/logo.png" alt="Logo">*/}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/services" className="nav-item nav-link">Services</Link>
                <Link to="/packages" className="nav-item nav-link">Packages</Link>
               {/* <div className="nav-item dropdown"> 
                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu m-0">
                        <Link className="dropdown-item">Destination</Link>
                        <Link className="dropdown-item">Booking</Link>
                        <Link className="dropdown-item">Travel Guides</Link>
                        <Link className="dropdown-item">Testimonial</Link>
                        <Link className="dropdown-item">404 Page</Link> 
                    </div>
                </div> */}
                <Link className="nav-item nav-link">Contact</Link>
            </div>
            <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
            <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">Login</Link>
            <Link to="/logout" className="btn btn-primary rounded-pill py-2 px-4">Logout</Link>
        </div>
    </nav>
    );
}