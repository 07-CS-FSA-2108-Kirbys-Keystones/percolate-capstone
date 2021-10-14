/*eslint jsx-quotes: ["error", "prefer-single"]*/
import React from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../store/reviewActions';

class AddReview extends React.Component {
  constructor() {
    super();
    this.errors = [];
    this.state = {
      businessId: '',
      coffeeId: '',
      rating: 0.0,
      reviewContent: '',
      userId: '',
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {}

  handleSubmit(event) {
    const { ...review } = this.state;
    event.preventDefault();
    let newReview = {
      businessId: review.businessId ? review.businessId : null,
      coffeeId: review.coffeeId ? review.coffeeId : null,
      likeCount: 0,
      rating: review.rating,
      reviewContent: review.reviewContent,
      userId: review.userId ? review.userId : null,
      username: review.username ? review.username : null,
    };
    console.log(newReview);
    console.log(this.props);
    console.log(addReview);
    this.props.addR(newReview);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form
        id='form_review_new'
        className='form-review-new'
        onSubmit={this.handleSubmit}
      >
        <div className='form-input-submit-group'>
          {this.state.error ? (
            <ul className='error-label'>
              {this.error.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          ) : null}
          <label htmlFor='rating'>Rating</label>
          <input
            className='form-text-box'
            type='number'
            name='rating'
            placeholder={0.0}
            min='0'
            max='5'
            onChange={this.handleChange}
          />
          <label htmlFor='reviewContent'>Review Comments</label>
          <input
            className='form-text-box'
            type='text'
            name='reviewContent'
            placeholder='Your comment here...'
            onChange={this.handleChange}
          />
          <button className='review-submit-button' type='submit'>
            Submit Review
          </button>
        </div>
      </form>
    );
  }
}

const mapState = () => ({});
const mapDispatch = (dispatch) => ({
  addR: (review) => dispatch(addReview(review)),
});

export default connect(mapState, mapDispatch)(AddReview);
