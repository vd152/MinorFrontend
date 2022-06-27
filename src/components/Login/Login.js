import React from "react";
import {Redirect} from "react-router-dom"
import "./login.css";
import api from "../../apis/api";
import { toast } from "react-toastify";
import { setAuthToken, setUser } from "../../utils/localStorage";

class Login extends React.Component {
  state = {
    login: true,
    name: "",
    email: "",
    password: "",
    dob: "",
    confirmPassword: "",
    redirect: false
  };
  register = () => {
    if (this.state.password !== this.state.confirmPassword) {
      toast.error("Passwords don't match.");
      return;
    }
    api
      .post("/user/register", {
        name: this.state.name,
        password: this.state.password,
        dob: this.state.dob,
        email: this.state.email,
      })
      .then((res) => {
        setAuthToken(res.data.user.token);
        setUser(res.data.user);
        toast("User registered. Logging you in..");
        this.setState({redirect: true})
      })
      .catch((err) => {
        toast.error(`${err.response?.data?.message}`);
      });
  };
  login = () => {
    api
      .post("/user/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        setAuthToken(res.data.user.token);
        setUser(res.data.user);
        toast("Logging you in..");
        this.setState({redirect: true})
        window.location.reload()
      })
      .catch((err) => {
        toast.error(`${err.response?.data?.message}`);
      });
  };
  render() {
      if(this.state.redirect) return <Redirect to="/"/>
    return (
      <div className="form-container">
        <div className="form">
          <h2>Login</h2>
          {this.state.login ? (
            <div className="input">
              <div className="inputBox">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="example@test.com"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="......."
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  value="Sign In"
                  onClick={(e) => {
                    e.preventDefault();
                    this.login();
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="input">
              <div className="inputBox">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="example test"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="example@test.com"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">D.O.B</label>
                <input
                  type="date"
                  value={this.state.dob}
                  onChange={(e) => {
                    this.setState({ dob: e.target.value });
                  }}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="......."
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  placeholder="......."
                  value={this.state.confirmPassword}
                  onChange={(e) => {
                    this.setState({ confirmPassword: e.target.value });
                  }}
                />
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  value="Sign Up"
                  onClick={(e) => {
                    e.preventDefault();
                    this.register();
                  }}
                />
              </div>
            </div>
          )}
          <p className="signup">
            {this.state.login ? "New here?" : "Already have an account?"}
            <button
              className="btn"
              onClick={(e) =>
                this.setState({
                  login: !this.state.login,
                  name: "",
                  email: "",
                  password: "",
                  dob: "",
                })
              }
            >
              {this.state.login ? "Sign Up!" : "Login!"}
            </button>
          </p>
        </div>
      </div>
    );
  }
}
export default Login;
