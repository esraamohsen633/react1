import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup' 
import axios from 'axios'
import { TokenContext } from '../../Context/token'

export default function Login() {
  let navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState();
  let {setToken} = useContext(TokenContext)
  async function login(values) {
    setIsLoading(true)
    await axios.post(`https://sara7aiti.onrender.com/api/v1/user/signin`, values).then((data) => {
    if (data.data.message == "welcome") {
        setIsLoading(false)
        localStorage.setItem("userToken",data.data.token)
        setToken(data.data.token)
        navigate("/user")
      }
    }).catch((err) => {
      setApiError(err.response.data.error)
      setIsLoading(false)
    })
  }
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required, sample: teba7033@gmail.com"),
    password: Yup.string().required("Password is required")
  })
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }, validationSchema,
    onSubmit: (values) => {
      login(values)
    }
  })
  return (
    <div className="container text-center my-5">
      <div className="user my-3">
        <h1><i className="fa fa-user-secret text-secondary"></i></h1>
        <h4 className="login">Login</h4>
      </div>
      {apiError ? <div className='alert alert-danger'><i className="fa fa-exclamation"></i> {apiError}</div> : ""}
      <div className="card p-5 w-50 m-auto">
        <form onSubmit={formik.handleSubmit}>
          <input className="form-control my-2" onBlur={formik.handleBlur} placeholder="Enter your email" type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>
            {formik.errors.email}
          </div> : ""}
          <input className="form-control my-2" onBlur={formik.handleBlur} placeholder="Enter your Password" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>
            {formik.errors.password}
          </div> : ""}
          <button className="btn btn-dark my-4 w-25 rounded-pill">
          {isLoading ? <i className='fa fa-spin fa-spinner'></i> : <><i className='fa fa-user'></i> Login </>}</button>
          {/* <Link className="text-muted forgot">I Forgot My Password</Link> */}
          <p>Don't have an account! <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  )
}
