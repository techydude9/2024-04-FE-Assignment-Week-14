import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function Review({selectedMovie}) {
    console.log('in Review Component');

    function enterReview(e) {
        let newReview = document.getElementById('inReview').value;
        console.log(newReview);

        selectedMovie.reviews.push(newReview);
        console.log(selectedMovie);
    }

    return (
        <div id="movieReviewIn" >
            <form>
                <div className="form-group">
                    <label id="reviewInLbl" htmlFor='inReview'>Give us your thoughts:</label>
                    <input id="inReview" className="form-control" type="text" placeholder='Thoughts?'></input>
                </div>
                <br></br>
                <div className="form-group">
                    <button className='btn btn-info btn-sm ms-5' onClick={enterReview}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Review;