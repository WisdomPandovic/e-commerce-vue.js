<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
    <!-- Left: Image with animation -->
    <transition name="slide-left" appear>
      <div class="hidden md:flex items-center justify-center p-2 bg-gray-200">
        <img src="/images/2.jpg" alt="Signup Visual" class="w-full h-auto rounded-lg shadow-xl max-w-md" />
      </div>
    </transition>

    <!-- Right: Sign up form with animation -->
    <transition name="slide-right" appear>
      <div class="flex items-center justify-center p-2">
        <form class="bg-white shadow-lg rounded-lg w-full max-w-md p-6 space-y-4" @submit.prevent="handleSignup">
          <h2 class="sm:text-2xl text-md font-bold text-center text-yellow-600">Create Account</h2>

          <div>
            <label class="block text-gray-700 font-semibold mb-1">Username</label>
            <input v-model="username" type="text" placeholder="John Doe" class="w-full border border-gray-300 p-2 rounded" />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-1">Email</label>
            <input v-model="email" type="email" placeholder="you@example.com" class="w-full border border-gray-300 p-2 rounded" />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium mb-1">Phone Number</label>
            <VueTelInput v-model="phoneNumber" :input-options="{ showDialCode: true }" />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-1">Password</label>
            <input v-model="password" type="password" placeholder="********" class="w-full border border-gray-300 p-2 rounded" />
          </div>

          <button type="submit"
            class="w-full bg-yellow-600 text-white font-semibold py-2 rounded hover:bg-black transition">
            Sign Up
          </button>

          <p class="text-center text-sm text-gray-500">Already have an account? <router-link to="/login"
              class="text-blue-600 hover:underline">Login</router-link></p>
        </form>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '@/store/authStore'
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

// Form state
const username = ref('')
const email = ref('')
const password = ref('')
const phoneNumber = ref('')

// Essentials
const toast = useToast()
const router = useRouter()
const auth = useAuthStore()

// Handle form submission
const handleSignup = async () => {
  if (!username.value || !email.value || !password.value || !phoneNumber.value) {
    toast.error('Please fill in all fields')
    return
  }

  const cleanedPhone = phoneNumber.value.replace(/\D/g, '') // Clean phone number

  try {
    const res = await axios.post('https://neophyte-garments-react-app-api.onrender.com/api/users', {
      username: username.value,
      email: email.value,
      password: password.value,
      phoneNumber: Number(cleanedPhone),
    })

    toast.success('Account created successfully!')
    router.push('/login')
  } catch (err) {
    toast.error(err.response?.data?.message || 'Signup failed')
  }
}

</script>

<script>

export default {
  name: 'SignUpView',
  components: {
    VueTelInput,
  }
}
</script>


<style scoped>
/* Animations */
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.6s ease-out;
}

.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>