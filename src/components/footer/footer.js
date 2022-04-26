import React from "react"
import Image from "../images/images"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer class="container py-5">
      <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">
          &copy; 2022 Banasthali Vidyapith, BTech EE Project.
        </p>

        <a
          href="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <Image
            style={{
              height: "50px",
              width: "50px",
            }}
            filename="bvlogo.jpg"
            alt="1"
          />
        </a>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <Link class="nav-link px-2 text-muted" to="/">
              HOME
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link px-2 text-muted" to="/about">
              ABOUT
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link px-2 text-muted" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
