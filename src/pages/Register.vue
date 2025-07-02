<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
        <h2 class="font-moul text-xl font-bold text-gray-900 sm:text-3xl">
            {{ $t('user_information') }}
        </h2>
        <Form :validation-schema="validationSchema" @submit="handleSubmit" class="space-y-4">
            <!-- Name Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">
                    {{ $t('name') }}
                </label>
                <Field name="name" type="text" v-model="form.name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :placeholder="$t('enter_your_name') " />
                <ErrorMessage name="name" class="text-red-600 text-sm mt-1" />
            </div>

            <!-- Email Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">
                    {{ $t('email') }}
                </label>
                <Field name="email" type="email" v-model="form.email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :placeholder="$t('enter_your_email') "/>
                <ErrorMessage name="email" class="text-red-600 text-sm mt-1" />
            </div>

            <!-- Age Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">
                    {{ $t('age') }}
                </label>
                <Field name="age" type="number" v-model="form.age"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :placeholder="$t('enter_your_age') " />
                <ErrorMessage name="age" class="text-red-600 text-sm mt-1" />
            </div>

            <!-- Submit Button -->
            <button
          type="submit"
          :disabled="isLoading"
          class="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200 flex items-center justify-center"
        >
          <span v-if="isLoading" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ $t('submit...') }}
          </span>
          <span v-else>{{ $t('submit') }}</span>
        </button>
        </Form>
    </div>
</template>

<script>
import axios from 'axios';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'UserForm',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                age: ''
            },
            isLoading: false, // Added loading state
            successMessage: '', // Added success message state
            errorMessage: '', // Added error message state

            validationSchema: yup.object(
                {
                    name: yup.string().matches(/^[A-Za-z\s]+$/,
                        'Only alphabet and space is accepted'
                    )
                        .min(3, 'Name must be at least 3 characters')
                        .required('Name is required'),
                    email: yup.string().email('Invalid email').required('Email is required'),
                    age: yup.number().min(10, 'Minimum age of 10').max(120, 'Maximum age of 120').required('Age is required')
                })
        }
    },
    methods: {
        async handleSubmit() {
            console.log('Form submitted:', this.form)
            // Reset messages
            this.successMessage = '';
            this.errorMessage = '';

            // Set loading to true
            this.isLoading = true;
            // You can add validation or API calls here
            try {
                const response = await axios.post('https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users', {
                    name: this.form.name,
                    email: this.form.email,
                    age: this.form.age
                })
                console.log('Form submitted successfully:', response.data);
                this.form = {
                    name: '',
                    email: '',
                    age: ''
                };
                alert('User information submitted successfully!');
                this.$router.push('/users');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    }
}
</script>