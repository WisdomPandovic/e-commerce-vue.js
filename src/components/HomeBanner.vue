<template>
    <div
      class="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
      style="background-image: url('/images/banner.jpeg')"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <div class="relative z-10 text-center px-4">
        <h1 class="text-3xl md:text-5xl font-bold mb-4 uppercase">
          Welcome to Panda Fashion
        </h1>
        <p class="text-sm md:text-lg mb-6">Your favorite place for bold looks and unique styles</p>
  
        <div class="flex justify-center gap-4">
          <router-link
            to="/products"
            class="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Shop Now
          </router-link>
          <router-link
            to="/signup"
            class="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>
  </template>
  