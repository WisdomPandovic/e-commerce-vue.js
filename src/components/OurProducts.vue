<template>
  <div class="bg-gray-100">
    <div class="max-w-6xl mx-auto px-4 py-8 my-5">
      <div class="flex items-center gap-2 my-3 text-sm">
            <div>
                <router-link to="/" class="flex items-center gap-2 my-3 text-xs">
                    <ArrowLeftIcon class="w-5 h-5" />
                    Home /
                </router-link>
            </div>
            <p class="font-semibold text-xs">Products</p>
        </div>
      <div class="flex justify-between items-center flex-wrap gap-3 mb-6">
        <h1 class="text-2xl font-bold text-center">Products</h1>

        <!-- Filter Controls -->
        <div class="flex flex-wrap gap-2 items-center">
          <!-- Filter by Category -->
          <select v-model="selectedCategory" class="border px-3 py-1 rounded text-sm">
            <option value="">All Categories</option>
            <option v-for="category in uniqueCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>

          <!-- Filter by Name -->
          <input v-model="searchQuery" type="text" placeholder="Search name..."
            class="border px-3 py-1 rounded text-sm" />
        </div>
      </div>

      <div v-if="loading" class="flex justify-center items-center h-40">
        <div class="w-12 h-12 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="post in filteredPosts" :key="post._id">
          <router-link :to="`/productDetails/${post._id}`"
            class="block bg-white rounded-lg shadow hover:shadow-md transition-all p-4">
            <div class="relative text-center bg-white p-2">
              <!-- <HeartIcon
                class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" /> -->
              <HeartIcon v-if="!isInWishlist(post._id)" @click.stop.prevent="addToWishlist(post)"
                class="w-10 h-10 bg-white p-2 text-yellow-700 border rounded-full border-gray-200 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer" />

              <HeartIconSolid v-else @click.stop.prevent="removeFromWishlist(post._id)"
                class="w-10 h-10 p-2 bg-white text-red-600 border rounded-full border-red-300 bg-red-100 absolute top-2 right-2 z-10 cursor-pointer" />
              <!-- 🖼️ Product Image -->
              <img :src="post.images[0] || 'https://via.placeholder.com/300x200?text=No+Image'" alt="Product image"
                class="w-full h-48 object-cover rounded mb-3" />

              <!-- 🛍️ Product Info -->
              <div class="text-center">
                <h2 class="text-sm font-semibold truncate mb-1">{{ post.name }}</h2>
                <div class="flex items-center justify-center text-center gap-2 my-2">
                  <StarIcon class="w-5 h-5 text-yellow-400" />
                  <StarIcon class="w-5 h-5 text-yellow-400" />
                  <StarIcon class="w-5 h-5 text-yellow-400" />
                  <StarIcon class="w-5 h-5 text-yellow-400" />
                  <StarIcon class="w-5 h-5 text-yellow-400" />
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
import { ref, onMounted, computed } from 'vue'
import { useWishlistStore } from '@/store/wishlistStore'
import { HeartIcon, StarIcon, ChevronDownIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  components: {
    StarIcon,
    HeartIcon,
    HeartIconSolid,
    // ChevronDownIcon
    ArrowLeftIcon
  },
  setup() {
    const posts = ref([])
    const loading = ref(true)
    const selectedCategory = ref('')
    const searchQuery = ref('')

    const wishlist = useWishlistStore()

    const addToWishlist = (post) => {
      console.log('📦 Attempting to add to wishlist:', post)

      if (!post || !post._id) {
        console.warn('⚠️ Skipping invalid post:', post)
        return
      }

      wishlist.addToWishlist(post)
      console.log('✅ Added to wishlist. Current items:', wishlist.items)

      toast.success('Added to Wishlist!')
    }

    const isInWishlist = (id) => {
      if (!id) return false; // prevent errors from undefined/null id
      return Array.isArray(wishlist.items) &&
        wishlist.items.some(item => item && item._id === id)
    }

    const removeFromWishlist = (id) => {
      wishlist.removeFromWishlist(id)
      toast.info('Removed from Wishlist')
    }

    const fetchPosts = async () => {
      try {
        const res = await fetch('https://neophyte-garments-react-app-api.onrender.com/api/product')
        const data = await res.json()
        posts.value = data.slice(2, 11)
      } catch (err) {
        console.error('API error:', err)
      } finally {
        loading.value = false
      }
    }

    const formatPrice = (price) => {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
      }).format(price)
    }

    // 🔎 Get unique categories for dropdown
    const uniqueCategories = computed(() => {
  const all = posts.value.map(post => post.category?.name || 'Uncategorized')
  return [...new Set(all)]
})

    // 🔍 Filtered results
    const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const postCategoryName = post.category?.name || 'Uncategorized'
    const matchesCategory = selectedCategory.value
      ? postCategoryName === selectedCategory.value
      : true

    const matchesName = post.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesName
  })
})

    onMounted(() => {
      fetchPosts()
    })

    return {
      posts,
      loading,
      formatPrice,
      addToWishlist,
      wishlist,
      isInWishlist,
      removeFromWishlist,
      selectedCategory,
      searchQuery,
      filteredPosts,
      uniqueCategories
    }
  }
}
</script>
