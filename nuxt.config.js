const webpack = require('webpack')

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pay Bay Invest',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi' , name:"viewport", content:"width=device-width"},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/uikit@3.15.11/dist/css/uikit.min.css' , name:"viewport", content:"width=device-width"},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css' , },
      { rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/fontawesome.min.css"}
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/uikit@3.15.11/dist/js/uikit.min.js ",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js ", 
      },
      {
         src: "js/vendor/jquery-1.12.4.min.js"
      }
    ]
  },
  generate: {
    fallback: true
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: false },
    {src:"~/plugins/element-ui.js",ssr: false },
    { src: '~/plugins/jquery.min.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  router: {
    middleware: ['auth']
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
        ]
      }
    ]
  ],
  axios: {
    baseURL: "https://paybay-6ipm.onrender.com/api/",
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    //   'Access-Control-Allow-Credentials': 'true'
    // }
  },
  auth: {
    strategies: {
      cookie: {
        cookie: {
          // (optional) If set, we check this cookie existence for loggedIn check
          name: 'XSRF-TOKEN',
        },
        endpoints: {
          // (optional) If set, we send a get request to this endpoint before login
          csrf: {
            url: ''
          }
        }},
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'token'
        },
        user: {
          property: '',
          autoFetch: true,
          global: true,
        },
        
        endpoints: {
          login: { url: '/login/', method: 'post', propertyName:"token"  },
          logout: { url: '/logout/', method: 'post' },
          user: { url: '/user/', method: 'get'  },
        },
        
        
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
