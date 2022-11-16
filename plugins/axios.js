// export default function ({ store, app: { $axios }, redirect }) {
//     $axios.onRequest((config) => {
//       // check if the user is authenticated
//       const token = localStorage.getItem('token')
//       if (token) {
//         // set the Authorization header using the access token
//         config.headers.common['Authorization'] =` ${token}`

//         console.log(config)
//         console.log(token)
        
//       } else {
//         alert("no token")
//       }
  
//       return config
//     })
//   }
// export default function ({ $axios }) {
//   // $axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
//   // $axios.defaults.xsrfCookieName = 'csrftoken'
//   alert('axios')
// }
export default function({ $axios, app }) {
  // This is a nuxt specific instance config, this will work in
  // everyplace where nuxt inject axios, like Vue components, and store
  $axios.defaults.xsrfHeaderName = "x-csrf-token";
  $axios.defaults.xsrfCookieName = "csrf_refresh_token";

  // on request set header
  // this is being set on .refreshTokens() manually
  $axios.onRequest(config => {
    // not being set for some reason
    $axios.defaults.xsrfHeaderName = "x-csrf-token";
  $axios.defaults.xsrfCookieName = "csrf_refresh_token";
  console.log(config)
  });
}
// alert("axios")
