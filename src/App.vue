<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Product</router-link> |
    <router-link to="/about">About</router-link> 
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->

<template>
  <div id="app" class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Navbar -->
    <nav class="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <div class="text-xl font-bold text-black uppercase">Panda</div>

      <!-- Right side -->
      <div class="flex items-center space-x-4">
        <!-- Desktop Nav -->
        <div class="hidden md:flex gap-6 text-sm font-semibold">
          <router-link to="/" class="hover:text-blue-600"
            active-class="text-blue-600 border-b-2 border-blue-600 pb-1">Home</router-link>
          <router-link to="/products" class="hover:text-blue-600"
            active-class="text-blue-600 border-b-2 border-blue-600 pb-1">Products</router-link>
          <router-link to="/about" class="hover:text-blue-600"
            active-class="text-blue-600 border-b-2 border-blue-600 pb-1">About</router-link>
            <router-link to="/wishlist" class="hover:text-blue-600">
            <HeartIcon class="w-6 h-6 text-yellow-500 cursor-pointer hover:text-blue-600" />
          </router-link>
        </div>

        <!-- Cart Icon (Desktop) -->
        <router-link to="/cart" class="hidden md:block relative">
          <ShoppingCartIcon class="w-6 h-6 text-gray-700 hover:text-blue-600" />
          <!-- Optional badge -->
          <!-- <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span> -->
        </router-link>

        <!-- User Icon Dropdown -->
        <div class="relative group" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <!-- Icon -->
          <UserCircleIcon class="w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-600" />

          <!-- Dropdown -->
          <div v-show="showDropdown"
            class="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md text-sm text-gray-700 z-50">
            <router-link to="/profile" class="block px-4 py-2 hover:bg-gray-100">Profile</router-link>
            <router-link to="/login" class="block px-4 py-2 hover:bg-gray-100">Sign In</router-link>
            <button @click="logout" class="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
          </div>
        </div>

        <!-- Hamburger (Mobile) -->
        <button @click="toggleMenu" class="md:hidden text-2xl">
          <span v-if="!menuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Nav -->
    <div v-if="menuOpen" class="md:hidden bg-white shadow px-4 pb-4 space-y-2 text-sm font-semibold">
      <router-link @click="closeMenu" to="/" class="block hover:text-blue-600">Home</router-link>
      <router-link @click="closeMenu" to="/products" class="block hover:text-blue-600">Products</router-link>
      <router-link @click="closeMenu" to="/about" class="block hover:text-blue-600">About</router-link>
      <router-link @click="closeMenu" to="/cart" class="block hover:text-blue-600 flex items-center gap-1">
        <ShoppingCartIcon class="w-5 h-5" /> Cart
      </router-link>
    </div>

    <!-- Route View -->
    <main class="max-w-7xl mx-auto px-4 py-8">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingCartIcon, UserCircleIcon, HeartIcon } from '@heroicons/vue/24/outline'
import Footer from './components/AppFooter.vue'
import { useToast } from 'vue-toastification'
const toast = useToast()

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)
const showDropdown = ref(false)

const logout = () => {
  // Add your logout logic here
  // alert('Logged out') // Or redirect, clear token, etc.
  toast.success('Logged out successfully!', {
    timeout: 3000,
    position: 'top-right',
  })
}

</script>

<style scoped>
/* No additional styles needed — Tailwind handles layout */
</style>
