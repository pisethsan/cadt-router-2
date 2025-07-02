<!-- src/components/CareerPage.vue -->
<template>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h1 class="text-4xl font-bold mb-8 text-center">Join Our Team!</h1>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold mb-4">Why Work With Us?</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-medium mb-2">Innovative Environment</h3>
          <p class="text-gray-700">We foster a culture of creativity and continuous learning.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-medium mb-2">Growth Opportunities</h3>
          <p class="text-gray-700">Invest in your career with professional development and clear paths for advancement.</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-semibold mb-4">Current Openings</h2>
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h3 class="text-xl font-medium">Frontend Developer</h3>
            <p class="text-gray-600">Vue.js, Tailwind CSS</p>
          </div>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Apply Now</button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h3 class="text-xl font-medium">Backend Engineer</h3>
            <p class="text-gray-600">Node.js, Express, MongoDB</p>
          </div>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Apply Now</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CareerPage',
}
</script>