// stores/authStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null) // entire user object
  const token = ref(localStorage.getItem('token') || '')

  const isLoggedIn = computed(() => !!token.value)
  const userId = computed(() => user.value?._id || null)

  const login = async ({ username, password }) => {
    const response = await axios.post('https://neophyte-garments-react-app-api.onrender.com/api/login', { username, password })

    token.value = response.data.token
    user.value = response.data.user

    localStorage.setItem('token', token.value)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
  }

  const logout = () => {
    token.value = ''
    user.value = null
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
  }

  return {
    user,
    token,
    isLoggedIn,
    userId,
    login,
    logout
  }
})
