<template>
    <div class="p-6 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-center my-6">My Wishlist</h1>
  
      <div v-if="wishlist.items.length === 0">
        <p class="text-center text-gray-500">Your wishlist is empty.</p>
      </div>
  
      <div v-else class="space-y-2">
        <!-- Header Row -->
        <div class="hidden md:grid grid-cols-4 font-semibold text-gray-600 border-b pb-2">
          <div>Product</div>
          <div>Name</div>
          <div>Price</div>
          <div>Actions</div>
        </div>
  
        <!-- Product Rows -->
        <div
          v-for="product in wishlist.items"
          :key="product._id"
          class="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border p-4 rounded shadow"
        >
          <!-- Image -->
          <div class="flex items-center gap-2">
            <router-link :to="`/productDetails/${product._id}`">
              <img
                :src="product.images[0] || 'https://via.placeholder.com/300x200?text=No+Image'"
                :alt="product.name"
                class="w-full sm:w-20 h-20 object-cover rounded"
              />
            </router-link>
          </div>
  
          <!-- Name -->
          <h2 class="text-sm font-bold truncate">{{ product.name }}</h2>
  
          <!-- Price -->
          <p class="text-sm text-gray-600">{{ formatPrice(product.price) }}</p>
  
          <!-- Actions -->
          <div class="flex gap-2">
            <button
              class="bg-yellow-500 text-xs font-bold px-3 py-2 rounded hover:bg-black hover:text-white transition"
              @click="addToCartHandler(product)"
            >
              Add to Bag
            </button>
            <button
              class="bg-red-500 text-white rounded-full p-1 hover:bg-red-700 transition"
              @click="removeFromWishlist(product._id)"
            >
              <XCircleIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>  
  
  <script>
  import { XCircleIcon } from '@heroicons/vue/24/outline'
  import { useCartStore } from '@/store/cartStore'
  import { useWishlistStore } from '@/store/wishlistStore'
  import { useToast } from 'vue-toastification'
const toast = useToast()
  
  export default {
    components: {
      XCircleIcon
    },
    setup() {
      const wishlist = useWishlistStore()
      const cart = useCartStore()
  
      const removeFromWishlist = (id) => {
        wishlist.removeFromWishlist(id)
      }

      const addToCartHandler = (product) => {
            cart.addToCart(product)
            console.log('Clicked to add product:', product)
            toast.success(`${product.name} added to cart!`, {
                timeout: 3000,
                position: 'top-right',
            })
        }
  
      const formatPrice = (price) => {
        return new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 0
        }).format(price)
      }
  
      return {
        addToCartHandler,
        wishlist,
        removeFromWishlist,
        formatPrice
      }
    }
  }
  </script>
  