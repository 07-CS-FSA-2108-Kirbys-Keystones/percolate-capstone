import { ADD_REVIEW } from './reviewReducer';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';

// ------------------ Actions creators --------------------

export const _addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

// ------------------ Thunk creators -----------------------

export const addReview = (review) => {
  return async (dispatch) => {
    try {
      const response = await addDoc(collection(db, 'reviews'), review);
      dispatch(_addReview(response));
      console.log('add review response:', response);
    } catch (error) {
      console.log('Failed to add review');
      return;
    }
  };
};
