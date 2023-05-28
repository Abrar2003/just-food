import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <Link to="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img style={{width:"50px", borderRadius: "25px"}} src="just-food-logo.png" alt="" />
      </Link>
      <span class="mb-3 mb-md-0 text-muted">© 2023 JustFOOD, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className='m-3'><img style={{width:"50px", borderRadius: "25px"}} src="twitter.png" alt="twitter" /></li>
      <li className='m-3'><img style={{width:"50px", borderRadius: "25px"}} src="facebook.png" alt="facebook" /></li>
      <li className='m-3'><img style={{width:"50px", borderRadius: "25px"}} src="instagram.png" alt="instagram" /></li>
    </ul>
  </footer>
  )
}

export default Footer