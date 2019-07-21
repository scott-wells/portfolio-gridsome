<template>
    <section class="masthead">
		<div class="logo">
			<p class="title">SCOTT WELLS</p>
			<p class="subtitle">Developer + Designer</p>
			<p class="bold-it"><a href="#work">SCROLL DOWN</a></p>
			<i class="fas fa-caret-down"></i>
		</div>
    </section>
</template>

<script>
export default {
    name: "Masthead"
}
</script>

<style>
.masthead {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
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

.logo {
	text-align: center;
}

.title {
	color: white;
	font-size: 2.4rem;
	font-weight: 800;
	letter-spacing: .1rem;
	margin-bottom: -.5rem;
}

.subtitle {
	color: white;
	font-size: 1.1rem;
	font-weight: 200;
	letter-spacing: .3rem;
}

p a {
	color: white;
	text-decoration: none;
	font-size: .8rem;
	letter-spacing: .1rem;
}

.masthead {
	color: white;
	opacity: .8;
}
</style>
