import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { About, AppDevelopment, Blog, Freelancing, Home, PostDetails, WebDevelopment, WordPress } from '../../pages'


const RouterNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/AppDevelopment' element={<AppDevelopment />} />
                <Route path='/WebDevelopment' element={<WebDevelopment />} />
                <Route path='/WordPress' element={<WordPress />} />
                <Route path='/Freelancing' element={<Freelancing />} />
                <Route path='/About' element={<About />} />
                <Route path='/PostDetails/:id' element={<PostDetails />} />
          
            </Routes>
        </BrowserRouter>
    )
}
export default RouterNavigation