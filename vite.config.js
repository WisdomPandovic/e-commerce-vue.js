// vite.config.js
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     port: 3000 // or whatever you want
//   }
// })

// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src' // if you're using @ as an alias for /src
    }
  },
  server: {
    port: 3000,
    historyApiFallback: true
  },
  define: {
    'process.env': {
      NODE_ENV: process.env.NODE_ENV,
      BASE_URL: '/',
    }
  }
  
})

