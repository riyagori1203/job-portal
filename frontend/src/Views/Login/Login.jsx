import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStore } from "../../store";
import axios from "axios";

import "./Login.css";

export default function Login() {
  const history = useHistory()

  const apiUrl = useStore((state) => state.apiUrl);
  const setToken = useStore((state) => state.setToken)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (event) => setEmail(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: apiUrl + "/login",
      data: JSON.stringify({
        email: email,
        password: password
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        if(res.status != 200){
          alert("Error while logining in. Check the console for more information")
          console.log(`Error ${res.status}: `);
          console.log(res.data.error);
          return;
        }
        //If successful. Set token. Get user data and push dashboard route
        setToken(res.data.token) //SET TOKEN IS NOT WORKING RN
        history.push('/dashboard')
      })

  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <div>
          <Link to="/">Back to Home</Link>
        </div>
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          onChange={(e) => console.log(e)}
          checked
        />
        <label htmlFor="tab-1" className="tab">
          Login
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab"></label>
        <div className="login-form">
          <form onSubmit={submit} className="sign-in-htm">
            <div className="group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={updateEmail}
                type="email"
                className="input"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                value={password}
                onChange={updatePassword}
                type="password"
                className="input"
                data-type="password"
                minLength="6"
                required
              />
            </div>
            {/* <div className="group">
              <input id="check" type="checkbox" className="check" checked />
              <label htmlFor="check">
                <span className="icon"></span> Keep me Signed in
              </label>
            </div> */}
            <div className="group">
              <input type="submit" className="button" value="Log In" />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </form>

          {/* <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input id="email" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Repeat Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Email Address
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <label htmlFor="tab-1">Already Member?</label>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
