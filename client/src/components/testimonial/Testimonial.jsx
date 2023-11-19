export default function Testimonial(){
    return(
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="src/assets/img/testimonial-1.jpg" style={{width: '80px', height: '80px'}} />
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="src/assets/img/testimonial-2.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="src/assets/img/testimonial-3.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="src/assets/img/testimonial-4.jpg" style={{width: '80px', height: '80px'}} />
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
            </div>
        </div>
    </div>
    );
}