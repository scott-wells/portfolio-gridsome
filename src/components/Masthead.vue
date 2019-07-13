<template>
    <section id="top">
        <p class="title">SCOTT WELLS</p>
        <p class="subtitle">Developer + Designer</p>
        <p class="bold-it"><a href="#work">SCROLL DOWN</a></p>
        <i class="fas fa-caret-down"></i>
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
	background:
		linear-gradient(
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2)
		),
		url('../img/masthead-sm-01.jpg');
	background-attachment: scroll;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.masthead .title {
	color: white;
	font-size: 2.4rem;
	font-weight: 800;
	letter-spacing: .1rem;
	margin-bottom: -.5rem;
}

.masthead .subtitle {
	color: white;
	font-size: 1.1rem;
	font-weight: 200;
	letter-spacing: .3rem;
}

.masthead p a {
	color: white;
	text-decoration: none;
	font-size: .8rem;
	letter-spacing: .1rem;
}

.masthead i {
	color: white;
	opacity: .8;
}
</style>
