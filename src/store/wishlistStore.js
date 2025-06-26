// stores/wishlistStore.js
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalWishlist: (state) => state.items.length,
  },

  actions: {
    addToWishlist(product) {
        if (!product || !product._id) return // 🛡️ ensure valid product
      
        const exists = this.items.find(item => item && item._id === product._id)
        if (!exists) {
          this.items.push(product)
        }
      },
      

    removeFromWishlist(id) {
      this.items = this.items.filter(item => item._id !== id)
    },

    clearWishlist() {
      this.items = []
    },
  },
      persist: true,
})
