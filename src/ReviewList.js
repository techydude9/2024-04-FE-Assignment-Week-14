import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Review from './Review';
import ReviewForm from './ReviewForm';


function ReviewList(movie) {
    console.log('in ReviewList Component');

    return (
        <div className='card2'>
            <p className='card-title2'>Leave a Review</p>
            <div className='card-body2'>
                 <Review props={movie}/>
            </div>
            <div>
                <ReviewForm props={movie}/>
            </div>
        </div>
    )
}

export default ReviewList;
