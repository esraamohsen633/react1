import React, {  useEffect } from 'react';
import img from '../../Images/avatar.png';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { getMsg } from '../../Redux/MessagesSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function User() {
  const decodedToken = jwtDecode(localStorage.getItem("userToken"));
  const userID = decodedToken.id;
  const userName = decodedToken.name;

  const dispatch = useDispatch();
  const allMsg = useSelector((state) => state.messages.messages) || [];
  const status = useSelector((state) => state.messages.status);
  console.log("allMsg:", allMsg);
  console.log("status:", status);
  useEffect(() => {
    dispatch(getMsg());
  }, [dispatch]);

  return (
    <>
      <div className="container text-center py-5 my-5 text-center">
        <div className="card pt-5">
          <a>
            <img src={img} className="avatar" alt="Avatar" />
          </a>
          <h3 className="py-2">Hi, {userName}</h3>
          <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark rounded-pill share">
            <i className="fa fa-share-alt" /> Share Profile
          </Link>
        </div>
      </div>

      <div className="container text-center my-5 text-center">
        <div className="row">
          {status === "loading" ? (
            <div className="col-md-12">
              <div className="card py-5">
                <p>Loading messages...</p>
              </div>
            </div>
          ) : status === "error" ? (
            <div className="col-md-12">
              <div className="card py-5">
                <p>Error loading messages.</p>
              </div>
            </div>
          ) : !Array.isArray(allMsg) || allMsg.length === 0 ? (
            <div className="col-md-12">
              <div className="card py-5">
                <p>You don't have any messages...</p>
              </div>
            </div>
          ) : (
            allMsg.map((ele) => (
              <div key={ele._id} className="col-md-12 mb-3">
                <div className="card py-5">
                  <p>{ele.messageContent}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Copy the URL to send a message</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {window.location.origin}/messages/{userID}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
