<template>
    <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Sidebar Navigation -->
      <div class="bg-white rounded p-4 space-y-4">
        <h2 class="text-xl font-bold mb-4">My Account</h2>
        <ul class="space-y-2">
          <li>
            <button @click="activeTab = 'details'" :class="tabClass('details')">My Details</button>
          </li>
          <li>
            <button @click="activeTab = 'wishlist'" :class="tabClass('wishlist')">My Wishlist</button>
          </li>
          <li>
            <button @click="activeTab = 'orders'" :class="tabClass('orders')">My Orders</button>
          </li>
          <li>
            <button @click="activeTab = 'address'" :class="tabClass('address')">Address Book</button>
          </li>
          <li>
            <button @click="logout" class="w-full text-black text-sm p-3 hover:bg-black hover:text-white rounded-full border border-gray-300">Log Out</button>
          </li>
        </ul>
      </div>
  
      <!-- Main Content -->
      <div class="md:col-span-3 bg-gray-100 rounded-lg p-6">
        <div v-if="activeTab === 'details'">
          <h2 class="text-xl font-bold mb-4">My Details</h2>
          <!-- Replace with actual user details -->
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
        </div>
  
        <div v-else-if="activeTab === 'wishlist'">
          <h2 class="text-xl font-bold mb-4">My Wishlist</h2>
          <Wishlist/>
        </div>
  
        <div v-else-if="activeTab === 'orders'">
          <h2 class="text-xl font-bold mb-4">My Orders</h2>
          <p>Orders content here...</p>
        </div>
  
        <div v-else-if="activeTab === 'address'">
          <h2 class="text-xl font-bold mb-4">Address Book</h2>
          <p>Address book content here...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Wishlist from '@/components/AppWishlist.vue'

  export default {
    components: {
    Wishlist
  },
    name: 'ProfilePage',
    data() {
      return {
        activeTab: 'details'
      }
    },
    methods: {
      logout() {
        // Perform logout logic
        alert('Logged out')
      },
      tabClass(tab) {
        return [
          'w-full text-left px-2 py-2 rounded transition',
          this.activeTab === tab
            ? 'bg-black rounded-full text-white font-semibold'
            : 'hover:bg-gray-100 text-gray-700'
        ]
      }
      
    }
    
  }
  </script>
  