const SignIn = (props) => {
  const handleSignInClick = (evnt) => {
    const formElem = document.getElementById("login-form");

    // select input fields of signin form and read their values
    const username = formElem.querySelector("#username").value;
    const password = formElem.querySelector("#password").value;

    if (!username || !password) {
      document.querySelector("#err").innerHTML = "Username/Password required";
      return;
    }
    // clear error message if any
    document.querySelector("#err").innerHTML = "";

    // call Backend API user create API
    fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          document.querySelector("#err").innerHTML = data.error;
        } else {
          props.loginUser(data.data);
        }
      })
      .catch((err) => {
        //  display error
        document.querySelector("#err").innerHTML = err.message;
        console.error(err);
      });
  };
  return (
    <div className="sign_in_sec current" id="tab-1">
      <h3>Sign in</h3>
      <form id="login-form">
        <div className="row">
          <div className="col-lg-6">
            <div className="sn-field">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <i className="la la-user"></i>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sn-field">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <i className="la la-lock"></i>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="checky-sec">
              <div className="fgt-sec">
                <input type="checkbox" name="cc" id="c1" />
                <label htmlFor="c1">
                  <span></span>
                </label>
                <small>Remember me</small>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <button type="button" value="submit" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
