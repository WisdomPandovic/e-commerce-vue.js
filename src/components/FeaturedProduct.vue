<template>
    <div class="my-10">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl text-black font-bold">Featured Product</h2>
  
        <div class="flex gap-1 border border-gray-300 p-2 items-center">
          <ChevronLeftIcon
            @click="slideLeft"
            class="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer transition-transform duration-150" />
          <div class="w-px h-4 bg-gray-300 mx-1"></div>
          <ChevronRightIcon
            @click="slideRight"
            class="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer transition-transform duration-150" />
        </div>
      </div>

      <div v-if="loading" class="flex justify-center items-center h-40">
            <div class="w-12 h-12 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
        </div>
  
      <!-- Sliding Product Row -->
      <div class="overflow-hidden mt-8">
        <div
          class="flex transition-transform duration-500 gap-4"
          :style="{ transform: `translateX(-${currentIndex * itemWidth}%)` }"
        >
          <div
            v-for="item in featuredProducts"
            :key="item._id"
            class="min-w-full sm:min-w-[33.3333%] bg-white p-2 rounded shadow-sm"
          >
            <router-link :to="`/productDetails/${item._id}`">
            <img :src="item.images[0]" :alt="item.name" class="w-full aspect-[3/2] object-cover rounded mb-3" />
        </router-link>
            <div class="flex justify-between items-center">
              <div class="flex-1 min-w-0">
                <h2 class="text-sm font-semibold truncate">{{ item.name }}</h2>
                <p class="text-sm font-bold text-black">₦{{ item.price }}</p>
              </div>
              <!-- <div class="bg-black p-2 rounded ml-2">
                <ShoppingCartIcon class="w-5 h-5 text-white hover:text-blue-300 transition-colors" />
              </div> -->
              <div class="bg-black p-2 rounded ml-2">
                <ShoppingCartIcon
  @click.stop.prevent="() => addToCartHandler(item)"
  class="w-5 h-5 text-white hover:text-blue-300 transition-colors cursor-pointer"
/>
</div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ShoppingCartIcon,
  } from '@heroicons/vue/24/outline'
  import { useCartStore } from '@/store/cartStore'
  
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  import { useToast } from 'vue-toastification'
const toast = useToast()
  
  export default {
    components: {
      ChevronLeftIcon,
      ChevronRightIcon,
      ShoppingCartIcon,
    },
  
    setup() {
      const featuredProducts = ref([])
      const loading = ref(true)
      const currentIndex = ref(0)
      const itemWidth = ref(33.3333) // default to 3 items per row

      const cart = useCartStore()

      const addToCartHandler = (product) => {
  cart.addToCart(product)
  console.log('Clicked to add product:', product)
  toast.success(`${product.name} added to cart!`, {
    timeout: 3000,
    position: 'top-right',
  })
}
  
      const updateItemWidth = () => {
        const width = window.innerWidth
        itemWidth.value = width < 768 ? 100 : 33.3333 // 100% for mobile (1 item), 33.3333% for desktop (3 items)
      }
  
      const fetchProducts = async () => {
        try {
          const res = await fetch('https://neophyte-garments-react-app-api.onrender.com/api/product')
          const data = await res.json()
          featuredProducts.value = data.filter(p => p.category?.name === 'Neophytegarments')
        } catch (err) {
          console.error('Failed to load featured products:', err)
        }finally {
                loading.value = false
            }
      }
  
      const slideLeft = () => {
        if (currentIndex.value > 0) currentIndex.value--
      }
  
      const slideRight = () => {
        const itemsPerView = itemWidth.value === 100 ? 1 : 3
        const maxIndex = featuredProducts.value.length - itemsPerView
        if (currentIndex.value < maxIndex) currentIndex.value++
      }
  
      onMounted(() => {
        fetchProducts()
        updateItemWidth()
        window.addEventListener('resize', updateItemWidth)
      })
  
      onBeforeUnmount(() => {
        window.removeEventListener('resize', updateItemWidth)
      })
  
      return {
        featuredProducts,
        loading,
        currentIndex,
        itemWidth,
        slideLeft,
        slideRight,
        addToCartHandler, 
      }
    },
  }
  </script>  