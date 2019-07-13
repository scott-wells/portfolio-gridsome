<template>
    <section id="work" class="coding">
        <img src="../img/coding-abq-lg.jpg" alt="design work abq trails app"/>
        <h1>ABQ Trails</h1>
        <p><span class="bold-it">An app that helps local residents</span> find popular hikes, or trails
            near their location, with the ability search, tag and rate them.</p>
        <p>New Mexico is known for it's stunning, natural landscapes, and Albuquerque is no exception.
            This app serves to help the community explore their neighborhoods, connect with friends, and
            encourage an active lifestyle.</p>
        <hr/>
        <img src="../img/coding-scottw-lg.jpg" alt="design work scott wells redesign"/>
        <h1>Scott Wells<br/> Portfolio Redesign</h1>
        <p><span class="bold-it">I have been a designer and photographer</span> for over ten years. Having
            recently become a developer, I needed to update my portfolio to reflect my new work.</p>
        <p>This site uses a Bootstrap framework for the content layout, and employs custom styling for the
            fonts, colors, and icons. Javascript is also used to give key content on the website some added flair.</p>
        <hr/>
        <a href="http://elizabethwellsphoto.com" target="_blank"><img  src="../img/coding-ewp-lg.jpg" alt="design work elizabeth wells photography"/></a>  
        <h1><a href="http://elizabethwellsphoto.com" target="_blank">Elizabeth Wells Photography</a></h1>
        <p><span class="bold-it">I was contracted to rebrand</span> and design a mobile-responsive
            website that could be easily updated, and remain content friendly. I chose to design it in
            Squarespace due to their emphasis on performance and visual design, which is perfect for a
            photography business.</p>
    </section>
</template>

<script>
export default {
    name: 'Projects',
    metaInfo: {
    title: 'Projects'
  }
}
</script>

<style>
    .coding {
        background: white;
    }

    .coding div div div div h1 a {
        color: black;
        text-decoration: none;
    }
</style>
