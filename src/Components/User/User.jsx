import React from 'react'
import avatar from '../../Images/avatar.png'

export default function User() {
  return (
    <div className="container text-center py-5 my-5 text-center">
        <div className="card py-5 mb-5">
            <a href="" data-toggle="modal" data-target="#profile">
                <img src={avatar} className="avatar" alt=""/>
            </a>
            <h3 className="py-2">Esraa mohsen</h3>
            <div className="container w-50 m-auto">
                <form action="" method="post">
                    <textarea className="form-control" name="" id="" cols="10" rows="9" placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)"></textarea>
                    <button className="btn btn-outline-secondary mt-3"><i className="fa fa-paper-plane"></i> Send</button>
                </form>
            </div>
        </div>
        <button data-toggle="modal" data-target="#share" className="btn btn-dark share "><i className="fa fa-share-alt"></i>  Share </button>
        </div>
  )
}
