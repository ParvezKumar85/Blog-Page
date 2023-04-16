import React, { useEffect, useState } from 'react'
import { collection, query, getDocs, where, onSnapshot, collectionGroup } from "firebase/firestore";
import { db } from '../../config/firebase'; import "./card.css"
import { useNavigate } from "react-router-dom"
const Card = (props) => {
  const navigate = useNavigate("")
  const [Users, setUsers] = useState("")
  const [Loader, setLoader] = useState(true)

  const b = query(collection(db, "users"), where("uid", "==", props.uid));
  const c = getDocs(b);
  const d = onSnapshot(b, (c) => {
    const users = [];
    c.forEach((doc) => {
      users.push(doc.data());
      setLoader(false)
      for (var i = 0; i < users.length; i++) {
        setUsers(users[i])
      }
    });
  })

  return (
    <>
      <div class="card text-start col-lg-4 col-md-6 col-12">
        <img class="card-img-top" src={props.img} alt="Title" onClick={()=>navigate(`/PostDetails/${props.id}`) } />
        <div class="card-body">
          <h4 class="card-title">{props.title}</h4>
          <p class="card-text">{props.des}</p>
        </div>
        <div className='card-footer'>
          <img src={Users.Profile} className='profile-img' height="50" />
          <div>
            <h6>{Users.FullName}</h6>
            <p>{props.date}</p>
          </div>
        </div>
      </div>    </>
  )
}

export default Card



