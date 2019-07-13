<template>
  <Layout>
    <section id="contact" class="contact">
        <form id="contact-form" action="php/index.php" method="post">
            <h1>CONTACT</h1>
            <input type="text" id="firstname" name="firstname" placeholder="First Name*">
            <input type="email" id="email" name="email" placeholder="Email*">
            <input type="text" id="subject" name="subject" placeholder="Subject*">
            <label for="message">How Can I Help You?</label>
            <textarea id="message" name="message" rows="5" placeholder="I need help with..."></textarea>

            <!-- reCAPTCHA -->
            <div class="g-recaptcha" data-sitekey="6LfxJJQUAAAAAOMpbc9mlFfiYpqoOubedNCnnakJ"></div>
            <button type="submit">Submit</button>
        </form>

        <!-- empty area for form error/success output -->
        <div id="output-area"></div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  },
  name: 'Contact'
}
</script>
