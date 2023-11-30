export default function Favourites ({ movies }) {
    return (
        <div className='container-fluid'>
            <div className="row" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
                {
                    movies.map(movie => (

                        <img key={movie._id} src={movie.posterUrl} style={{ width: '15%' }} />
                    ))
                }
            </div>
        </div>
    );
}