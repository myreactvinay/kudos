import React from "react";

class Login extends React.Component {
  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if (username === password && username !== "" && password !== "") {
      localStorage.setItem("userN", username);
      this.props.history.push(`/kudos/home:${username}`);
      window.location.reload(true);
    } else {
      alert("Please use same word for both username and password");
    }
  }
  render() {
    return (
      <div className="d-flex justify-content-center my-5 py-5">
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3 className="mb-4">Sign in</h3>
          <input
            type="text"
            ref="username"
            className="form-control mb-4"
            placeholder="enter you username"
          />
          <input
            type="password"
            ref="password"
            className="form-control mb-4"
            placeholder="enter password"
          />
          <input
            type="submit"
            value="Login"
            className="btn btn-lg btn-primary btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Login;
