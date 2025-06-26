<template>
    <!-- <div class="h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-gray-50"> -->
        <div class="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
      <!-- Left: Image -->
      <transition name="slide-left" appear>
        <div class="flex items-center justify-center h-full">
          <form class="bg-white shadow-lg rounded-lg w-full max-w-md p-6 space-y-4">
            <div class="my-6 text-center">
              <h2 class="sm:text-2xl text-md font-bold text-yellow-600">Welcome Back</h2>
              <p class="text-black text-sm">Login to buy product</p>
            </div>
  
            <div>
              <label class="block text-gray-700 font-semibold mb-1">Email</label>
              <input type="email" placeholder="you@example.com"
                class="w-full border border-gray-300 p-2 rounded" />
            </div>
  
            <div>
              <label class="block text-gray-700 font-semibold mb-1">Password</label>
              <input type="password" placeholder="********"
                class="w-full border border-gray-300 p-2 rounded" />
            </div>
  
            <button type="submit"
              class="w-full bg-yellow-600 text-white font-semibold py-2 rounded hover:bg-black transition">
              Login
            </button>
  
            <p class="text-center text-sm text-gray-500">
              Don't have an account?
              <router-link to="/signup" class="text-indigo-600 hover:underline">Sign up</router-link>
            </p>
          </form>
        </div>
      </transition>
  
      <!-- Right: Login form -->
      <transition name="slide-right" appear>
        <div class="hidden md:flex items-center justify-center p-2">
          <img src="images/3.jpg" alt="Login Visual" class="w-full h-auto rounded-lg shadow-xl max-w-md" />
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView'
  }
  </script>
  
  <style scoped>
  .slide-left-enter-active,
  .slide-right-enter-active {
    transition: all 0.6s ease-out;
  }
  .slide-left-enter-from {
    transform: translateX(-100%);
    opacity: 0;
  }
  .slide-left-enter-to {
    transform: translateX(0);
    opacity: 1;
  }
  .slide-right-enter-from {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-right-enter-to {
    transform: translateX(0);
    opacity: 1;
  }
  </style>
  