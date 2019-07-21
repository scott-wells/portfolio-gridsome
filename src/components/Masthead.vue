<template>
<!--Masthead-->
		<section id="top" class="masthead">
				<div class="container-fluid d-flex align-items-center">
					<div class="row col d-flex justify-content-center text-center mx-auto">
						<div class="col">
							<p class="title">SCOTT WELLS</p>
							<p class="subtitle mb-4 mb-md-5">Developer + Designer</p>
							<p class="bold-it mb-1"><a href="#work">SCROLL DOWN</a></p>
							<i class="fas fa-caret-down"></i>
						</div>
					</div>
				</div>
		</section>
</template>

<script>
export default {
    name: "Masthead"
}
</script>

<style>
/* MASTHEAD */
.masthead .container-fluid {
	height: 100vh;
	background:
		linear-gradient(
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2)
		),
		url('https://res.cloudinary.com/abq-trails/image/upload/v1563667097/scott-wells/img/masthead-sm-01.jpg');
	background-attachment: scroll;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.masthead .container-fluid .title {
	color: white;
	font-size: 2.4rem;
	font-weight: 800;
	letter-spacing: .1rem;
	margin-bottom: -.5rem;
}

.masthead .container-fluid .subtitle {
	color: white;
	font-size: 1.1rem;
	font-weight: 200;
	letter-spacing: .3rem;
}

.masthead .container-fluid p a {
	color: white;
	text-decoration: none;
	font-size: .8rem;
	letter-spacing: .1rem;
}

.masthead .container-fluid i {
	color: white;
	opacity: .8;
}

/* Media Queries */

@media (min-width: 768px) {

	.masthead .container-fluid {
		background: linear-gradient(
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3)
		),
		url('https://res.cloudinary.com/abq-trails/image/upload/v1563667103/scott-wells/img/masthead-lg-02.jpg');
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

	}

	.masthead .container-fluid .row {
		transform: translateY(5vh);
	}

	.masthead .container-fluid .title {
		font-size: 4rem;
		margin-bottom: -1rem;
	}

	.masthead .container-fluid .subtitle {
		font-size: 1.8rem;
		letter-spacing: .5rem;
	}

	.masthead .container-fluid p a {
		font-size: 1.2rem;
	}

	.masthead .container-fluid i {
		font-size: 1.2rem;
	}

}
</style>
