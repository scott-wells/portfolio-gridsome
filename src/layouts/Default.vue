<!-- This is the default templated layout that will wrap every page. Contains header (logo, nav) and footer. -->
<template> 
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">SW</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/projects">Projects</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
      </nav>
    </header> <!-- end of header -->
    <slot/>
    <footer>
      <div class="footer-links">
        <p class="bold-it d-block mb-1">Scott Wells</p>
        <a class="d-block" href="#top">Home</a>
        <a class="d-block" href="#work">Work</a>
        <a class="d-block" href="#design">Design</a>
        <a class="d-block" href="#about">About</a>
        <a class="d-block" href="#contact">Contact</a>
      </div>
      <div class="social-icons">
        <a class="p-3" href="https://github.com/scott-wells" target="_blank"><i class="fab fa-github"></i></a>
        <a class="p-3" href="https://www.instagram.com/scott.m.wells" target="_blank"><i class="fab fa-instagram"></i></a>
        <a class="p-3" href="https://www.linkedin.com/in/scott-wells-1a3119161/" target="_blank"><i class="fab fa-linkedin"></i></a>
      </div>
      <div class="copyright">
        <h1 class="mb-1">SCOTT WELLS</h1>
        <p class="bold-it">©2019 All rights reserved.</p>
      </div>
		</footer> <!-- end of footer -->
  </div>
</template>

<style>
.layout {
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 10px;
}

/* FONTS */
body,
h1,
h3,
h4,
h5,
h6,
p {
	font-family: 'Montserrat', sans-serif;
}

h1 {
	font-weight: 800;
	font-size: 2rem;
}

.bold-it {
	font-weight: 600;
}

p {
	font-size: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.nav {
	color: black;
	background: white;
}

.nav__link {
  font-weight: 300;
  margin-left: 20px;
}
</style>
