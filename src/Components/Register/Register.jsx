import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function Register() {

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState();
  let navigate = useNavigate()

  async function register(values) {
    setIsLoading(true)
    await axios.post(`https://sara7aiti.onrender.com/api/v1/user`, values).then((data) => {
      if (data.data.message == "Added") {
        setIsLoading(false)
        navigate("/login")
      }
    }).catch((err) => {
      setApiError(err.response.data.error)
      setIsLoading(false)
    })
  }

  const validationSchema = Yup.object({
    name: Yup.string().max(15, "Name must be less than 15 characters").min(3, "Name must be more than 3 characters").required("Name is required"),
    email: Yup.string().email("Please enter a valid email").required("Email is required, sample: teba7033@gmail.com"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{4,8}$/, "Please enter a valid password, must start with capital letter").min(8, "Password must be at least 8 characters").required("Password is required"),
    rePassword: Yup.string().oneOf([Yup.ref("password")], 'Passwords must match').required("Password Confirmation is required"),
    age: Yup.number().required("Age is required").positive().integer()
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      age: 0
    }, validationSchema,
    onSubmit: (values) => {
      register(values)
    }
  })
  return (
    <div className="container text-center my-5">
      <div className="user my-3">
        <h1><i className="fa fa-edit user-icon"></i></h1>
        <h4 className="login">Register</h4>
      </div>
      {apiError ? <div className='alert alert-danger'><i className="fa fa-exclamation"></i> {apiError}</div> : ""}
      <div className="card p-5 w-50 m-auto">
        <form onSubmit={formik.handleSubmit}>
          <input className="form-control" onBlur={formik.handleBlur} placeholder="Enter your Name" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
          {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>
            {formik.errors.name}
          </div> : ""}
          <input className="form-control my-2" onBlur={formik.handleBlur} placeholder="Enter your email" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>
            {formik.errors.email}
          </div> : ""}
          <input className="form-control my-2" onBlur={formik.handleBlur} placeholder="Enter your Age" type="number" name="age" value={formik.values.age} onChange={formik.handleChange} />
          {formik.errors.age && formik.touched.age ? <div className='alert alert-danger'>
            {formik.errors.age}
          </div> : ""}
          <input className="form-control my-2" onBlur={formik.handleBlur} placeholder="Enter your Password" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>
            {formik.errors.password}
          </div> : ""}
          <input className="form-control my-2" onBlur={formik.handleBlur} placeholder="Password Confirmation" type="password" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} />
          {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>
            {formik.errors.rePassword}
          </div> : ""}
          <button className="btn btn-dark my-4 w-25 rounded-pill" type='submit'>
            {isLoading ? <i className='fa fa-spin fa-spinner'></i> : <><i className='fa fa-edit'></i> Register </>}</button>
          <p>Already have an account! <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}
