<template>
  <Layout>
    
    <Masthead />

    <GraphicBreak />

    <Projects />

    <GraphicBreak />
   
    <About />

    <Contact />

  </Layout>

</template>

<script>
import Masthead from '../components/Masthead.vue';
import GraphicBreak from '../components/GraphicBreak.vue';
import Projects from '../pages/Projects.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

export default {
  components: {
    Masthead,
    GraphicBreak,
    Projects,
    About,
    Contact
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
