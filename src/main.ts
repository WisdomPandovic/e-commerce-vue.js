// import { createApp } from 'vue'
// import App from './App.vue'
// import './registerServiceWorker'
// import router from './router'
// import store from './store'
// import './assets/tailwind.css'
// import Toast from 'vue-toastification'
// import 'vue-toastification/dist/index.css'

// createApp(App).use(store).use(router).mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// import './registerServiceWorker'
// import router from './router'
// // import store from './store'
// import './assets/tailwind.css'

// // Import Toast
// import Toast from 'vue-toastification'
// import 'vue-toastification/dist/index.css'

// // Create app instance
// const app = createApp(App)
// app.use(createPinia())

// // Use plugins
// // app.use(store)
// app.use(router)
// app.use(Toast, {
//   // Optional options
//   transition: 'Vue-Toastification__fade',
//   maxToasts: 3,
//   newestOnTop: true,
// })

// // Mount app
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// Create and configure Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // ✅ Apply the plugin here

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(pinia)
app.use(router)
app.use(Toast, {
  transition: 'Vue-Toastification__fade',
  maxToasts: 3,
  newestOnTop: true,
})

// Mount app
app.mount('#app')
