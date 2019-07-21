<!-- This is the default templated layout that will wrap every page. Contains header (logo, nav) and footer. -->
<template> 
  <div class="layout">
    <!--Navigation-->
		<header>
			<nav class="navbar navbar-expand-lg navbar-light shadow-sm fixed-top font-weight-bold">
				<a class="navbar-brand" href="#top">SW</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#top">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#work">Work</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#design">Design</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#about">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</header> <!-- end of header -->

    <slot/> <!-- this is where the other content is inserted -->

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


/* HEADER */
.navbar {
	color: black;
	background: white;
}

.navbar .navbar-toggler {
	color: rgba(0,0,0,1);
	border: rgba(0,0,0,0);
}

.navbar-nav {
	color: black;
	font-weight: 200;
}

/* FOOTER */
footer {
	background-color: #2d2d2d;
	min-height: 30vh;
}

footer div div div p {
	color: white;
	font-size: 1.1rem;
}

footer div div div a,
footer div div div a:hover {
	color: white;
	font-size: .9rem;
	font-weight: 300;
}

footer div div div.social-icons a i {
	font-size: 30px;
}

footer div div div.copyright h1 {
	color: white;
	font-size: 1.4rem;
}

footer div div div.copyright p {
	font-size: .8rem;
}

</style>
