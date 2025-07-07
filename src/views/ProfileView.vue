<template>
    <div class="max-w-7xl mx-auto px-4 py-10 ">
        <div class="flex items-center gap-2 my-3 text-sm">
            <div>
                <router-link to="/" class="flex items-center gap-2 my-3 text-xs">
                    <ArrowLeftIcon class="w-5 h-5" />
                    Home
                    <ArrowRightIcon class="w-5 h-5" />
                </router-link>
            </div>
            <p class="font-semibold text-xs">Profile</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Sidebar Navigation -->
            <div class="bg-white rounded p-4 space-y-4">
                <h2 class="text-xl font-bold mb-4">My Account</h2>
                <ul class="space-y-2">
                    <li>
                        <button @click="activeTab = 'details'" :class="tabClass('details')">My Details</button>
                    </li>
                    <li>
                        <button @click="activeTab = 'wishlist'" :class="tabClass('wishlist')">My Wishlist</button>
                    </li>
                    <li>
                        <button @click="activeTab = 'orders'" :class="tabClass('orders')">My Orders</button>
                    </li>
                    <li>
                        <button @click="activeTab = 'address'" :class="tabClass('address')">Address Book</button>
                    </li>
                    <li>
                        <button @click="logout"
                            class="w-full text-black text-sm p-3 hover:bg-black hover:text-white rounded-full border border-gray-300 my-4">Log
                            Out</button>
                    </li>
                </ul>
            </div>

            <!-- Main Content -->
            <div class="md:col-span-3 bg-gray-100 rounded-lg p-6">
                <div v-if="activeTab === 'details'">
                    <h2 class="text-xl font-bold mb-4">My Details</h2>
                    <!-- Replace with actual user details -->
                    <div class="border w-full flex flex-col gap-4 p-4 rounded-xl">
                        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                            <div class="flex items-center justify-center gap-4 mt-4">
                                <!-- <input
                            type="file"
                            accept="image/*"
                            id="fileInput"
                        /> -->
                                <!-- <img src="images/2.jpg || 'https://via.placeholder.com/300x200?text=No+Image'" alt="Profile Preview"
                                class="w-32 h-32 rounded-full object-cover cursor-pointer" /> -->
                                <img src="/images/default-avatar.jpg" alt="Profile Preview"
                                    class="w-32 h-32 rounded-full object-cover cursor-pointer" />
                                <!-- <div
                                class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 cursor-pointer"
                            >
                                No Image
                            </div> -->
                            </div>
                            <div>
                                <h2 class="my-4">John Doe</h2>
                                <button
                                    class="px-6 py-2 bg-white text-black rounded-full hover:bg-yellow-500 hover:text-white border border-gray-500 w-fit self-center">
                                    Upload New Image
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full max-w-4xl mx-auto p-6 rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" class="block text-sm font-medium mb-1">First Name</label>
                                    <input id="firstName" type="text"
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" class="block text-sm font-medium mb-1">Last Name</label>
                                    <input id="lastName" type="text"
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <!-- <div>
                            <label htmlFor="phone" class="block text-sm font-medium mb-1">Phone Number</label>
                            <PhoneInput
                                id="phone"
                               class="w-full p-3 border border-gray-300 bg-white rounded-full mb-4"
                            />
                        </div> -->
                                <div>
                                    <label for="gender" class="block text-sm font-medium mb-1">Gender</label>
                                    <select v-model="form.gender"
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4">
                                        <option disabled value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="non-binary">Non-binary</option>
                                        <option value="prefer-not-to-say">Prefer not to say</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <!-- <div>
                                    <label for="phone" class="block text-sm font-medium mb-1">Phone Number</label>
                                    <VueTelInput v-model="phone" class="mb-4" :inputOptions="{
                                        class: 'w-full p-3 border border-gray-300 rounded-full bg-white'
                                    }" />
                                </div> -->
                                <div>
                                    <label for="phone" class="block text-sm font-medium mb-1">Phone Number</label>
                                    <VueTelInput v-model="phone" :input-options="{ showDialCode: true }" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- <div>
                            <label htmlFor="phone" class="block text-sm font-medium mb-1">Phone Number</label>
                            <PhoneInput
                                id="phone"
                               class="w-full p-3 border border-gray-300 bg-white rounded-full mb-4"
                            />
                        </div> -->
                                <div>
                                    <label htmlFor="email" class="block text-sm font-medium mb-1">Email Address</label>
                                    <input id="email" type="email" disabled
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                                <div>
                                    <label htmlFor="password" class="block text-sm font-medium mb-1">Password</label>
                                    <input id="password" type="password" disabled
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                            </div>
                            <div class="flex justify-start grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <button type="submit"
                                    class="px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-yellow-500 disabled:opacity-50">
                                    Save my details
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div v-else-if="activeTab === 'wishlist'">
                    <h2 class="text-xl font-bold mb-4">My Wishlist</h2>
                    <Wishlist />
                </div>

                <div v-else-if="activeTab === 'orders'">
                    <div>
                        <div class="border border-gray-400 p-3 rounded-lg mb-3">
                            <!-- <h2 class="text-xl font-bold mb-4">My Orders</h2> -->
                            <div class="sm:flex block justify-between items-center">
                                <div>
                                    <h2 class="font-bold">Order #: 113421</h2>
                                    <div class="sm:flex block gap-2 text-sm mb-4 mt-2">
                                        <p>4 Products</p> <span class="hidden md:flex">/</span>
                                        <p>By John Doe</p> <span class="hidden md:flex">/</span>
                                        <p>13:45, May 10, 2025</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 border border-gray-400 p-2 rounded text-sm font-bold mb-2">
                                    <CloudArrowDownIcon class="h-5 w-5" />
                                    <p>Download Invoice</p>
                                </div>
                            </div>
                            <div class="border-b border-black font-bold mb-4"></div>
                            <div>
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-sm ">Status:</p>
                                    <p class="text-xs">On the Way</p>
                                </div>
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-sm ">Date of Delivery:</p>
                                    <p class="text-xs">Saturday, May 10, 2025</p>
                                </div>
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-sm ">Deliverd to:</p>
                                    <p class="text-xs">Beauty Street, Pluto 3A, PO:1223</p>
                                </div>
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-sm font-bold">Total:</p>
                                    <p class="text-xs">I34904</p>
                                </div>
                            </div>
                            <div class="border-b border-black font-bold mb-4"></div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex gap-3">
                                    <img src="/images/Bomber Jacket.png" alt="Bomber Jacket"
                                        class="w-20 h-20 rounded-lg shadow-xl max-w-md my-2" />
                                    <div>
                                        <h2 class="font-bold">Bomber Jacket</h2>
                                        <div class="text-sm text-gray-500">
                                            <p>Quantity: 1X = USD 340</p>
                                            <p>Color: Black</p>
                                            <p>Size: Large</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <img src="/images/Shirt & Pant.jpg" alt="Shirt & Pant"
                                        class="w-20 h-20 rounded-lg shadow-xl max-w-md my-2" />
                                    <div>
                                        <h2 class="font-bold">Shirt & Pant</h2>
                                        <div class="text-sm text-gray-500">
                                            <p>Quantity: 1X = USD 340</p>
                                            <p>Color: Black</p>
                                            <p>Size: Large</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <img src="/images/Pink Jacket.jpg" alt="Pink Jacket"
                                        class="w-20 h-20 rounded-lg shadow-xl max-w-md my-2" />
                                    <div>
                                        <h2 class="font-bold">Pink Jacket</h2>
                                        <div class="text-sm text-gray-500">
                                            <p>Quantity: 1X = USD 340</p>
                                            <p>Color: Black</p>
                                            <p>Size: Large</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <img src="/images/coat.jpg" alt="Coat"
                                        class="w-20 h-20 rounded-lg shadow-xl max-w-md my-2" />
                                    <div>
                                        <h2 class="font-bold">Coat</h2>
                                        <div class="text-sm text-gray-500">
                                            <p>Quantity: 1X = USD 340</p>
                                            <p>Color: Black</p>
                                            <p>Size: Large</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-gray-400 p-3 rounded-lg mb-3">
                            <!-- <h2 class="text-xl font-bold mb-4">My Orders</h2> -->
                            <div class="sm:flex block gap-2 justify-between items-center">
                                <div>
                                    <h2 class="font-bold">Order #: 113421</h2>
                                    <div class="sm:flex block gap-2 gap-2 text-sm mb-4 mt-2">
                                        <p>4 Products</p> <span class="hidden md:flex">/</span>
                                        <p>By John Doe</p> <span class="hidden md:flex">/</span>
                                        <p>13:45, May 10, 2025</p>
                                    </div>
                                </div>
                                <div class="border border-gray-400 p-2 rounded text-sm font-bold mb-2">
                                    <CloudDownloadIcon class="h-5 w-5" />
                                    <p>Download Invoice</p>
                                </div>
                            </div>
                            <div class="border-b border-black font-bold mb-4"></div>
                            <div>
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-sm ">Status:</p>
                                    <p class="text-xs">On the Way</p>
                                </div>
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-sm ">Date of Delivery:</p>
                                    <p class="text-xs">Saturday, May 10, 2025</p>
                                </div>
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-sm ">Deliverd to:</p>
                                    <p class="text-xs">Beauty Street, Pluto 3A, PO:1223</p>
                                </div>
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-sm font-bold">Total:</p>
                                    <p class="text-xs">I34904</p>
                                </div>
                            </div>
                            <div class="border-b border-black font-bold mb-4"></div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex gap-3">
                                    <img src="/images/Tailored Jacket.png" alt="Tailored Jacket"
                                        class="w-20 h-20 rounded-lg shadow-xl max-w-md my-2" />
                                    <div>
                                        <h2 class="font-bold">Tailored Jacket</h2>
                                        <div class="text-sm text-gray-500">
                                            <p>Quantity: 1X = USD 340</p>
                                            <p>Color: Black</p>
                                            <p>Size: Large</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <img src="/images/vintage.jpg" alt="Vintage Shirt"
                                        class="w-20 h-20 rounded-lg shadow-xl max-w-md my-2" />
                                    <div>
                                        <h2 class="font-bold">Vintage Shirt</h2>
                                        <div class="text-sm text-gray-500">
                                            <p>Quantity: 1X = USD 340</p>
                                            <p>Color: Black</p>
                                            <p>Size: Large</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <img src="/images/Arab Shopping Bag.jpg" alt="Arab Shopping Bag"
                                        class="w-20 h-20 rounded-lg shadow-xl max-w-md my-2" />
                                    <div>
                                        <h2 class="font-bold">Arab Shopping Bag</h2>
                                        <div class="text-sm text-gray-500">
                                            <p>Quantity: 1X = USD 340</p>
                                            <p>Color: Black</p>
                                            <p>Size: Large</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <img src="/images/Colored Hat.jpg" alt="Colored Hat"
                                        class="w-20 h-20 rounded-lg shadow-xl max-w-md my-2" />
                                    <div>
                                        <h2 class="font-bold">Colored Hat</h2>
                                        <div class="text-sm text-gray-500">
                                            <p>Quantity: 1X = USD 340</p>
                                            <p>Color: Black</p>
                                            <p>Size: Large</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="activeTab === 'address'">
                    <h2 class="text-xl font-bold mb-4">My Address Book</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="border border-black rounded-lg p-4">
                            <div class="flex justify-between items-center">
                                <h2 class="font-bold">Main Address</h2>
                                <div class="flex gap-2 items-center">
                                    <PencilIcon class="w-5 h-5 text-black hover:text-red-700 cursor-pointer" />
                                    <TrashIcon class="w-5 h-5 text-black hover:text-red-700 cursor-pointer" />
                                </div>
                            </div>

                            <div class="mt-2">
                                <h2 class="text-gray-500 text-sm">John Doe</h2>
                                <p class="text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div class="border border-black rounded-lg p-4">
                            <div class="flex justify-between items-center">
                                <h2 class="font-bold">Secondary Address</h2>
                                <div class="flex gap-2 items-center">
                                    <PencilIcon class="w-5 h-5 text-black hover:text-red-700 cursor-pointer" />
                                    <TrashIcon class="w-5 h-5 text-black hover:text-red-700 cursor-pointer" />
                                </div>
                            </div>

                            <div class="mt-2">
                                <h2 class="text-gray-500 text-sm">John Doe</h2>
                                <p class="text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div v-if="!showAddressForm"
                            class="flex justify-between my-5 border border-black rounded-lg p-4 cursor-pointer"
                            @click="showAddressForm = true">
                            <h2>Add New Address</h2>
                        </div>
                    </div>
                    <div v-if="showAddressForm" class="w-full max-w-4xl mx-auto p-6 rounded-lg">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="text-xl font-bold">Add New Address</h2>
                            <XCircleIcon class="w-6 h-6 text-black hover:text-red-700 cursor-pointer"
                                @click="showAddressForm = false" />
                        </div>
                        <form @submit.prevent="handleSubmit">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" class="block text-sm font-medium mb-1">First Name</label>
                                    <input id="firstName" type="text"
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" class="block text-sm font-medium mb-1">Last Name</label>
                                    <input id="lastName" type="text"
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <!-- <div>
                            <label htmlFor="phone" class="block text-sm font-medium mb-1">Phone Number</label>
                            <PhoneInput
                                id="phone"
                               class="w-full p-3 border border-gray-300 bg-white rounded-full mb-4"
                            />
                        </div> -->
                                <div>
                                    <label htmlFor="address" class="block text-sm font-medium mb-1">Stree
                                        Address</label>
                                    <input id="address" type="text"
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                                <div>
                                    <label htmlFor="postalcode" class="block text-sm font-medium mb-1">Postal
                                        Code</label>
                                    <input id="postalcode" type="text"
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- <div>
                            <label htmlFor="phone" class="block text-sm font-medium mb-1">Phone Number</label>
                            <PhoneInput
                                id="phone"
                               class="w-full p-3 border border-gray-300 bg-white rounded-full mb-4"
                            />
                        </div> -->
                                <div>
                                    <label htmlFor="city" class="block text-sm font-medium mb-1">City</label>
                                    <input id="city" type="text" disabled
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4" />
                                </div>
                                <div>
                                    <label for="country" class="block text-sm font-medium mb-1">Country</label>
                                    <select id="country" v-model="selectedCountry"
                                        class="w-full p-3 border border-gray-300 rounded-full mb-4 bg-white text-sm">
                                        <option value="" disabled>Select your country</option>
                                        <option v-for="country in countries" :key="country" :value="country">{{ country
                                            }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex justify-start grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <button type="submit"
                                    class="px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-yellow-500 disabled:opacity-50">
                                    Save my new address
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Wishlist from '@/components/AppWishlist.vue'
import { PencilIcon, ArrowRightIcon, ArrowLeftIcon, XCircleIcon, TrashIcon, } from '@heroicons/vue/24/outline'
import { CloudArrowDownIcon } from '@heroicons/vue/24/outline'
// import { VueTelInput } from 'vue-tel-input'
// import 'vue-tel-input/vue-tel-input.css'
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

export default {

    components: {
        Wishlist,
        PencilIcon,
        TrashIcon,
        XCircleIcon,
        ArrowLeftIcon,
        ArrowRightIcon,
        VueTelInput,
        CloudArrowDownIcon
    },
    name: 'ProfilePage',
    data() {
        return {
            activeTab: 'details',
            showAddressForm: false, // ✅ reactive variable to toggle the form
            selectedCountry: '',
            countries: [
                'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'United States', 'United Kingdom',
                'Canada', 'Germany', 'France', 'India', 'China', 'Brazil', 'Australia'
                // Add more as needed
            ],
            form: {
                gender: ''
            },
            phone: ''
        }
    },
    methods: {
        logout() {
            alert('Logged out')
        },
        tabClass(tab) {
            return [
                'w-full text-left px-2 py-2 rounded transition',
                this.activeTab === tab
                    ? 'bg-black rounded-full text-white font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'
            ]
        },
        handleSubmit() {
            console.log('Address form submitted')
            this.showAddressForm = false // ✅ hide form after submit
        }
    }
}
</script>

<style scoped>
::v-deep(.vti__input) {
    width: 100%;
    padding: 0.75rem;
    /* p-3 */
    border: 1px solid #d1d5db;
    /* border-gray-300 */
    border-radius: 9999px;
    /* rounded-full */
    font-size: 0.875rem;
    /* text-sm */
    background-color: white;
}

::v-deep(.vti__dropdown) {
    border-radius: 9999px;
}

::v-deep(.vti__dropdown-list) {
    max-height: 15rem;
    /* max-h-60 */
    overflow-y: auto;
}
</style>
