import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFeedReviews } from "../../store/feed";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchLoginUser } from "../../store/auth";

class Feed extends Component {
  constructor() {
    super();
    this.state = { userId: null, following: null };
  }

  componentDidMount() {
    this.props.fetchUser();
    this.setState({following: this.props.loggedIn.following});
  }

  // componentDidUpdate(prevUser) {
  //   if (this.state.user !== prevUser.user) {
  //     this.props.fetchFeed(this.state.user.uid);
  //     console.log("sent user");
  //   }
  // }

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // this.props.fetchFeed(user.uid);
  //     this.setState({ user: auth.currentUser });
  //     console.log('inside')
  //   } else {
  //     console.log("not logged in");
  //   }
  //});

  render() {
    console.log("feed props", this.state.following);
    return (
      <div>
        <h1>this is the feed component!</h1>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    feed: state.feed,
    loggedIn: state.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    fetchFeed: (me) => dispatch(fetchFeedReviews(me)),
    fetchUser: () => dispatch(fetchLoginUser()),
  };
};
export default connect(mapState, mapDispatch)(Feed);