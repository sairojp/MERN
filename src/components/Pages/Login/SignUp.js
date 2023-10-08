import { USER_API } from "../../../config";

const SignUp = ()=>{

  const handleSignUpClick= (evnt)=> {
    // get SignForm HTML Element from form ID
    const formElem = document.getElementById("signup-form");

    // select input fields of signup form and read their values
    const username = formElem.querySelector("#signin-username").value;
    const email = formElem.querySelector("#email").value;
    const fullname = formElem.querySelector("#fullname").value;
    const address = formElem.querySelector("#address").value;
    const title = formElem.querySelector("#title").value;
    const job_type = formElem.querySelector("#job_type").value;
    const skills = formElem.querySelector("#skills").value.split(","); // change to array
    const password = formElem.querySelector("#signin-password").value;
    const rpassword = formElem.querySelector("#repeat-password").value;

    // if password does not match do nothing
    if (password !== rpassword) {
      alert("Password does not match");
      return;
    }

    // clear error message if any
    document.querySelector("#err").innerHTML = "";

    // call Backend API to create user
    fetch(USER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        address,
        title,
        skills,
        job_type,
        fullname,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          document.querySelector("#err").innerHTML = data.error;
        } else {
          document.querySelector("#err").innerHTML = "Signup Successfully";
          // reload page after 1 second
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        //  display error
        document.querySelector("#err").innerHTML = err.message;
        console.error(err);
      });
  }

  return (
    <div className="sign_in_sec" id="tab-2">
                    <h3>Sign up</h3>
                    <form id="signup-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input type="text" name="username" id="signin-username" placeholder="Username" />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input type="email" name="email" id="email" placeholder="Email" />
                            <i className="la la-envelope"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input type="text" name="title" id="title" placeholder="Title" />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <select name="job_type" id="job_type">
                              <option>Job Type</option>
                              <option value="Part Time">Part Time</option>
                              <option value="Full Time">Full Time</option>
                            </select>
                            <i className="la la-task"></i>
                            <span>
                              <i className="fa fa-ellipsis-h"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input type="text" name="skills" id="skills" placeholder="Skills (comma separated)" />
                            <i className="la la-cogs"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="sn-field">
                            <input type="text" name="address" id="address" placeholder="Address" />
                            <i className="la la-globe"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input type="password" name="password" id="signin-password" placeholder="Password" />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input type="password" name="repeat-password" id="repeat-password" placeholder="Repeat Password" />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checky-sec st2">
                            <div className="fgt-sec">
                              <input type="checkbox" name="cc" id="c2" />
                              <label htmlFor="c2">
                                <span></span>
                              </label>
                              <small>Yes, I understand and agree to the LEC Terms &amp; Conditions.</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <button type="button" value="submit" onClick={handleSignUpClick}>
                            Get Started
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
  );
}
export default SignUp;