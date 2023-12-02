export default function Movies({ movies }) {
    return (
        <>
            <h3>Movies</h3>
            <div className='container-fluid'>
                <div className="row" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
                    {movies.map(movie => (
                        <img
                            key={movie._id}
                            src={movie.posterUrl}
                            style={{ width: '15%' }}
                            alt={movie.name} />
                    ))}
                </div>
            </div>
        </>
    );
}