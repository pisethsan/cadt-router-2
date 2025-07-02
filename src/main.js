import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'

import { createI18n } from 'vue-i18n'

/**
 * About
Register
User
Services
Projects
Setting
 */
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            hello: 'hello world',
            about: 'About',
            register: 'Register',
            users: 'User',
            services: 'Services',
            projects: 'Projects',
            setting: 'Setting',
            careers: 'Careers',
            history: 'History',
            project: 'Project',
            sell: 'Sell',
            //register
            user_information: 'User Information',
            name: 'Name',
            enter_your_name: 'Enter your name',
            email: 'Email',
            enter_your_email: 'Enter your email',
            age: 'Age',
            enter_your_age: 'Enter your age',
            submit: 'Submit',
            submitting: 'Submitting...',
        },
        khm: {
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            users: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            projects: 'គម្រោង',
            setting: 'ការកំណត់',
            careers: 'ការងារ',
            history: 'ប្រវិត្ដ',
            project: 'គម្រោង',
            sell: 'លក់',
            //register
            user_information: 'អំពីអ្នកប្រើប្រាស់',
            name: 'ឈ្មោះ',
            enter_your_name: 'បញ្ចូលឈ្មោះ',
            email: 'អ៊ីម៉ែល',
            enter_your_email: 'បញ្ចូលអ៊ីម៉ែល',
            age: 'អាយុ',
            enter_your_age: 'បញ្ចូលអាយុ',
            submit: 'បញ្ចូល',
            submitting: 'កំពុងបញ្ចូល',

        }
    }
}
)

const app = createApp(App)
app.use(router)
app.use(i18n)


app.mount('#app')