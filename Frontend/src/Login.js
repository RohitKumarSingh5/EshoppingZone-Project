import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link, withRouter } from "react-router-dom";
import AuthService from "./Services/auth.service";
import './login.css';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("user-info")) {
      this.props.history.push("/");
      window.location.reload();
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/Home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
     <div class="form_bg ">
        {/* <Link to="/">
         <div class="form_icon">
                  <i class="fa fa-user-circle"></i>
                </div>
        </Link> */}
        <div className="login__container">
          <h1>Login Here</h1>
          <Form
            autocomplete="off"
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
                 <div class ="form-group">
              <span class = "input-icon "><i class ="fa fa-user icon"></i></span>
               <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>
          

             <div class ="form-group">
              <span class ="input-icon"><i class= "fa fa-lock"></i></span>
                <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
          

            <div className="button">
              <button
                className="login__signInButton "
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
          <p>By signing-in you agree to our terms and services</p>
          <p>Don't have an Account?</p>
          <div className="button">
            <Link to="/signup">
              <button className="login__registerButton">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
