import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function ReviewForm(movie) {
   // console.log('in ReviewForm Component');
   console.log({movie})

    return (
        <div>
            <table className='table table-bordered table-hover mt-5'>
                <thead>
                    <tr className="table-primary">
                        <th className="col-sm-1">Rating</th>
                        <th className="col-8">Reviews</th>
                        <th className="col-sm-1"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>***</td>
                        <td>Test review 1</td>
                        <td>
                            <button className="btn btn-outline-info btn-sm center">Read</button>
                        </td>
                    </tr>
                    <tr>
                        <td>**</td>
                        <td>Test review 2</td>
                        <td>
                            <button className="btn btn-outline-info btn-sm center">Read</button>
                        </td>
                    </tr>
                    <tr>
                        <td>****</td>
                        <td>Test review 3</td>
                        <td>
                            <button className="btn btn-outline-info btn-sm center">Read</button>
                        </td>
                    </tr>
                    <tr>
                        <td>****</td>
                        <td>Test review 4</td>
                        <td>
                            <button className="btn btn-outline-info btn-sm center">Read</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default ReviewForm;