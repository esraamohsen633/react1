import React from 'react'
import logo from '../../Images/logo300.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { TokenContext } from '../../Context/token'
export default function Header() {
    let { token, setToken } = useContext(TokenContext)
    let navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("userToken");
        setToken(null);
        navigate("/login");
    }


    return (
        <nav className="navbar navbar-expand-lg bg-custom navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="home">
                    <img src={logo} width="54" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        {token ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="user"><i className="fa fa-user" /> Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-light rounded-pill" onClick={logOut}><i className="fa fa-arrow-right"></i> Logout</button>
                                </li>
                            </>
                            : <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="login">Login</Link>
                                </li></>
                        }


                    </ul>

                </div>
            </div>
        </nav>
    )
}
