<template>
    <div class="cart max-w-6xl mx-auto px-4 py-8">
        <h2 class="text-3xl uppercase font-bold my-3">My Cart</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <!-- Left Div: 2/3 of width -->
            <div class="col-span-2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="flex justify-center items-center bg-gray-200 p-2">
                        <img src="images/Bomber Jacket.png" alt="Product Image"
                            class="w-40 h-40 object-cover rounded-lg shadow" />
                    </div>

                    <div class="flex justify-between">
                        <div>
                            <h1 class="sm:text-3xl text-lg font-bold uppercase">Bomber Jacket</h1>
                            <p class="my-4">₦1,233</p>

                            <div class="flex items-center justify-between gap-6 my-6">
                                <!-- Color Picker -->
                                <div>
                                    <div class="flex items-center gap-3">
                                        <div class="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></div>
                                        <p class="text-sm font-medium text-gray-700">Black</p>
                                        <ChevronUpIcon
                                            class="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-transform duration-150" />
                                    </div>
                                    <div class="border-b border-black font-bold mt-2"></div>
                                </div>

                                <!-- Size Selector -->
                                <div>
                                    <div class="flex items-center gap-3">
                                        <p class="text-sm font-medium text-gray-700">Size:</p>
                                        <div class="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">S
                                        </div>
                                        <ChevronUpIcon
                                            class="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-transform duration-150" />
                                    </div>
                                    <div class="border-b border-black font-bold mt-2"></div>
                                </div>
                            </div>

                            <div class="flex justify-between items-center">
                                <h2 class="text-xs font-bold uppercase">Quantity</h2>

                                <div class="flex items-center gap-2">
                                    <button
                                        class="w-8 h-8 border rounded text-lg font-bold hover:bg-gray-100 transition">
                                        –
                                    </button>
                                    <div class="w-8 h-8 flex items-center justify-center bg-black text-white rounded">
                                        2
                                    </div>
                                    <button
                                        class="w-8 h-8 border rounded text-lg font-bold hover:bg-gray-100 transition">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <XCircleIcon class="w-10 h-10 p-2 text-gray-700 hover:text-blue-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div class="border-b border-black font-bold my-9"></div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="flex justify-center items-center bg-gray-200 p-2">
                        <img src="images/Tailored Jacket.png" alt="Product Image"
                            class="w-40 h-40 object-cover rounded-lg shadow" />
                    </div>

                    <div class="flex justify-between">
                        <div>
                            <h1 class="sm:text-3xl text-lg font-bold uppercase">Tailored Jacket</h1>
                            <p class="my-4">₦2,233</p>

                            <div class="flex items-center justify-between gap-6 my-6">
                                <!-- Color Picker -->
                                <div>
                                    <div class="flex items-center gap-3">
                                        <div class="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></div>
                                        <p class="text-sm font-medium text-gray-700">Black</p>
                                        <ChevronUpIcon
                                            class="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-transform duration-150" />
                                    </div>
                                    <div class="border-b border-black font-bold mt-2"></div>
                                </div>

                                <!-- Size Selector -->
                                <div>
                                    <div class="flex items-center gap-3">
                                        <p class="text-sm font-medium text-gray-700">Size:</p>
                                        <div class="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">S
                                        </div>
                                        <ChevronUpIcon
                                            class="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-transform duration-150" />
                                    </div>
                                    <div class="border-b border-black font-bold mt-2"></div>
                                </div>
                            </div>

                            <div class="flex justify-between items-center">
                                <h2 class="text-xs font-bold uppercase">Quantity</h2>

                                <div class="flex items-center gap-2">
                                    <button
                                        class="w-8 h-8 border rounded text-lg font-bold hover:bg-gray-100 transition">
                                        –
                                    </button>
                                    <div class="w-8 h-8 flex items-center justify-center bg-black text-white rounded">
                                        2
                                    </div>
                                    <button
                                        class="w-8 h-8 border rounded text-lg font-bold hover:bg-gray-100 transition">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <XCircleIcon class="w-10 h-10 p-2 text-gray-700 hover:text-blue-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div class="border-b border-black font-bold my-9"></div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="flex justify-center items-center bg-gray-200 p-2">
                        <img src="images/coat.jpg" alt="Product Image"
                            class="w-40 h-40 object-cover rounded-lg shadow" />
                    </div>

                    <div class="flex justify-between">
                        <div>
                            <h1 class="sm:text-3xl text-lg font-bold uppercase">Coat</h1>
                            <p class="my-4">₦3,233</p>

                            <div class="flex items-center justify-between gap-6 my-6">
                                <!-- Color Picker -->
                                <div>
                                    <div class="flex items-center gap-3">
                                        <div class="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></div>
                                        <p class="text-sm font-medium text-gray-700">Black</p>
                                        <ChevronUpIcon
                                            class="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-transform duration-150" />
                                    </div>
                                    <div class="border-b border-black font-bold mt-2"></div>
                                </div>

                                <!-- Size Selector -->
                                <div>
                                    <div class="flex items-center gap-3">
                                        <p class="text-sm font-medium text-gray-700">Size:</p>
                                        <div class="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">S
                                        </div>
                                        <ChevronUpIcon
                                            class="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-transform duration-150" />
                                    </div>
                                    <div class="border-b border-black font-bold mt-2"></div>
                                </div>
                            </div>

                            <div class="flex justify-between items-center">
                                <h2 class="text-xs font-bold uppercase">Quantity</h2>

                                <div class="flex items-center gap-2">
                                    <button
                                        class="w-8 h-8 border rounded text-lg font-bold hover:bg-gray-100 transition">
                                        –
                                    </button>
                                    <div class="w-8 h-8 flex items-center justify-center bg-black text-white rounded">
                                        2
                                    </div>
                                    <button
                                        class="w-8 h-8 border rounded text-lg font-bold hover:bg-gray-100 transition">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <XCircleIcon class="w-10 h-10 p-2 text-gray-700 hover:text-blue-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div class="border-b border-black font-bold my-9"></div>
            </div>

            <!-- Right Div: 1/3 of width -->
            <div class="col-span-1">
                <div class="bg-gray-200 p-6 roundedh-fit uppercase">
                    <div class="flex justify-between items-center">
                        <p class="text-sm mb-4">Bombered Jacket</p>
                        <p>₦1,233</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-sm mb-4">Tailored Jacket</p>
                        <p>₦2,233</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-sm mb-4">Coat</p>
                        <p>₦3,233</p>
                    </div>
                    <div class="border-b border-black font-bold my-4"></div>
                    <div class="flex justify-between items-center">
                        <p class="text-sm mb-4">Sales Tax</p>
                        <p class="text-xs">Included</p>
                    </div>
                    <div class="border-b border-black font-bold my-4"></div>
                    <div class="flex justify-between items-center">
                        <p class="font-bold">Total</p>
                        <p class="font-bold"> ₦6,699</p>
                    </div>

                    <!-- <button class="w-full mt-6 bg-black text-white text-xs py-2 rounded hover:bg-gray-900 uppercase">
                        Proceed to Checkout
                    </button> -->

                    <button
                        className="w-full mt-6 py-3 rounded text-white text-xs bg-black border border-black relative overflow-hidden group uppercase">
                        <span
                            className="absolute inset-0 bg-[#ffe7c7] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                        <span className="relative z-10 group-hover:text-black">Proceed to Checkout</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="my-9 py-9">
            <h1 class="sm:text-2xl text-lg font-bold text-center">Recommended Products</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                <div v-for="item in recommendedProducts" :key="item._id"
                    class="border rounded-lg p-4 shadow hover:shadow-lg transition">
                    <img :src="item.images[0]" :alt="item.name" class="w-full h-40 object-cover rounded mb-3" />
                    <h2 class="text-sm font-semibold truncate">{{ item.name }}</h2>
                    <!-- <p class="text-xs text-gray-500 mb-1">{{ item.category.name }}</p> -->
                    <!-- <p v-if="item.category" class="text-xs text-gray-500 mb-1">{{ item.category.name }}</p> -->
                    <div class="flex items-center gap-2 my-2">
                        <StarIcon class="w-5 h-5 text-yellow-400" />
                        <StarIcon class="w-5 h-5 text-yellow-400" />
                        <StarIcon class="w-5 h-5 text-yellow-400" />
                        <StarIcon class="w-5 h-5 text-yellow-400" />
                        <StarIcon class="w-5 h-5 text-yellow-400" />
                    </div>
                    <p class="text-sm font-bold text-black">₦{{ item.price }}</p>

                    <router-link :to="`/productDetails/${item._id}`"
                        class="block mt-3 text-center bg-black text-white rounded-full py-2 text-sm">
                        View Product
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ChevronUpIcon, XCircleIcon, StarIcon, } from '@heroicons/vue/24/outline'
import { ref, onMounted } from 'vue'

export default {
    components: {
        ChevronUpIcon,
        XCircleIcon,
        StarIcon,
    },
    setup() {
        const recommendedProducts = ref([])
        const loading = ref(true)

        const fetchProducts = async () => {
            try {
                const res = await fetch('https://neophyte-garments-react-app-api.onrender.com/api/product')
                const data = await res.json()

                // Filter and select only 4 products from the desired category
                recommendedProducts.value = data
                    .filter(p => p.category?.name === 'Neophytegarments')
                    .slice(0, 4)

                // Optional: Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } catch (err) {
                console.error('Failed to load recommended products:', err)
            } finally {
                loading.value = false
            }
        }

        onMounted(fetchProducts)

        return {
            recommendedProducts,
            loading,
        }
    }
}
</script>
