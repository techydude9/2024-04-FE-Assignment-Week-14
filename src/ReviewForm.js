import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function ReviewForm({selectedMovie}) {
   // console.log('in ReviewForm Component');
   console.log({selectedMovie})

    return (
        <div>
            <table className='table table-bordered table-hover mt-5'>
                <thead>
                    <tr className="table-primary">
                        <th className="col-sm-1">Rating</th>
                        <th className="col-8">Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedMovie?.reviews.map((review, index) => {
                        return (
                            <tr key={index}>
                                <td>{selectedMovie.rating}</td>
                                <td>{review}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default ReviewForm;