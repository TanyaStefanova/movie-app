export default function TvShows({movies}){
    return (
        <>
           <h3>TV Shows</h3>
            <div className='container-fluid'>
                <div className="row" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
                    {movies.map(movie => (
                        <img key={movie._id} src={movie.posterUrl} style={{ width: '15%' }} />
                    ))}
                </div>
            </div>
        </>
    );
}