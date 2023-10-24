import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import avatar from '../../Images/avatar.png'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import jwtDecode from 'jwt-decode'

export default function Messages() {
  const [userName, setUserName] = useState("")
  function getUserName() {
    let decoded = jwtDecode(localStorage.getItem("userToken"))
    setUserName(decoded.name)
  }
  let x = useParams()
  async function addMsg(values) {
    let data = {
      ...values,
      receivedId: x.userID
    }

    let res = await axios.post('https://sara7aiti.onrender.com/api/v1/message', data)
  }

  const validationSchema = Yup.object({
    messageContent: Yup.string().required("Message is required").min(8, "The massage must contain at least 8 characters")
  })

  let formik = useFormik({
    initialValues: {
      messageContent: ""
    }, validationSchema,
    onSubmit: (values) => {
      addMsg(values)
    }

  })
  useEffect(() => {
    getUserName()
  }, [])


  return (
    <>
      <div className="container text-center py-5 my-5 text-center">
        <div className="card py-5 mb-5">
          <a href=''>
            <img src={avatar} className="avatar" alt="Avatar" />
          </a>
          <h3 className="py-2">{userName}</h3>
          <div className="container w-50 m-auto">
            <form onSubmit={formik.handleSubmit}>
              <textarea className="form-control" name="messageContent" value={formik.values.messageContent} onChange={formik.handleChange} cols="10" rows="9" placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)"></textarea>
              {formik.errors.messageContent && formik.touched.messageContent ? <div className='alert alert-danger'>
                {formik.errors.messageContent}
              </div> : ""}
              <button className="btn btn-outline-info mt-3"><i className="fa fa-paper-plane"></i> Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
