import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function Review(movie) {
    console.log('in Review Component');

    return (
        <div id="movieReviewIn">
            <label id="reviewInLbl" htmlFor='inReview'>Give us your thoughts:</label>
            <input id="inReview" type="text" placeholder='Thoughts?'></input>
            <br></br>
            <button className='btn btn-info btn-sm mt-2 ms-5'>Submit</button>
        </div>
    )
}

export default Review;