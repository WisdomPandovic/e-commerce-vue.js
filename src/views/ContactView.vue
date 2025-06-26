<template>
   <div>
            <div
                class="relative w-full h-screen bg-cover bg-center"
                style="background-image: url('/images/signup-image.jpg')"
            >
                <div class="flex items-center justify-start h-full bg-black bg-opacity-50 p-5">
                    <form
                        class="p- rounded-lg text-white md:w-1/2 w-full"
                    >
                        <h2 class="text-3xl font-bold text-center text-white mb-6 tracking-wider uppercase">
                            Contact
                        </h2>
                        <p class="text- my-3 text-center tracking-wider">support@pandastore.com</p>
                        <!-- <p class="text-sm mb-5 tracking-wider">
                            Feel free to reach out to us with any questions or inquiries. We&apos;ll
                            get back to you as soon as possible.
                        </p> -->
                        <div class="flex justify-center gap-4 text-gray-300 my-5">
          <div class="bg-blue-600 rounded-full p-2">
            <a href="#" class="hover:text-white flex items-center gap-1">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12.07C22 6.486 17.514 2 12 2S2 6.486 2 12.07c0 4.99 3.657 9.13 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V22c4.781-.748 8.438-4.888 8.438-9.878z" />
              </svg>
            </a>
          </div>
          <div class="bg-red-500 rounded-full p-2">
            <a href="#" class="hover:text-white flex items-center gap-1">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.2c3.18 0 3.56 0 4.82.07 1.17.06 1.96.25 2.42.42a4.92 4.92 0 0 1 1.78 1.1 4.92 4.92 0 0 1 1.1 1.78c.17.46.36 1.25.42 2.42.07 1.26.07 1.64.07 4.82s0 3.56-.07 4.82c-.06 1.17-.25 1.96-.42 2.42a4.92 4.92 0 0 1-1.1 1.78 4.92 4.92 0 0 1-1.78 1.1c-.46.17-1.25.36-2.42.42-1.26.07-1.64.07-4.82.07s-3.56 0-4.82-.07c-1.17-.06-1.96-.25-2.42-.42a4.92 4.92 0 0 1-1.78-1.1 4.92 4.92 0 0 1-1.1-1.78c-.17-.46-.36-1.25-.42-2.42C2.2 15.56 2.2 15.18 2.2 12s0-3.56.07-4.82c.06-1.17.25-1.96.42-2.42a4.92 4.92 0 0 1 1.1-1.78 4.92 4.92 0 0 1 1.78-1.1c.46-.17 1.25-.36 2.42-.42C8.44 2.2 8.82 2.2 12 2.2zm0 3.3a6.5 6.5 0 1 0 6.5 6.5A6.51 6.51 0 0 0 12 5.5zm0 10.7a4.2 4.2 0 1 1 4.2-4.2A4.2 4.2 0 0 1 12 16.2zm6.88-10.88a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z" />
              </svg>
            </a>
          </div>
          <div class="bg-blue-500 rounded-full p-2">
            <a href="#" class="hover:text-white flex items-center gap-1">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.4 8.4 0 0 1-2.71 1.04 4.2 4.2 0 0 0-7.16 3.84A12 12 0 0 1 3.1 4.84a4.2 4.2 0 0 0 1.3 5.62 4.2 4.2 0 0 1-1.9-.52v.05a4.2 4.2 0 0 0 3.37 4.1 4.2 4.2 0 0 1-1.89.07 4.2 4.2 0 0 0 3.92 2.92A8.4 8.4 0 0 1 2 19.54a11.8 11.8 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.3 8.3 0 0 0 24 5.56a8.3 8.3 0 0 1-2.54.7z" />
              </svg>
            </a>
          </div>
        </div>
                        
        <div  class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="mb-4">
                            <input
                                type="text"
                                id="name"
                                class="w-full px-2 pb-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-300 outline-none focus:border-gray-800"
                                placeholder="Your Full Name"
                            />
                        </div>

                        <div class="mb-4">
                            <input
                                type="email"
                                id="email"
                                class="w-full px-2 pb-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-300 outline-none focus:border-gray-800"
                                placeholder="Your Email"
                            />
                        </div>
                    </div>

                    <div class="mb-4">
                            <input
                                type="text"
                                id="subject"
                                class="w-full px-2 pb-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-300 outline-none focus:border-gray-800"
                                placeholder="Subject"
                            />
                        </div>

                        <div class="mb-4">
                            <textarea
                                id="message"
                                class="w-full px-2 pb-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-300 outline-none focus:border-gray-800"
                                placeholder="Type your message here....."
                                rows="4"
                            ></textarea>
                        </div>
                        <div class="flex justify-center text-center items-center">
                        <button
                            class=" bg-transparent border-b border-gray-400 text-white font-bold py-2 px-4 rounded hover:bg-black disabled:opacity-50"
                        >
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView'
  }
  </script>
  
  <style scoped>
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

  .placeholder-xs::placeholder {
  font-size: 0.425rem; /* 10px */
}

  </style>
  