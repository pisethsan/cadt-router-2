<!-- OrderHistoryPage.vue -->
<template>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 class="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">Your Order History</h1>
        <p class="text-xl text-gray-600 mb-8 max-w-7xl mx-auto">
            Review your past purchases and track their statuses.
        </p>

        <!-- Order List Container -->
        <div class="space-y-6">
            <!-- Order Item 1 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between text-left">
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Order ID:</p>
                    <p class="text-lg font-semibold text-gray-800">#ORD12345</p>
                </div>
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Date:</p>
                    <p class="text-lg font-semibold text-gray-800">2024-06-25</p>
                </div>
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Total:</p>
                    <p class="text-2xl font-bold text-green-600">$250.00</p>
                </div>
                <div class="flex flex-col items-start md:items-end md:w-1/3">
                    <p class="text-sm text-gray-500">Status:</p>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Delivered
                    </span>
                    <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm">
                        View Details
                    </button>
                </div>
            </div>

            <!-- Order Item 2 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between text-left">
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Order ID:</p>
                    <p class="text-lg font-semibold text-gray-800">#ORD12346</p>
                </div>
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Date:</p>
                    <p class="text-lg font-semibold text-gray-800">2024-06-20</p>
                </div>
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Total:</p>
                    <p class="text-2xl font-bold text-green-600">$120.50</p>
                </div>
                <div class="flex flex-col items-start md:items-end md:w-1/3">
                    <p class="text-sm text-gray-500">Status:</p>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Delivered
                    </span>
                    <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm">
                        View Details
                    </button>
                </div>
            </div>

            <!-- Order Item 3 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between text-left">
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Order ID:</p>
                    <p class="text-lg font-semibold text-gray-800">#ORD12347</p>
                </div>
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Date:</p>
                    <p class="text-lg font-semibold text-gray-800">2024-06-15</p>
                </div>
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Total:</p>
                    <p class="text-2xl font-bold text-yellow-600">$75.00</p>
                </div>
                <div class="flex flex-col items-start md:items-end md:w-1/3">
                    <p class="text-sm text-gray-500">Status:</p>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        Pending
                    </span>
                    <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm">
                        View Details
                    </button>
                </div>
            </div>

            <!-- Order Item 4 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between text-left">
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Order ID:</p>
                    <p class="text-lg font-semibold text-gray-800">#ORD12348</p>
                </div>
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Date:</p>
                    <p class="text-lg font-semibold text-gray-800">2024-06-10</p>
                </div>
                <div class="mb-4 md:mb-0 md:w-1/3">
                    <p class="text-sm text-gray-500">Total:</p>
                    <p class="text-2xl font-bold text-green-600">$340.00</p>
                </div>
                <div class="flex flex-col items-start md:items-end md:w-1/3">
                    <p class="text-sm text-gray-500">Status:</p>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Delivered
                    </span>
                    <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderHistoryPage', // Component name
    data() {
        return {
            // Example: You would typically fetch order data from an API here
            // orders: [
            //   { id: '#ORD12345', date: '2024-06-25', total: 250.00, status: 'Delivered' },
            //   { id: '#ORD12346', date: '2024-06-20', total: 120.50, status: 'Delivered' },
            //   { id: '#ORD12347', date: '2024-06-15', total: 75.00, status: 'Pending' },
            //   { id: '#ORD12348', date: '2024-06-10', total: 340.00, status: 'Delivered' },
            // ],
        };
    },
    methods: {
        // Example: A method to view order details, possibly navigating to a single order page
        // viewOrderDetails(orderId) {
        //   console.log(`Viewing details for order: ${orderId}`);
        //   // router.push({ name: 'OrderDetail', params: { id: orderId } });
        // }
    },
    // You can use lifecycle hooks to fetch data when the component is created or mounted
    // created() {
    //   // this.fetchOrders();
    // }
};
</script>

<style scoped>
/* These styles are scoped to this component, meaning they only apply here. */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Any custom CSS that cannot be expressed with Tailwind utility classes can go here. */
</style>
