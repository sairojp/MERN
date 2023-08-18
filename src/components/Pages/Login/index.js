import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CompanyInfo from "./CompanyInfo";

const Login = (props) => {
    return (
      <div className="sign-in-page" style={{ background: "cornflowerblue" }}>
        <div className="signin-popup">
          <div className="signin-pop">
            <div className="row">
              <div className="col-lg-5">
                <CompanyInfo/>
              </div>
              <div className="col-lg-7">
                <div className="login-sec">
                  <ul className="sign-control">
                    <li data-tab="tab-1" className="current">
                      <a href="./#" title="">
                        Sign in
                      </a>
                    </li>
                    <li data-tab="tab-2">
                      <a href="./#" title="">
                        Sign up
                      </a>
                    </li>
                  </ul>
                  <SignIn loginUser={props.loginUser}/>
                  <SignUp />
                  <div id="err"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footy-sec">
          <div className="container">
            <ul>
              <li>
                <a href="./#" title="">
                  Help Center
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  About
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Career
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Forum
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Language
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Copyright Policy
                </a>
              </li>
            </ul>
            <p>
              <img src="images/copy-icon.png" alt="" />
              Copyright 2019
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Login;
