<template>
    <section class="graphic-01">
        <h1>Passionate about developing useful, engaging applications that serve the <em><strong>common good.</strong></em></h1>
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
.graphic-01 {
	background: #FAFAFA;
	height: 35vh;
}

.graphic-01 h1 {
	font-size: 1.3rem;
	font-weight: 400;
	background: rgb(40,46,42);
	background: linear-gradient(90deg, rgba(40,46,42,1) 0%, rgba(39,54,47,1) 10%, rgba(50,119,88,1) 100%);
	background-clip: border-box;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
