import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useStore } from "../../store";
import "./Register.css";

export default function Register() {
  const apiUrl = useStore((state) => state.apiUrl);
  const setToken = useStore((state) => state.setToken)
  const setUsernameInStore = useStore((state) => state.setUsernameInStore)

  const history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const updateEmail = (event) => setEmail(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);
  const updateUsername = (event) => setUsername(event.target.value);

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: apiUrl + "/signup",
      data: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
        console.log(res);
        const token = res.data.token
        setToken(token)
        setUsernameInStore(username)
        history.push("/dashboard")
    })
  };

  return (
    <div class="login-wrap">
      <div class="login-html">
        <div>
          <Link to="/">Back to Home</Link>
        </div>
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
        <label for="tab-1" class="tab">
          Sign up
        </label>
        <input id="tab-2" type="radio" name="tab" class="sign-up" />
        <label for="tab-2" class="tab"></label>
        <div class="login-form">
          <form onSubmit={submit} class="sign-in-htm">
            <div class="group">
              <label for="email" class="label">
                Email
              </label>
              <input
                value={email}
                onChange={updateEmail}
                id="email"
                type="email"
                class="input"
                required
              />
            </div>

            <div class="group">
              <label for="username" class="label">
                Username
              </label>
              <input
                value={username}
                onChange={updateUsername}
                id="username"
                type="text"
                class="input"
                required
              />
            </div>

            <div class="group">
              <label for="pass" class="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
                value={password}
                onChange={updatePassword}
                required
              />
            </div>

            <div class="group">
              <input type="submit" class="button" value=" Sign up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
