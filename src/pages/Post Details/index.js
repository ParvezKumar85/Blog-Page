import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, query, getDocs, getDoc, doc, where, onSnapshot } from "firebase/firestore";
import { Footer, Navbar } from "../../components";
import { db } from "../../config/firebase";

const PostDetails = () => {
    const params = useParams();
    const [Blog, setBlog] = useState([])
    const [Loader, setloader] = useState(true)
    const [uid, setuid] = useState()
    const [Users, setUsers] = useState("")


    useEffect(() => {
        const q = query(collection(db, "Posts"), where("id", "==", params.id));
        const querySnapshot = getDocs(q);
        const a = onSnapshot(q, (querySnapshot) => {
            const Blogs = [];
            querySnapshot.forEach((doc) => {
                Blogs.push(doc.data());
                setBlog(Blogs)
                setloader(false)
            });
        })
    }, [])
    return (
        <div>
            {Loader ? "Loading ..." :
                Blog.map((v, i) => {
                    if (v.Status === "Approved") {
                        const q = query(collection(db, "users"), where("uid", "==", v.Uid));
                        const querySnapshot = getDocs(q);
                        const a = onSnapshot(q, (querySnapshot) => {
                            const user = [];
                            querySnapshot.forEach((doc) => {
                                user.push(doc.data());
                                setUsers(user)
                            });
                        })
                        return (
                            <div>
                                <Navbar Page={v.Category} />
                                <div className="w-100 flex-al-ce-j-c ">
                                    <div className="bg-blue p-3 mt-4 mb-4">
                                        <img src={v.ImageUrl} className="img-post object-cover object-center " />
                                        <div className="category-div mt-3">
                                            <h3>Selected Category </h3>
                                            <h3>{v.Category}</h3>
                                        </div>
                                        {Users !== "" && <div className='card-footer bg-white rounded-2 mt-3 p-2'>
                                            <img src={Users[0].Profile} className='profile-img' height="50" />
                                            <div>
                                                <h5>{Users[0].FullName}</h5>
                                                <p>{v.Date}</p>
                                            </div>
                                        </div>}
                                        <div className="mt-3 title-des">
                                            <h1 className="title-des-title mb-2">{v.Title}</h1>
                                            <h3>{v.Description}</h3>
                                        </div>

                                    </div>
                                </div>
                                <Footer />
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default PostDetails