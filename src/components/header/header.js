import React,{useState, useEffect} from "react"
import Image from "../images/images"
import { Link } from "gatsby" //to avoid refreshing on each click
import {
  House,
  Person,
  Basket,
  CupStraw,
  Basket3,
  Pen,
  FileMedical, 
} from "react-bootstrap-icons"

const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  return (
    
     
     
     <div>
       
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="navbar-brand"></div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end mx-auto me-1">
                <Link to="/">
                  <button type="button" class="btn btn-secondary text-white">
                    Home
                    <House className="mx-auto" size="30" fill="#ffff" />
                  </button>
                </Link>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary ">
                  <Link to="/foodcorner" class="text-white text-decoration-none">
                    Food Corner
                    <CupStraw className="mx-auto" size="30" fill="#ffff" />
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/mukteshwari" class="text-decoration-none text-dark" >Mukteshwari</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/annapurna" class="text-decoration-none text-dark">Annapurna</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/spicybite" class="text-decoration-none text-dark">Spicy Bite</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/shanus" class="text-decoration-none text-dark">Shanus</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary ">
                  <Link to="/grocery" class="text-decoration-none text-white">
                    Grocery
                    <Basket3 className="mx-auto" size="30" fill="#ffff" />
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/agarwal" class="text-decoration-none text-dark">Agarwal General Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/shreeshakti" class="text-decoration-none text-dark">Shree Shakti General Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/rohit" class="text-decoration-none text-dark">Rohit Greens And Juice Point</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/mukteshwarigs" class="text-decoration-none text-dark">
                        Mukteshwari General Store
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/stationery" class="text-decoration-none text-white">
                    Stationary
                    <Pen className="mx-auto" size="30" fill="#ffff" />
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/bbc" class="text-decoration-none text-dark">Banasthali Book Center</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/dks" class="text-decoration-none text-dark">D. K. Stationary</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/pharmacy "class="text-decoration-none text-white">
                    Pharmacy
                    <FileMedical className="mx-auto" size="30" fill="#ffff" />
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/bhadauriyamed" class="text-decoration-none text-dark">Bhadauriya Medical Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/maheshmedicalstore" class="text-decoration-none text-dark">Mahesh Medical Store</Link>
                    </a>
                  </li>
                </ul>
              </div>

              {/* <li class="btn text-light text-decoration-none">
                <Link class="text-warning text-decoration-none" to="/blog">
                  Blog
                </Link>
              </li>{" "} */}
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div class="d-grid gap-2 d-md-flex justify-content-md-end me-1">
              <Link to="/signup">
                <button type="button" class="btn btn-secondary">
                  Sign Up{" "}
                  <Person className="mx-auto" size="30" fill="#ffff" />
                </button>
              </Link>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end me-1">
              <Link to="/login">
                <button type="button" class="btn btn-secondary">
                  Log In{" "}
                  <Person className="mx-auto" size="30" fill="#ffff" />
                </button>
              </Link>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" class="btn btn-secondary">
                CART <Basket className="mx-auto" size="30" fill="#ffff" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header