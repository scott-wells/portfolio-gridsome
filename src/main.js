// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),

  // Google Font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800,900'
  }),

  // Font Awesome
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
    integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
    crossorigin: 'anonymous'
  }),

  // Bootstrap 4
  head.link.push({
    rel: 'stylesheet',
    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T',
    crossorigin: 'anonymous'
  })
}
