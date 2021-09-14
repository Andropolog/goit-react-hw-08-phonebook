import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../redux/auth/auth.operations";
import styles from "./Views.Module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.regist}>
        <h1 className={styles.registTitle}>Страница регистрации</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
          <lable className={styles.registLable}>
            <p className={styles.registrP}>Имя пользователя</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </lable>
          <lable className={styles.registLable}>
            <p className={styles.registrP}>Почта</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </lable>
          <lable className={styles.registLable}>
            <p className={styles.registrP}>Пароль</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </lable>
          <button type="submit" className={styles.registLButton}>
            {this.props.location.pathname === "/registration"
              ? "REGISTER"
              : "LOGIN"}
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);