// // store/cartStore.js
// import { defineStore } from 'pinia'

// export const useCartStore = defineStore('cart', {
//   state: () => ({
//     items: [],
//   }),

//   getters: {
//     totalItems: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
//     totalPrice: (state) => state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
//   },

//   actions: {
//     addToCart(product) {
//       const existing = this.items.find(item => item._id === product._id)
//       if (existing) {
//         existing.quantity++
//       } else {
//         this.items.push({ ...product, quantity: 1 })
//       }
//     },

//     removeFromCart(id) {
//       this.items = this.items.filter(item => item._id !== id)
//     },

//     clearCart() {
//       this.items = []
//     },
//   },
// })

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item._id === product._id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter((item) => item._id !== id)
    },
    clearCart() {
      this.items = []
    },
    increaseQuantity(id) {
        const item = this.items.find(i => i._id === id)
        if (item) item.quantity++
      },
    
      decreaseQuantity(id) {
        const item = this.items.find(i => i._id === id)
        if (item && item.quantity > 1) {
          item.quantity--
        } else {
          this.removeFromCart(id)
        }
      },
  },

  persist: true, // ✅ Enable persistence
})
