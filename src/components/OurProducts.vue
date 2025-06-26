<template>
  <div class="bg-gray-100">
    <div class="max-w-6xl mx-auto px-4 py-8 my-5">
      <h1 class="text-2xl font-bold mb-4 text-center">Products</h1>

      <div v-if="loading" class="flex justify-center items-center h-40">
        <div class="w-12 h-12 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="post in posts" :key="post._id">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-3">
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/Tailored Jacket.png" alt="Tailored Jacket"
            class="w-full h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Coat</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400 font-bold" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/underwear.jpg" alt="Underwear" class="w-full  h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Underwear</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/vintage.jpg" alt="Vintage" class="w-full h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Vintage Shirt</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/Bomber Jacket.png" alt="Bomber Jacket"
            class="w-full  h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Bomber Jacket</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/Pink Jacket.jpg" alt="Pink Jacket" class="w-full  h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Pink Jacket</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <!-- <StarIcon class="w-3 h-3 text-yellow-400" /> -->
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/Shirt & Pant.jpg" alt="Shirt & Pant"
            class="w-full  h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Shirt & Pant</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/Colored Hat.jpg" alt="Colored Hat" class="w-full  h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Colored Hat</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/Arab Shopping Bag.jpg" alt="Arab Shopping Bag"
            class="w-full  h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Arab Shopping Bag</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <!-- <StarIcon class="w-3 h-3 text-yellow-400" /> -->
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
        <div class="relative text-center bg-white p-2">
          <!-- Heart Icon -->
          <HeartIcon
            class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
          <img src="images/coat.jpg" alt="Coat" class="w-full h-44 rounded-lg shadow-xl object-cover" />
          <p class="text-lg font-semibold mt-2">Coat</p>
          <div class="flex items-center justify-center text-center gap-2 my-2">
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
            <StarIcon class="w-3 h-3 text-yellow-400" />
          </div>
          <p class="text-xs text-gray-600">₦2573</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useWishlistStore } from '@/store/wishlistStore'
import { HeartIcon, StarIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  components: {
    StarIcon,
    HeartIcon,
    HeartIconSolid
    // ArrowLeftIcon
  },
  setup() {
    const posts = ref([])
    const loading = ref(true)

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
    }
  }
}
</script>
