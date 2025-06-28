<template>
  <div class="bg-gray-100">
    <HomeBanner />
    <div class="max-w-6xl mx-auto px-4 py-8 my-5">
      <div v-if="loading" class="flex justify-center items-center h-40">
            <div class="w-12 h-12 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
        </div>
      <div v-if="neophyteProducts.length > 0" class=" px-4 py-8 my-5">
        <h2 class="sm:text-2xl text-lg font-bold text-center my-6">
          Details with Eco-friendly Materials
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Left 4 items -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div v-for="(product) in neophyteProducts.slice(0, 4)" :key="product._id" class="text-center bg-white p-2">
              <router-link :to="`/productDetails/${product._id}`">
                <div class="relative">
                  <!-- Heart Icon -->
                  <HeartIcon v-if="!isInWishlist(product._id)" @click.stop.prevent="addToWishlist(product)"
                class="w-10 h-10 bg-white p-2 text-yellow-700 border rounded-full border-gray-200 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer" />

              <HeartIconSolid v-else @click.stop.prevent="removeFromWishlist(product._id)"
                class="w-10 h-10 p-2 bg-white text-red-600 border rounded-full border-red-300 bg-red-100 absolute top-2 right-2 z-10 cursor-pointer" />
                  <img :src="product.images[0]" :alt="product.name" class="w-full h-44 object-cover shadow-xl rounded-lg" />
                  <p class="text-sm font-semibold truncate mt-2">{{ product.name }}</p>
                  <div class="flex items-center justify-center text-center gap-2 my-2">
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                  </div>
                  <p class="text-xs text-gray-600">₦{{ product.price }}</p>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Center featured item -->
          <div v-if="neophyteProducts.length >= 5" class="text-center max-w-2xl mx-auto bg-white p-2">
            <router-link :to="`/productDetails/${neophyteProducts[4]._id}`">
              <div class="relative">
                <!-- Heart Icon -->
                <HeartIcon v-if="!isInWishlist(neophyteProducts[4]._id)" @click.stop.prevent="addToWishlist(neophyteProducts[4])"
                class="w-10 h-10 bg-white p-2 text-yellow-700 border rounded-full border-gray-200 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer" />

              <HeartIconSolid v-else @click.stop.prevent="removeFromWishlist(neophyteProducts[4]._id)"
                class="w-10 h-10 p-2 bg-white text-red-600 border rounded-full border-red-300 bg-red-100 absolute top-2 right-2 z-10 cursor-pointer" />
                <img :src="neophyteProducts[4].images[0]" :alt="neophyteProducts[4].name"
                  class="w-full h-[450px] object-cover shadow-xl rounded-lg" />
                <p class="text-lg font-semibold truncate mt-4">{{ neophyteProducts[4].name }}</p>
                <div class="flex items-center justify-center text-center gap-2 my-2">
                  <StarIcon class="w-3 h-3 text-yellow-400" />
                  <StarIcon class="w-3 h-3 text-yellow-400" />
                  <StarIcon class="w-3 h-3 text-yellow-400" />
                  <StarIcon class="w-3 h-3 text-yellow-400" />
                  <StarIcon class="w-3 h-3 text-yellow-400" />
                </div>
                <p class="text-sm text-gray-600">₦{{ neophyteProducts[4].price }}</p>
              </div>
            </router-link>
          </div>

          <!-- Right 4 items -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div v-for="(product) in neophyteProducts.slice(5, 9)" :key="product._id" class="text-center bg-white p-2">
              <router-link :to="`/productDetails/${product._id}`">
                <div class="relative">
                  <!-- Heart Icon -->
                  <HeartIcon v-if="!isInWishlist(product._id)" @click.stop.prevent="addToWishlist(product)"
                class="w-10 h-10 bg-white p-2 text-yellow-700 border rounded-full border-gray-200 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer" />

              <HeartIconSolid v-else @click.stop.prevent="removeFromWishlist(product._id)"
                class="w-10 h-10 p-2 bg-white text-red-600 border rounded-full border-red-300 bg-red-100 absolute top-2 right-2 z-10 cursor-pointer" />
                  <img :src="product.images[0]" :alt="product.name" class="w-full h-44 object-cover shadow-xl rounded-lg" />
                  <p class="text-sm font-semibold truncate mt-2">{{ product.name }}</p>
                  <div class="flex items-center justify-center text-center gap-2 my-2">
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                    <StarIcon class="w-3 h-3 text-yellow-400" />
                  </div>
                  <p class="text-xs text-gray-600">₦{{ product.price }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Limted Offer -->
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center justify-center bg-gray-200">
          <img src="images/1.jpg" alt="Signup Visual" class="w-full max-h-[250px] shadow-xl object-cover" />
        </div>

        <div class="bg-black p-8">
          <p class="text-white text-sm uppercase">Limted Offer</p>
          <h2 class="text-white sm:text-3xl text-lg font-bold mt-4">35% Off only this Friday</h2>
          <h2 class="text-white sm:text-3xl text-lg font-bold mt-2">and get special gift</h2>
          <button class="bg-white text-black text-sm my-4 px-4 py-2 rounded inline-flex items-center gap-2">
            Grab it now
            <span>&rarr;</span> <!-- Unicode arrow -->
          </button>
        </div>
      </div>

      <div class="px-4 py-8 my-5">
        <h2 class="text-2xl font-bold text-center my-6">Recommended Wears</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="relative text-center bg-white p-2">
              <!-- Heart Icon -->
              <HeartIcon
                class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
              <img src="images/Tailored Jacket.png" alt="Tailored Jacket"
                class="w-full h-44 rounded-lg shadow-xl object-cover cursor-pointer" />
              <p class="text-lg font-semibold mt-2 truncate">Coat</p>
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
              <img src="images/vintage.jpg" alt="Vintage"
                class="w-full h-44 rounded-lg shadow-xl object-cover cursor-pointer" />
              <p class="text-lg font-semibold mt-2 truncate">Vintage Shirt</p>
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
              <img src="images/Pink Jacket.jpg" alt="Pink Jacket"
                class="w-full  h-44 rounded-lg shadow-xl object-cover cursor-pointer" />
              <p class="text-lg font-semibold mt-2 truncate">Pink Jacket</p>
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
                class="w-full  h-44 rounded-lg shadow-xl object-cover cursor-pointer" />
              <p class="text-lg font-semibold mt-2 truncate">Shirt & Pant</p>
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
          <div class="relative text-center bg-white p-2">
            <!-- Heart Icon -->
            <HeartIcon
              class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
            <img src="images/coat.jpg" alt="Coat" class="w-full h-auto rounded-lg shadow-xl max-w-md cursor-pointer" />
            <p class="text-lg font-semibold mt-2 truncate">Coat</p>
            <div class="flex items-center justify-center text-center gap-2 my-2">
              <StarIcon class="w-3 h-3 text-yellow-400" />
              <StarIcon class="w-3 h-3 text-yellow-400" />
              <StarIcon class="w-3 h-3 text-yellow-400" />
              <StarIcon class="w-3 h-3 text-yellow-400" />
              <StarIcon class="w-3 h-3 text-yellow-400" />
            </div>
            <p class="text-xs text-gray-600">₦2573</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="relative text-center bg-white p-2">
              <!-- Heart Icon -->
              <HeartIcon
                class="w-6 h-6 bg-white text-yellow-500 hover:text-red-500 absolute top-2 right-2 z-10 cursor-pointer transition-colors" />
              <img src="images/Bomber Jacket.png" alt="Bomber Jacket"
                class="w-full  h-44 rounded-lg shadow-xl object-cover cursor-pointer" />
              <p class="text-lg font-semibold mt-2 truncate">Bomber Jacket</p>
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
              <img src="images/Colored Hat.jpg" alt="Colored Hat"
                class="w-full  h-44 rounded-lg shadow-xl object-cover cursor-pointer" />
              <p class="text-lg font-semibold mt-2 truncate">Colored Hat</p>
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
                class="w-full  h-44 rounded-lg shadow-xl object-cover cursor-pointer" />
              <p class="text-lg font-semibold mt-2 truncate">Arab Shopping Bag</p>
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
              <img src="images/underwear.jpg" alt="Underwear"
                class="w-full  h-44 rounded-lg shadow-xl object-cover cursor-pointer" />
              <p class="text-lg font-semibold mt-2 truncate">Underwear</p>
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

      <!-- We provide best customer experience -->
      <div class="my-8">
        <div class="flex flex-col md:flex-row items-start md:items-center">

          <!-- Left Text -->
          <div class="text-center sm:text-left text-black text-2xl font-bold md:w-1/2 md:pr-4 sm:items-start">
            <h2>We provide best</h2>
            <h2>customer experience</h2>
          </div>

          <!-- Vertical Line -->
          <div class="hidden md:block w-1 h-12 bg-gray-600 mx-4 rounded"></div>

          <!-- Right Text -->
          <div class="text-center sm:text-left text-xs md:w-1/2 md:pl-4 sm:items-start">
            <p>We make sure our customers have the best shopping experience</p>
          </div>

        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 my-6">
          <div class="text-center sm:text-left flex flex-col items-center sm:items-start">
            <div class="bg-white p-1.5 rounded inline-block">
              <ShieldCheckIcon class="w-6 h-6 text-yellow-400 font-bold" />
            </div>
            <h2 class="text-black text-sm font-bold my-3">Original Products</h2>
            <p class="text-gray-400 text-xs">We provide money back guarantee if the product is not Original</p>
          </div>
          <div class="text-center sm:text-left flex flex-col items-center sm:items-start">
            <div class="bg-white p-1.5 rounded inline-block">
              <CheckBadgeIcon class="w-6 h-6 text-yellow-400 font-bold" />
            </div>
            <h2 class="text-black text-sm font-bold my-3">Satisfaction Guaranteed</h2>
            <p class="text-gray-400 text-xs">We provide money back guarantee if the product is not Original</p>
          </div>
          <div class="text-center sm:text-left flex flex-col items-center sm:items-start">
            <div class="bg-white p-1.5 rounded inline-block">
              <SparklesIcon class="w-6 h-6 text-yellow-400 font-bold" />
            </div>
            <h2 class="text-black text-sm font-bold my-3">New Arrival everyday</h2>
            <p class="text-gray-400 text-xs">We provide money back guarantee if the product is not Original</p>
          </div>
          <div class="text-center sm:text-left flex flex-col items-center sm:items-start">
            <div class="bg-white p-1.5 rounded inline-block">
              <TruckIcon class="w-6 h-6 text-yellow-400 font-bold" />
            </div>
            <h2 class="text-black text-sm font-bold my-3">Fast & free shipping</h2>
            <p class="text-gray-400 text-xs">We provide money back guarantee if the product is not Original</p>
          </div>
        </div>
      </div>

      <FeaturedProduct />
    </div>
  </div>
</template>

<script setup>
import HomeBanner from '@/components/HomeBanner.vue'
import FeaturedProduct from '@/components/FeaturedProduct.vue'
import { useWishlistStore } from '@/store/wishlistStore'
import { HeartIcon, StarIcon, CheckBadgeIcon, ShieldCheckIcon, SparklesIcon, TruckIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
const toast = useToast()

const neophyteProducts = ref([])
const loading = ref(true)
const wishlist = useWishlistStore()

const addToWishlist = (product) => {
      console.log('📦 Attempting to add to wishlist:', product)

      if (!product || !product._id) {
        console.warn('⚠️ Skipping invalid post:', product)
        return
      }

      wishlist.addToWishlist(product)
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

// const fetchNeophyteProducts = async () => {
//   try {
//     const res = await fetch('https://neophyte-garments-react-app-api.onrender.com/api/product')
//     const data = await res.json()

//     neophyteProducts.value = data.filter(
//       (item) => item.category?.name === 'Neophytegarments'
//     ).slice(0, 8) // only 8 for the grid
//   } catch (error) {
//     console.error('Failed to fetch products:', error)
//   }
// }

const fetchNeophyteProducts = async () => {
  try {
    const res = await fetch('https://neophyte-garments-react-app-api.onrender.com/api/product')
    const data = await res.json()

    // ✅ Get the first 9 products only
    neophyteProducts.value = data.slice(2, 11)
  } catch (error) {
    console.error('Failed to fetch products:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchNeophyteProducts)
</script>
