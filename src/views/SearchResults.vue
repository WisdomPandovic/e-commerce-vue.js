<template>
    <div class="bg-gray-100 min-h-screen px-4 py-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-xl font-bold mb-4">Search Results for "{{ searchQuery }}"</h1>
  
        <div v-if="loading" class="flex justify-center items-center h-40">
          <div class="w-12 h-12 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
        </div>
  
        <div v-else>
          <div v-if="filteredProducts.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <router-link
              v-for="product in filteredProducts"
              :key="product._id"
              :to="`/productDetails/${product._id}`"
              class="block bg-white p-4 rounded shadow hover:shadow-md transition">
              <img :src="product.images[0] || 'https://via.placeholder.com/300x200?text=No+Image'" alt="Product image"
                class="w-full h-48 object-cover rounded mb-3">
              <h2 class="text-sm font-semibold truncate mb-1">{{ product.name }}</h2>
              <p class="text-gray-700 font-medium">{{ formatPrice(product.price) }}</p>
            </router-link>
          </div>
  
          <div v-else class="text-gray-600 text-center py-10">
            No products found.
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const searchQuery = computed(() => (route.query.q || '').toString().trim().toLowerCase())
  
  const products = ref([])
  const loading = ref(true)
  
  const fetchProducts = async () => {
    try {
      const res = await fetch('https://neophyte-garments-react-app-api.onrender.com/api/product')
      const data = await res.json()
      products.value = data
    } catch (err) {
      console.error('Error fetching products:', err)
    } finally {
      loading.value = false
    }
  }
  
  const filteredProducts = computed(() => {
    if (!searchQuery.value) return []
    return products.value.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value)
    )
  })
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price)
  }
  
  onMounted(fetchProducts)
  </script>