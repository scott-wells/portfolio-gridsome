<template>
    <!--Graphic Break-->
		<section class="graphic-01 d-flex align-items-center"> <!--white background, text has a gradient-->
			<div class="container-fluid">
				<div class="row d-flex justify-content-center text-center mx-auto">
					<div class="col col-md-8">
						<h1>Passionate about developing useful, engaging applications that serve the <em><strong>common good.</strong></em></h1>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
export default {
    name: 'GraphicBreak',
    props: {
        msg: String
    }
}
</script>

<style>
/* GRAPHIC BREAK */
.graphic-01,
.graphic-02 {
	background: #FAFAFA;
	height: 35vh;
}

.graphic-01 div div div h1,
.graphic-02 div div div h1{
	font-size: 1.3rem;
	font-weight: 400;
	background: rgb(40,46,42);
	background: linear-gradient(90deg, rgba(40,46,42,1) 0%, rgba(39,54,47,1) 10%, rgba(50,119,88,1) 100%);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}

/* Media Queries */

@media (min-width: 768px) {

	.graphic-01,
	.graphic-02 {
		height: 50vh;
	}

	.graphic-01 div div div h1,
	.graphic-02 div div div h1 {
		font-size: 2.5rem;
	}

}
</style>
