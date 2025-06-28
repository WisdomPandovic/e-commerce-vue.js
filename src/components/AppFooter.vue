<!-- src/components/AppFooter.vue -->
<template>
  <footer class="mt-7">
    <div class="text-center mb-8">
      <div>
        <div class="text-black sm:text-3xl text-sm font-extrabold leading-snug">
          <h2>Subscribe to our newsletter to get updates</h2>
          <h2>to our latest collections</h2>
        </div>
        <p class="text-xs text-gray-500 font-semibold my-3">Get 20% off on your first order just by subscribing to our
          news letter</p>

        <div class="mt-6 flex justify-center items-center gap-2 max-w-md mx-auto p-2">
          <input type="email" placeholder="Enter your email"
            class="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button class="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
            Subscribe
          </button>
        </div>

        <p class="text-xs text-gray-500 font-semibold my-3">You will be able to unsubscribe at any time</p>
        <p class="text-xs text-gray-500 font-semibold my-3">
          Read our Privacy Policy <a href="/privacy" class="text-blue-600 underline">here</a>
        </p>
      </div>
    </div>
    <div class="bg-black text-white py-8 mt-12">
      <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div>
          <h2 class="text-2xl font-bold mb-2 uppercase">Panda</h2>
          <p class="text-sm text-gray-300">
            Style meets culture. Shop premium urban wear.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Quick Links</h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/products">Shop</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Policies -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Policies</h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms of Service</router-link></li>
            <li><router-link to="/returns">Returns & Refunds</router-link></li>
          </ul>
        </div>

        <!-- Socials -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Connect</h3>
          <div class="flex gap-4 text-gray-300">
            <div class="bg-blue-600 rounded-full p-2">
              <a href="#" class="hover:text-white flex items-center gap-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12.07C22 6.486 17.514 2 12 2S2 6.486 2 12.07c0 4.99 3.657 9.13 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V22c4.781-.748 8.438-4.888 8.438-9.878z" />
                </svg>
              </a>
            </div>
            <div class="bg-red-500 rounded-full p-2">
              <a href="#" class="hover:text-white flex items-center gap-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.2c3.18 0 3.56 0 4.82.07 1.17.06 1.96.25 2.42.42a4.92 4.92 0 0 1 1.78 1.1 4.92 4.92 0 0 1 1.1 1.78c.17.46.36 1.25.42 2.42.07 1.26.07 1.64.07 4.82s0 3.56-.07 4.82c-.06 1.17-.25 1.96-.42 2.42a4.92 4.92 0 0 1-1.1 1.78 4.92 4.92 0 0 1-1.78 1.1c-.46.17-1.25.36-2.42.42-1.26.07-1.64.07-4.82.07s-3.56 0-4.82-.07c-1.17-.06-1.96-.25-2.42-.42a4.92 4.92 0 0 1-1.78-1.1 4.92 4.92 0 0 1-1.1-1.78c-.17-.46-.36-1.25-.42-2.42C2.2 15.56 2.2 15.18 2.2 12s0-3.56.07-4.82c.06-1.17.25-1.96.42-2.42a4.92 4.92 0 0 1 1.1-1.78 4.92 4.92 0 0 1 1.78-1.1c.46-.17 1.25-.36 2.42-.42C8.44 2.2 8.82 2.2 12 2.2zm0 3.3a6.5 6.5 0 1 0 6.5 6.5A6.51 6.51 0 0 0 12 5.5zm0 10.7a4.2 4.2 0 1 1 4.2-4.2A4.2 4.2 0 0 1 12 16.2zm6.88-10.88a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z" />
                </svg>
              </a>
            </div>
            <div class="bg-blue-500 rounded-full p-2">
              <a href="#" class="hover:text-white flex items-center gap-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.4 8.4 0 0 1-2.71 1.04 4.2 4.2 0 0 0-7.16 3.84A12 12 0 0 1 3.1 4.84a4.2 4.2 0 0 0 1.3 5.62 4.2 4.2 0 0 1-1.9-.52v.05a4.2 4.2 0 0 0 3.37 4.1 4.2 4.2 0 0 1-1.89.07 4.2 4.2 0 0 0 3.92 2.92A8.4 8.4 0 0 1 2 19.54a11.8 11.8 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.3 8.3 0 0 0 24 5.56a8.3 8.3 0 0 1-2.54.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center text-sm text-gray-400 mt-8 pb-4">
        © {{ new Date().getFullYear() }} Panda Store. All rights reserved.
        <p class="pb-2">Developed & Maintained by Panda</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ChevronUpIcon, XCircleIcon, StarIcon, } from '@heroicons/vue/24/outline'
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}
</style>