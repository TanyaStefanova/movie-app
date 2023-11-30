export default function Favourites({ movies }) {
    return (
        <>
            <h3>Favourites</h3>
            <div className='container-fluid'>
                <div className="row" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
                    {
                        movies.map(movie => (

                            <img key={movie._id} src={movie.posterUrl} style={{ width: '15%' }} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}