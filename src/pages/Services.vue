<!-- ServicesPage.vue -->
<template>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 class="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">Our Professional Services</h1>
        <p class="text-xl text-gray-600 mb-8 max-w-7xl mx-auto">
            At [Your Company Name], we are dedicated to providing top-notch solutions tailored to meet your unique needs. Explore our comprehensive range of services below.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Service Card 1: Web Development -->
            <div class="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="text-blue-600 mb-4">
                    <!-- Icon for Web Development, using a simple SVG for demonstration -->
                    <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <h2 class="text-2xl font-semibold text-gray-800 mb-3">Web Development</h2>
                <p class="text-gray-700">
                    Crafting responsive, high-performance websites from scratch. From custom designs to robust backend systems, we build for impact.
                </p>
            </div>

            <!-- Service Card 2: Mobile App Development -->
            <div class="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="text-green-600 mb-4">
                    <!-- Icon for Mobile App Development -->
                    <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 class="text-2xl font-semibold text-gray-800 mb-3">Mobile App Development</h2>
                <p class="text-gray-700">
                    Creating intuitive and feature-rich mobile applications for iOS and Android, ensuring seamless user experiences.
                </p>
            </div>

            <!-- Service Card 3: UI/UX Design -->
            <div class="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="text-purple-600 mb-4">
                    <!-- Icon for UI/UX Design -->
                    <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v18M3 10h18M3 14h18m-9-4l-3 3m0 0l-3-3m3 3V3" />
                    </svg>
                </div>
                <h2 class="text-2xl font-semibold text-gray-800 mb-3">UI/UX Design</h2>
                <p class="text-gray-700">
                    Designing engaging and user-friendly interfaces that are not only beautiful but also highly functional.
                </p>
            </div>

            <!-- Service Card 4: Cloud Solutions -->
            <div class="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="text-yellow-600 mb-4">
                    <!-- Icon for Cloud Solutions -->
                    <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l2-2m0 0l4-4m-4 4h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                    </svg>
                </div>
                <h2 class="text-2xl font-semibold text-gray-800 mb-3">Cloud Solutions</h2>
                <p class="text-gray-700">
                    Migrate, optimize, and manage your infrastructure on leading cloud platforms for scalability and efficiency.
                </p>
            </div>

            <!-- Service Card 5: Data Analytics -->
            <div class="bg-red-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="text-red-600 mb-4">
                    <!-- Icon for Data Analytics -->
                    <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M3 21h18M6 4h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                    </svg>
                </div>
                <h2 class="text-2xl font-semibold text-gray-800 mb-3">Data Analytics</h2>
                <p class="text-gray-700">
                    Transform raw data into actionable insights, helping you make informed business decisions and drive growth.
                </p>
            </div>

            <!-- Service Card 6: IT Consulting -->
            <div class="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="text-indigo-600 mb-4">
                    <!-- Icon for IT Consulting -->
                    <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.28-8.455-3.245M12 3c1.332 0 2.651.196 3.934.57a2.502 2.502 0 00-.733-.57m.733.57c-1.332 0-2.651.196-3.934.57M12 3c-1.332 0-2.651.196-3.934.57a2.502 2.502 0 01.733-.57m-.733.57C8.668 3 7.349 3.196 6.066 3.57M12 3v18" />
                    </svg>
                </div>
                <h2 class="text-2xl font-semibold text-gray-800 mb-3">IT Consulting</h2>
                <p class="text-gray-700">
                    Expert guidance on technology strategy, infrastructure, and digital transformation to boost your business.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesPage', // Component name
    data() {
        return {
            // Data properties specific to this component can go here.
            // For example, if your services were fetched from an API:
            // services: []
        };
    },
    methods: {
        // Methods specific to this component can go here.
        // For example, a method to fetch services data:
        // fetchServices() {
        //   // Logic to fetch data
        // }
    },
    // You can also add lifecycle hooks here, e.g., to fetch data when the component is mounted:
    // mounted() {
    //   this.fetchServices();
    // }
};
</script>

<style scoped>
/* These styles are scoped to this component, meaning they only apply here. */
/* We import the Inter font here, as Tailwind typically handles most styling. */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Any custom CSS that cannot be expressed with Tailwind utility classes can go here. */
/* For example: */
/* .my-custom-class {
    border: 1px solid red;
} */
</style>
