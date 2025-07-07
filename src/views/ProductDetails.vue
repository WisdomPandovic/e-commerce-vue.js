<template>
    <div class="p-6 max-w-6xl mx-auto">
        <div class="flex items-center gap-2 my-3 text-sm">
            <div>
                <router-link to="/" class="flex items-center gap-2 my-3 text-xs">
                    <ArrowLeftIcon class="w-5 h-5" />
                    Home
                </router-link>
            </div>
            <div>
                <router-link to="/products" class="flex items-center gap-2 my-3 text-xs">
                    /
                    Products
                    /
                </router-link>
            </div>
            <p class="font-semibold text-xs">Product Details</p>
        </div>

        <div v-if="isLoading" class="flex justify-center items-center h-40">
            <div class="w-12 h-12 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
        </div>

        <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img :src="product.images[0]" alt="Product image" class="w-full h-full object-cover rounded-lg shadow" />
            <div>
                <button
                    class="border rounded-full bg-white font-semibold text-black text-xs text-center my-3 px-4 py-2">
                    <p>{{ product.category.name }}</p>
                </button>
                <h1 class="text-lg font-bold mb-2">{{ product.name }}</h1>
                <p class="text-sm font-semibold text-black mb-4">₦{{ product.price }}</p>
                <div class="border rounded-full text-xs my-3 p-2">
                    <p>Order in 02:30:02 to get next day delivery</p>
                </div>
                <div>
                    <p class="text-sm">Select Size</p>
                    <!-- <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
                       
                        <button
                            class="border rounded-full bg-black text-white text-xs text-center my-3 px-2 py-4">S</button>
                      
                        <button class="border rounded-full bg-gray-100 text-black text-xs text-center my-3 px-2 py-4">
                            <p>M</p>
                        </button>
                        <button class="border rounded-full bg-gray-100 text-black text-xs text-center my-3 px-2 py-4">
                            <p>L</p>
                        </button>
                        <button class="border rounded-full bg-gray-100 text-black text-xs text-center my-3 px-2 py-4">
                            <p>XL</p>
                        </button>
                        <button class="border rounded-full bg-gray-100 text-black text-xs text-center my-3 px-2 py-4">
                            <p>XXL</p>
                        </button>
                    </div> -->

                    <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
                        <button v-for="size in ['S', 'M', 'L', 'XL', 'XXL']" :key="size" @click="handleSizeSelect(size)"
                            :class="[
                                'border rounded-full text-xs text-center my-3 px-2 py-4 transition-colors duration-200',
                                selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-black'
                            ]">
                            {{ size }}
                        </button>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button class="flex-1 border rounded-full bg-black text-white text-sm text-center my-3 px-4 py-3"
                        @click.stop.prevent="() => addToCartHandler(product)">
                        Add to Cart
                    </button>
                    <HeartIcon v-if="!isInWishlist(product._id)" @click="addToWishlist(product)"
                        class="w-10 h-10 p-2 text-gray-700 border rounded-full border-gray-200 hover:text-red-500 cursor-pointer" />
                    <HeartIconSolid v-else @click="removeFromWishlist(product._id)"
                        class="w-10 h-10 p-2 text-red-600 border rounded-full border-red-300 bg-red-100 cursor-pointer" />
                </div>
                <div class="border border-gray-300 rounded-lg p-3 my-3">
                    <div class="flex justify-between items-center">
                        <p class="font-semibold">Description Fit</p>
                        <ChevronUpIcon class="w-5 h-5 cursor-pointer transition-transform duration-200"
                            :class="{ 'rotate-180': showMore }" @click="toggleDescription" />
                    </div>
                    <div class="text-gray-700 text-sm leading-relaxed space-y-3 my-3" v-html="formattedContent"></div>
                </div>
                <div class="border border-gray-300 rounded-lg p-3 my-3">
                    <div class="flex justify-between items-center">
                        <p class="font-semibold">Shipping</p>
                        <ChevronUpIcon class="w-5 h-5 cursor-pointer transition-transform duration-200" />
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-3">
                        <div class="flex items-center gap-2">
                            <div class="bg-gray-300 rounded-full p-1">
                                <CurrencyBangladeshiIcon class="w-5 h-5" />
                            </div>
                            <div>
                                <p class="text-sm">Discount</p>
                                <p class="font-semibold text-xs">Disc 50%</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-2">
                            <div class="bg-gray-300 rounded-full p-1">
                                <InboxIcon class="w-5 h-5" />
                            </div>
                            <div>
                                <p class="text-sm">Package</p>
                                <p class="font-semibold text-xs">Regular Package</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-2">
                            <div class="bg-gray-300 rounded-full p-1">
                                <CalendarIcon class="w-5 h-5" />
                            </div>
                            <div>
                                <p class="text-sm">Delivery Time</p>
                                <p class="font-semibold text-xs">3-4 Working Days</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-2">
                            <div class="bg-gray-300 rounded-full p-1">
                                <TruckIcon class="w-5 h-5" />
                            </div>
                            <div>
                                <p class="text-sm">Estimated Arrive</p>
                                <p class="font-semibold text-xs">10 - 13 October 2025</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div v-else class="flex flex-col items-center justify-center text-center py-12">
            <img src="/images/no-product.png" alt="No product found" class="w-48 h-48 object-contain mb-4" />
            <p class="text-gray-500 text-sm">Oops! Product not found.</p>
        </div>

        <div class="my-9">
            <h2 class="font-bold text-2xl">Rating & Reviews</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
                    <div class="flex items-center gap-2">
                        <div>
                            <h1 class="text-4xl font-semibold flex items-baseline space-x-2">
                                <span class="text-9xl font-bold">4.5</span>
                                <span class="text-2xl text-gray-500">/ 5</span>
                            </h1>
                            <p class="my-3">(50 New Reviews)</p>
                        </div>
                    </div>

                    <div>
                        <!-- Rating 5 -->
                        <div class="flex items-center gap-2 w-full my-2">
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <p class="text-sm font-semibold text-gray-800">5</p>
                            <p class="bg-black h-2 rounded-full w-[90%]"></p> <!-- 90% width -->
                        </div>

                        <!-- Rating 4 -->
                        <div class="flex items-center gap-2 w-full my-2">
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <p class="text-sm font-semibold text-gray-800">4</p>
                            <p class="bg-black h-2 rounded-full w-[70%]"></p> <!-- 70% width -->
                        </div>

                        <div class="flex items-center gap-2 w-full my-2">
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <p class="text-sm font-semibold text-gray-800">3</p>
                            <p class="bg-black h-2 rounded-full w-[60%]"></p> <!-- 90% width -->
                        </div>

                        <!-- Rating 2 -->
                        <div class="flex items-center gap-2 w-full my-2">
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <p class="text-sm font-semibold text-gray-800">2</p>
                            <p class="bg-black h-2 rounded-full w-[50%]"></p> <!-- 70% width -->
                        </div>

                        <!-- Rating 1 -->
                        <div class="flex items-center gap-2 w-full my-2">
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <p class="text-sm font-semibold text-gray-800">1</p>
                            <p class="bg-black h-2 rounded-full w-[25%]"></p> <!-- 70% width -->
                        </div>
                    </div>
                </div>

                <!-- <div class="border border-gray-300 rounded-lg p-3 my-3">
                    <p class="font-semibold">Paul Willy</p>
                    <div class="flex justify-between items-center gap-2 my-2">
                        <div class="flex items-center gap-2 my-2">
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                        </div>

                        <div>
                            <p class="text-gray-600">12 June, 2025</p>
                            <p>"lorem dejewoi wjocoubw wojwo"</p>
                        </div>
                    </div>
                    <div>
                        <img src="images/2.jpg" alt="User Image"
                            class="w-50 h-50 rounded-lg shadow-xl max-w-md" />
                    </div>
                </div> -->

                <!-- <div class="relative">
                    Scrollable Reviews
                    <div ref="scrollContainer" class="flex overflow-x-auto gap-4 pb-4 scroll-smooth">
                        <div v-for="(review, index) in reviews" :key="index"
                            class="border border-gray-300 rounded-lg p-4 min-w-[300px] max-w-xs bg-white flex-shrink-0">
                            <p class="font-semibold">{{ review.name }}</p>

                            <div class="flex items-center gap-1 my-2">
                                <StarIcon v-for="n in review.rating" :key="n" class="w-5 h-5 text-yellow-400" />
                            </div>

                            <p class="text-gray-600 text-sm mb-2">{{ review.date }}</p>
                            <p class="text-sm italic mb-3">"{{ review.comment }}"</p>

                            <img :src="review.image" alt="User Image" class="w-full h-40 object-cover rounded shadow" />
                        </div>
                    </div>

                    Right Arrow
                    <button @click="scrollRight"
                        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">
                        <ChevronRightIcon class="w-5 h-5" />
                    </button>
                </div> -->

                <div class="relative w-full max-w-xl mx-auto overflow-hidden">
                    <!-- Reviews wrapper -->
                    <div ref="scrollContainer" class="flex transition-transform duration-500"
                        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                        <div v-for="(review, index) in reviews" :key="index"
                            class="w-full flex-shrink-0 p-4 border border-gray-300 rounded-lg bg-white">
                            <p class="font-semibold mb-1">{{ review.name }}</p>

                            <div class="flex justify-between items-center gap-1 my-2">
                                <div class="flex items-center gap-1 my-2">
                                    <StarIcon v-for="n in review.rating" :key="n" class="w-5 h-5 text-yellow-400" />
                                </div>

                                <p class="text-gray-600 text-sm mb-2">{{ review.date }}</p>
                            </div>
                            <p class="text-sm italic mb-3">"{{ review.comment }}"</p>

                            <img :src="review.image" alt="User Image" class="w-full h-40 object-cover rounded shadow" />
                        </div>
                    </div>

                    <!-- Navigation Arrows -->
                    <button v-if="currentIndex > 0" @click="prev"
                        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full">
                        <ChevronLeftIcon class="w-5 h-5" />
                    </button>
                    <button v-if="currentIndex < reviews.length - 1" @click="next"
                        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full">
                        <ChevronRightIcon class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- You might also like -->
        <div class="my-10 py-9">
            <h1 class="sm:text-4xl text-lg font-bold text-center">You might also like</h1>

            <div v-if="loading && recommendedProducts.length === 0" class="flex justify-center items-center h-40">
                <div class="w-12 h-12 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
            </div>

            <div v-else-if="recommendedProducts.length"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                <div v-for="item in recommendedProducts" :key="item._id"
                    class="border rounded-lg p-4 shadow hover:shadow-lg transition">
                    <img :src="item.images[0]" :alt="item.name" class="w-full h-40 object-cover rounded mb-3" />
                    <h2 class="text-sm font-semibold truncate">{{ item.name }}</h2>
                    <div class="flex items-center gap-2 my-2">
                        <StarIcon class="w-5 h-5 text-yellow-400" v-for="n in 5" :key="n" />
                    </div>
                    <p class="text-sm font-bold text-black">₦{{ item.price }}</p>
                    <router-link :to="`/productDetail/${item._id}`"
                        class="block mt-3 text-center bg-black text-white rounded-full py-2 text-sm">
                        View Product
                    </router-link>
                </div>
            </div>

            <div v-else class="text-center text-gray-500 text-sm mt-4">
                No recommendations found.
            </div>
        </div>

    </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { fetchProductById, fetchProducts } from '@/hooks/product.js'
