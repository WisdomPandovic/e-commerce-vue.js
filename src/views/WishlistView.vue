<template>
    <div class="p-6 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-6">My Wishlist</h1>
  
      <div v-if="wishlist.items.length === 0">
        <p class="text-center text-gray-500">Your wishlist is empty.</p>
      </div>
  
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="product in wishlist.items" :key="product._id" class="relative border p-4 rounded-lg shadow-lg">
          <!-- Remove from wishlist -->
          <button
            class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 transition"
            @click="removeFromWishlist(product._id)"
          >
            <XCircleIcon class="w-5 h-5" />
          </button>
  
          <!-- Product Image -->
          <router-link :to="`/productDetails/${product._id}`" class="block">
            <img
              :src="product.images[0] || 'https://via.placeholder.com/300x200?text=No+Image'"
              :alt="product.name"
              class="w-full h-48 object-cover rounded"
            />
          </router-link>
  
          <!-- Product Details -->
          <h2 class="text-sm font-bold mt-4 truncate">{{ product.name }}</h2>
          <p class="text-sm text-gray-600 my-2">{{ formatPrice(product.price) }}</p>
  
          <!-- Add to Cart -->
          <button class="w-full bg-yellow-500 text-sm text-black font-bold uppercase px-4 py-2 rounded hover:bg-black hover:text-white"
          @click.stop.prevent="() => addToCartHandler(product)">
            Add to Bag
          </button>
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
  