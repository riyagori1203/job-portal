import React from 'react'
import { Container } from 'react-bootstrap'
import './Register.css'

export default function Register() {
    return (
        <div class="login-wrap">
        <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign up</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"></label>
            <div class="login-form">
                <div class="sign-in-htm">
                    <div class="group">
                        <label for="user" class="label">First Name</label>
                        <input id="user" type="text" class="input"/>
                    </div>
                    <div class="group">
                        <label for="user" class="label">Last Name</label>
                        <input id="user" type="text" class="input"/>
                    </div>
                    <div class="group">
                        <label for="user" class="label">Age</label>
                        <input id="user" type="text" class="input"/>
                    </div>
                    <div class="group">
                        <label for="user" class="label">Email</label>
                        <input id="user" type="text" class="input"/>
                    </div>
                    <div class="group">
                        <label for="user" class="label">User Name</label>
                        <input id="user" type="text" class="input"/>
                    </div>
                    <div class="group">
                        <label for="pass" class="label">Password</label>
                        <input id="pass" type="password" class="input" data-type="password"/>
                    </div>
                    <div class="group">
                        <label for="pass" class="label">*Confirm Password</label>
                        <input id="pass" type="password" class="input" data-type="password"/>
                    </div>
                    <div class="group">
                        <input id="check" type="checkbox" class="check" checked/>
                        <label for="check"><span class="icon"></span> Keep me Signed in</label>
                    </div>
                    <div class="group">
                        <input type="submit" class="button" value=" Sign up"/>
                    </div>
                   
                </div>
                
            </div>
        </div>
    </div>
    )
}
