export default function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" style={{top: '45px'}}>
        <a  className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
            {/*<img src="img/logo.png" alt="Logo">*/}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a className="nav-item nav-link active">Home</a>
                <a className="nav-item nav-link">About</a>
                <a className="nav-item nav-link">Services</a>
                <a className="nav-item nav-link">Packages</a>
               {/* <div className="nav-item dropdown"> 
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <a className="dropdown-item">Destination</a>
                        <a className="dropdown-item">Booking</a>
                        <a className="dropdown-item">Travel Guides</a>
                        <a className="dropdown-item">Testimonial</a>
                        <a className="dropdown-item">404 Page</a> 
                    </div>
                </div> */}
                <a className="nav-item nav-link">Contact</a>
            </div>
            <a className="btn btn-primary rounded-pill py-2 px-4">Register</a>
            <a className="btn btn-primary rounded-pill py-2 px-4">Login</a>
            <a className="btn btn-primary rounded-pill py-2 px-4">Logout</a>
        </div>
    </nav>
    );
}