import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store'

export default function Dashboard() {

    const user = useStore(state => state.user)
    console.log(user);
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Logout</Link>
            </div>
            <h1>Dashboard</h1>
            <p>Token: {user.token}</p>
        </div>
    )
}
