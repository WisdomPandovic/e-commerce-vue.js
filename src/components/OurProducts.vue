<template>
    <div class="bg-gray-100">
      <div class="max-w-6xl mx-auto px-4 py-8 my-5">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 my-3 text-sm">
          <router-link to="/" class="flex items-center gap-2 text-xs">
            <ArrowLeftIcon class="w-5 h-5" />
            Home /
          </router-link>
          <p class="font-semibold text-xs">Products</p>
        </div>
  
        <!-- Header & Filters -->
        <div class="flex justify-between items-center flex-wrap gap-3 mb-6">
          <h1 class="text-2xl font-bold text-center">Products</h1>
  
          <div class="flex flex-wrap gap-2 items-center">
            <select v-model="selectedCategory" class="sm:w-auto w-full border px-3 py-1 rounded text-sm">
              <option value="">All Categories</option>
              <option v-for="category in uniqueCategories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
  
            <input v-model="searchQuery" type="text" placeholder="Search name..."
              class="sm:w-auto w-full border px-3 py-1 rounded text-sm" />
          </div>
        </div>
  
        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center items-center h-40">
          <div class="w-12 h-12 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
        </div>
  
        <!-- Product Grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="post in filteredPosts" :key="post._id">
            <router-link :to="`/productDetails/${post._id}`"
              class="block bg-white rounded-lg shadow hover:shadow-md transition-all p-4">
              <div class="relative text-center bg-white p-2">
                <HeartIcon v-if="!isInWishlist(post._id)" @click.stop.prevent="addToWishlist(post)"
                  class="w-10 h-10 bg-white p-2 text-yellow-700 border rounded-full border-gray-200 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer" />
                <HeartIconSolid v-else @click.stop.prevent="removeFromWishlist(post._id)"
                  class="w-10 h-10 p-2 bg-white text-red-600 border rounded-full border-red-300 bg-red-100 absolute top-2 right-2 z-10 cursor-pointer" />
  
                <img :src="post.images[0] || 'https://via.placeholder.com/300x200?text=No+Image'" alt="Product image"
                  class="w-full h-48 object-cover rounded mb-3" />
  
                <div class="text-center">
                  <h2 class="text-sm font-semibold truncate mb-1">{{ post.name }}</h2>
                  <div class="flex items-center justify-center gap-2 my-2">
                    <StarIcon class="w-5 h-5 text-yellow-400" v-for="i in 5" :key="i" />
                  </div>
                  <p class="text-gray-700 font-medium">{{ formatPrice(post.price) }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useQuery } from '@tanstack/vue-query'
  import { fetchProducts } from '@/hooks/product.js'
  import { useWishlistStore } from '@/store/wishlistStore'
  import { useToast } from 'vue-toastification'
  import { HeartIcon, StarIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
  import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
  
  export default {
    components: {
      StarIcon,
      HeartIcon,
      HeartIconSolid,
      ArrowLeftIcon
    },
    setup() {
      const toast = useToast()
      const wishlist = useWishlistStore()
  
      const selectedCategory = ref('')
      const searchQuery = ref('')
  
      const { data, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
      })
  
      const posts = computed(() => data.value || [])
  
      const addToWishlist = (post) => {
        if (!post || !post._id) return
        wishlist.addToWishlist(post)
        toast.success('Added to Wishlist!')
      }
  
      const isInWishlist = (id) => {
        return wishlist.items.some(item => item && item._id === id)
      }
  
      const removeFromWishlist = (id) => {
        wishlist.removeFromWishlist(id)
        toast.info('Removed from Wishlist')
      }
  
      const formatPrice = (price) => {
        return new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 0
        }).format(price)
      }
  
      const uniqueCategories = computed(() => {
        const all = posts.value.map(post => post.category?.name || 'Uncategorized')
        return [...new Set(all)]
      })
  
      const filteredPosts = computed(() => {
        return posts.value.filter(post => {
          const cat = post.category?.name || 'Uncategorized'
          const matchCategory = selectedCategory.value ? cat === selectedCategory.value : true
          const matchName = post.name.toLowerCase().includes(searchQuery.value.toLowerCase())
          return matchCategory && matchName
        })
      })
  
      return {
        isLoading,
        posts,
        selectedCategory,
        searchQuery,
        filteredPosts,
        uniqueCategories,
        formatPrice,
        addToWishlist,
        isInWishlist,
        removeFromWishlist
      }
    }
  }
  </script>
  