import { useWishlistStore } from '@/store/wishlistStore'
import { useCartStore } from '@/store/cartStore'
import { useToast } from 'vue-toastification'
import {
    ArrowLeftIcon,
    ChevronUpIcon,
    HeartIcon,
    CurrencyBangladeshiIcon,
    CalendarIcon,
    TruckIcon,
    InboxIcon,
    StarIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
} from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'

export default {
    components: {
        ArrowLeftIcon,
        ChevronUpIcon,
        HeartIcon,
        HeartIconSolid,
        CurrencyBangladeshiIcon,
        CalendarIcon,
        TruckIcon,
        InboxIcon,
        StarIcon,
        ChevronRightIcon,
        ChevronLeftIcon,
    },
    setup() {
        const route = useRoute()
        const toast = useToast()
        const wishlist = useWishlistStore()
        const cart = useCartStore()
        const showMore = ref(false)
        const currentIndex = ref(0)

        const selectedSize = ref(null)

        const handleSizeSelect = (size) => {
            selectedSize.value = size
        }

        const productId = computed(() => route.params.id)

        const { data: product, isLoading, refetch } = useQuery({
            queryKey: ['product', productId],
            queryFn: () => fetchProductById(productId.value),
            enabled: computed(() => !!productId.value)
        })

        // ✅ FIXED missing closing parenthesis here
        const allProductsQuery = useQuery({
            queryKey: ['products'],
            queryFn: fetchProducts,
        })

        const recommendedProducts = computed(() => {
            if (!product.value || !allProductsQuery.data?.value) return []
            return allProductsQuery.data.value
                .filter(p =>
                    p._id !== route.params.id &&
                    p.category?.name === product.value.category?.name
                )
                .slice(0, 4)
        })

        const loading = computed(() => allProductsQuery.isLoading)

        const addToCartHandler = (product) => {
            cart.addToCart(product)
            toast.success(`${product.name} added to cart!`, {
                timeout: 3000,
                position: 'top-right',
            })
        }

        const addToWishlist = (product) => {
            wishlist.addToWishlist(product)
            toast.success('Added to Wishlist!')
        }

        const removeFromWishlist = (id) => {
            wishlist.removeFromWishlist(id)
            toast.info('Removed from Wishlist')
        }

        const isInWishlist = (id) => {
            if (!id) return false; // prevent errors from undefined/null id
            return Array.isArray(wishlist.items) &&
                wishlist.items.some(item => item && item._id === id)
        }

        const reviews = [
            { name: 'Paul Willy', rating: 5, date: '12 June, 2025', comment: 'Excellent product!', image: '/images/2.jpg' },
            { name: 'Jane Doe', rating: 4, date: '10 June, 2025', comment: 'Good quality, arrived early.', image: '/images/3.jpg' },
            { name: 'John Smith', rating: 5, date: '08 June, 2025', comment: 'Highly recommend!', image: '/images/1.jpg' },
            { name: 'Emily Rose', rating: 4, date: '05 June, 2025', comment: 'Very satisfied.', image: '/images/signup-image.jpg' },
        ]

        const next = () => {
            if (currentIndex.value < reviews.length - 1) currentIndex.value++
        }

        const prev = () => {
            if (currentIndex.value > 0) currentIndex.value--
        }

        const toggleDescription = () => {
            showMore.value = !showMore.value
        }

        const formattedContent = computed(() => {
            if (!product.value?.content) return ''
            const sentences = product.value.content.split('.').filter(Boolean).map(s => s.trim() + '.')
            const visible = showMore.value ? sentences : sentences.slice(0, 2)
            return visible.join('</p><p>')
        })

        return {
            product,
            isLoading,
            addToCartHandler,
            addToWishlist,
            removeFromWishlist,
            isInWishlist,
            showMore,
            toggleDescription,
            formattedContent,
            reviews,
            currentIndex,
            next,
            prev,
            recommendedProducts,
            selectedSize,
            handleSizeSelect,
            loading // <-- also returned so you can use in your <template>
        }
    }

}

</script>

<style scoped>
.rotate-180 {
    transform: rotate(180deg);
}
</style>