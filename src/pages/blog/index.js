import React, { useEffect, useState } from 'react'
import { collection, query, getDocs, where, onSnapshot, collectionGroup } from "firebase/firestore";
import { db } from '../../config/firebase';
import "./Blog.css"
import { Card } from '../../components';
const Blog = (props) => {
    const [Blog, setBlog] = useState("")
    const [loader, setloader] = useState(true)

    useEffect(() => {
        const q = query(collection(db, "Posts"), where("Status", "==", "Approved"));
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
            <section class="hero-section mt-5 mb-5">
                <div className="d-flex container blogcard">
                    {loader ? "Loading ..." :
                        Blog.map((v, i) => {
                            if (props.Home === "active") {
                                return (
                                    <Card id={v.id} date={v.Date} uid={v.Uid} key={i} img={v.ImageUrl} title={v.Title} des={v.Description} />
                                )
                            } else {
                                if (props.active === v.Category) {
                                    return (
                                        <Card id={v.id} date={v.Date} uid={v.Uid} key={i} img={v.ImageUrl} title={v.Title} des={v.Description} />
                                    )
                                }
                            }
                        })}
                </div>
            </section>
        </div>
    )
}

export default Blog