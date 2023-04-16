import React from 'react'

const Footer = () => {
  return (
    <footer class="bdmain py-5 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>About Us</h5>
            <p>We are a team of writers passionate about sharing our thoughts and experiences on a variety of topics.</p>
          </div>
          <div class="col-md-3">
            <h5>Categories</h5>
            <ul class="list-unstyled">
              <li><a>Web Development</a></li>
              <li><a>App Development</a></li>
              <li><a>WordPress</a></li>
              <li><a>Freelancing</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Follow Us</h5>
            <ul class="list-unstyled">
              <li><a>Facebook</a></li>
              <li><a>Twitter</a></li>
              <li><a>Instagram</a></li>
              <li><a>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12 text-center">
            <p>&copy; 2023 YourBlogName. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer