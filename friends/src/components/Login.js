import React from "react";
import Loader from 'react-loader-spinner'
import { login } from "../actions";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleLogin = e => {
      e.preventDefault();
      this.props
        .login(this.state.credentials)
        .then(() => this.props.history.push('/protected'))
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        {this.props.loginError && <p>Error on login, try again</p>}
        <div onSubmit={this.handleLogin}>
            <form >
            <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
            />
            <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
            />
            <button>
            {this.props.fetchingFriends ? (
                <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                ) : (
                "Log in"
                )}
            </button>
            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      fetchingFriends: state.fetchingFriends,
        loginError: state.loginError
    }
}

export default connect(
    mapStateToProps,
    {login}
)(Login);
