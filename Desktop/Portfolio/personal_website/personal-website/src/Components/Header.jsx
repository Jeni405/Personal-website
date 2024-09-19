import React from 'react'

const Header = () => {
  return (
    <header class="bg-indigo-500">
    <div class="dp">
            <img src="assets\img\Jenisha.jpg" alt="" class="img-fluid"/>
        </div>

        <a href="index.html" class="logo">
            <h1 class="sitename">Jenisha</h1>
        </a>

        <div class="social-links">
            <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="github"><i class="fa-brands fa-github"></i></a>
        </div>

        <nav id="navmenu" class="navmenu">
            <ul>
                <li><a href="#hero" class="active" ><i class="fa-solid fa-house"></i> Home</a></li>
                <li><a href="#about"><i class="fa-solid fa-user"></i> About</a></li>
                <li><a href="#resume"><i class="fa-solid fa-file"></i> Resume</a></li>
                <li><a href="#services"><i class="fa-solid fa-briefcase"></i> Services</a></li>
                <li><a href="#contact"><i class="fa-solid fa-envelope"></i> Contact</a></li>
            </ul>
        </nav>

    </header>
  )
}

export default Header