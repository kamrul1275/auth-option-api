export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',






      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          
        }
      ],


      script:[

        {
        src: "https://code.jquery.com/jquery-3.7.1.min.js",
        type:'text/javascript'

        },

          {
            src:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
            type:'text/javascript'
          }

      ],
   


    },


  },


  modules: [
    '@pinia/nuxt',
  '@pinia-plugin-persistedstate/nuxt',
],
  // pinia: {
  //   storesDirs: ['./stores/**', './custom-folder/stores/**'],
  // },

})
