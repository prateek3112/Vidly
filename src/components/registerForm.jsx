import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

export default class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password").min(5),

    name: Joi.string().required().label("Name"),
  };
  doSubmit = () => {
    debugger;
    console.log("submitted");

    // this.setState({data:{ username : "" , password : ""}});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}
