<!-- ProductCollectionPage.vue -->
<template>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 class="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">Our Latest Products</h1>
        <p class="text-xl text-gray-600 mb-8 max-w-7xl mx-auto">
            Discover our curated collection of high-quality products designed to meet your every need.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <!-- Product Card 1: Wireless Headphones -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div class="text-blue-600 mb-4">
                    <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19l3 3m-3-3l-6 6m18-6l-3-3m0 3V6M9 19l-3 3m0-3h12a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Wireless Headphones</h2>
                <p class="text-gray-700 text-sm flex-grow mb-3">
                    Immersive sound, comfortable fit, and long-lasting battery life for your audio pleasure.
                </p>
                <div class="text-2xl font-bold text-green-700 mb-4">$99.99</div>
                <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>

            <!-- Product Card 2: Smartwatch -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div class="text-red-600 mb-4">
                    <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Smartwatch Pro</h2>
                <p class="text-gray-700 text-sm flex-grow mb-3">
                    Track your fitness, receive notifications, and stay connected on the go.
                </p>
                <div class="text-2xl font-bold text-green-700 mb-4">$199.99</div>
                <button class="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>

            <!-- Product Card 3: Portable Charger -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div class="text-yellow-600 mb-4">
                    <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Portable Power Bank</h2>
                <p class="text-gray-700 text-sm flex-grow mb-3">
                    Never run out of battery with this high-capacity, fast-charging power bank.
                </p>
                <div class="text-2xl font-bold text-green-700 mb-4">$49.99</div>
                <button class="w-full bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>

            <!-- Product Card 4: Ergonomic Mouse -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div class="text-purple-600 mb-4">
                    <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 19v2a2 2 0 002 2h10a2 2 0 002-2v-2M5 7v2a2 2 0 002 2h10a2 2 0 002-2V7M6 13a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Ergonomic Mouse</h2>
                <p class="text-gray-700 text-sm flex-grow mb-3">
                    Designed for comfort and precision, reducing strain during long hours of use.
                </p>
                <div class="text-2xl font-bold text-green-700 mb-4">$34.99</div>
                <button class="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>

            <!-- Product Card 5: Mechanical Keyboard -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div class="text-teal-600 mb-4">
                    <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11V9m2 2V9m-2 2h2m-2-2h2m3 5h2m-2-2h2m-3-3h2m-2-2h2M5 11h2m-2-2h2m3 5h2m-2-2h2m-3-3h2m-2-2h2M5 15h2m-2-2h2m3 5h2m-2-2h2m-3-3h2m-2-2h2M5 19h2m-2-2h2m3 5h2m-2-2h2m-3-3h2m-2-2h2M3 21h18a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Mechanical Keyboard</h2>
                <p class="text-gray-700 text-sm flex-grow mb-3">
                    Experience tactile feedback and durability for typing and gaming enthusiasts.
                </p>
                <div class="text-2xl font-bold text-green-700 mb-4">$129.99</div>
                <button class="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>

            <!-- Product Card 6: HD Webcam -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div class="text-pink-600 mb-4">
                    <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold text-gray-800 mb-2">HD Webcam</h2>
                <p class="text-gray-700 text-sm flex-grow mb-3">
                    Crystal-clear video calls and streaming with superior image quality.
                </p>
                <div class="text-2xl font-bold text-green-700 mb-4">$59.99</div>
                <button class="w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCollectionPage', // Component name
    data() {
        return {
            // Data properties specific to this component can go here.
            // For example, an array of product objects:
            // products: [
            //   { id: 1, name: 'Product A', price: 29.99, description: '...', icon: '...' },
            //   // ... more products
            // ]
        };
    },
    methods: {
        // Methods specific to this component can go here.
        // Example:
        // addToCart(productId) {
        //   console.log(`Added product ${productId} to cart`);
        // }
    },
    // Lifecycle hooks can be used here, e.g., to fetch product data when the component loads.
    // mounted() {
    //   // this.fetchProducts();
    // }
};
</script>

<style scoped>
/* These styles are scoped to this component, meaning they only apply here. */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Any custom CSS that cannot be expressed with Tailwind utility classes can go here. */
</style>
