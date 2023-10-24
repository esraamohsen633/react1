import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container text-center my-5">
            <h4>Sarahah allows you to receive constructive feedback from your friends and co-workers</h4>
            <div className="buttons d-flex justify-content-center align-items-center  flex-column">
                <Link to="/login" className="btn btn-outline-dark my-4"><i className="fa fa-user"></i> Login</Link>
                <Link to="/register" className="btn btn-outline-dark"><i className="fa fa-edit"></i> Register</Link>
            </div>
        </div>
    )
}
