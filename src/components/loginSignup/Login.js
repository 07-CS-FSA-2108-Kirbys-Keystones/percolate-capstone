import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { authenticate } from "../../store";
// import 'simplebar/dist/simplebar.min.css'
const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.accessToken);
  const auth = useSelector((state) => state.auth);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    await dispatch(authenticate(username, password));
  };

  return (
    <div className='login'>
      {isLoggedIn ? (
        <Redirect to={`users/${auth.uid}`} />
      ) : (
        <div className='loginbodyBox'>
          <div className='loginbody'>
            <div>
              <h1>Log In to Energize Your Day</h1>
            </div>
            {auth.error ? (
              <label className='errorLogin'>{`Oops Something went wrong! Try it again!`}</label>
            ) : (
              ""
            )}
            <form className='form' onSubmit={handleSubmit}>
              <div className='emailBox'>
                <input
                  className='email'
                  name='username'
                  type='text'
                  placeholder='Email'
                />
              </div>
              <div className='emailBox'>
                <input
                  className='email'
                  name='password'
                  placeholder='Password'
                  type='password'
                />
              </div>
              <div className='emailBox'>
                <button className='signin' name='button1'>
                  Log In
                </button>
              </div>
              <Link className='emailBox' to='/signup'>
                <button className='signup'>Create your account</button>
              </Link>
            </form>
          </div>
          <h1 className='welcome'>Welcome to Percolate</h1>
        </div>
      )}
      <div className='bottomBar'>
        <div id='bottomText'>The home to all your coffee life.</div>
      </div>
    </div>
  );
};
export default LoginPage;
