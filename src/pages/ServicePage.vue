<template>
    <div>
        <NavBar brandColorOne="#125252" brandTextColor="#77E6B5" brandLogo="/img/logo.svg" brandName="workwity"
            brandTagLine="Your Productivity Partner" :brandLinks="topLinks" />
        <div class="my-5">
            <FormBanner brandColorOne="#125252" brandName="work wity" :service="services" :category="category"
                :place="place" v-observe />
        </div> 
        <div class="">
            <LeadManagement :values="links" :title="'Factors, you will love'" v-observe />
        </div>
        <div class="">
            <AutoScrolling v-observe />
        </div>
        <div class="">
            <TempCustomers :reviews="customers" title="our customers" v-observe />
        </div>
        <div class="">
            <Faq :questions="questions" v-observe />
        </div>
        <div class="">
            <Counter service="Website Development" :serviceCount="2000" category="India" :categoryCount="1500"
                place="All over the world" :placeCount="5000" v-observe />
        </div>
        <div class="">
            <OurService v-observe />
        </div>
        <div class="">
            <FameFoot service="Website Development" :category="null" :place="null" v-observe />
        </div>
    </div>
    <p></p>
    <FooterBar />
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import LeadManagement from '@/components/services/LeadManagement.vue'
import FooterBar from '@/components/services/FooterBar.vue'
import OurService from '@/components/services/OurService.vue'
import TempCustomers from '@/components/TempCustomers.vue';
import Faq from '@/components/services/FaqSection.vue';
import FameFoot from '@/components/services/FameFoot.vue';
import FormBanner from '@/components/services/FormBanner.vue';
import Counter from '@/components/services/SalesCounter.vue';
import AutoScrolling from '@/components/services/AutoScrolling.vue';
export default {
    name: "WebsiteDevelopmentPage",
    components: {
        NavBar,
        LeadManagement,
        FooterBar,
        OurService,
        FormBanner,
        TempCustomers,
        Faq,
        Counter,
        FameFoot,
        AutoScrolling,
    },
    data() {
        return {
            services: '',
            category: '',
            tagTest: '',
            place: '',
            links: [
                {
                    id: 1,
                    icon: 'bi-palette fs-4',
                    title: "Custom Website Design",
                    description: "Tailored designs to fit your unique brand identity.",
                },
                {
                    id: 2,
                    icon: 'bi-phone-landscape fs-4',
                    title: "Responsive Web Development",
                    description: "Optimized for seamless experiences on all devices.",
                },
                {
                    id: 3,
                    icon: 'bi-file-earmark-code fs-4',
                    title: "Content Management System (CMS) Integration",
                    description: "Efficient CMS solutions for easy content updates.",
                },
                {
                    id: 4,
                    icon: 'bi-cart fs-4',
                    title: "E-commerce Development",
                    description: "Robust online stores to boost your sales.",
                },
                {
                    id: 5,
                    icon: 'bi-code-slash fs-4',
                    title: "Custom Web Application Development",
                    description: "Bespoke applications to meet your business needs.",
                },
                {
                    id: 6,
                    icon: 'bi-graph-up fs-4',
                    title: "SEO and Performance Optimization",
                    description: "Enhance visibility and speed for better rankings.",
                },
                {
                    id: 7,
                    icon: 'bi-tools fs-4',
                    title: "Website Maintenance and Support",
                    description: "Reliable support to keep your site running smoothly.",
                },
                {
                    id: 8,
                    icon: 'bi-plug fs-4',
                    title: "Integration with Third-party Services",
                    description: "Seamlessly connect with essential external tools.",
                },
            ],
            questions: [
                {
                    id: 1,
                    question: "What is web hosting, and why do I need it?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 2,
                    question: "What is a domain name, and how do I choose one?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 3,
                    question: "How much will it cost to build and maintain a website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 4,
                    question: "Are there any hidden costs I should be aware of?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 5,
                    question: "How will people find my website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 6,
                    question: "How do I ensure my website is secure?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 7,
                    question: "What is user experience (UX), and why is it important?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 8,
                    question: "What if I need to make changes to my website in the future?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 9,
                    question: "Do I need professional content writing and design services?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 10,
                    question: "How long will it take to build my website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
            ],
            customers: [
                {
                    id: 1,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Ram',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "We initially thought Saleswik was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend Saleswik to everyone!"
                },
                {
                    id: 2,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Shyam',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend Zoho Saleswik for any micro business."
                },
                {
                    id: 3,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Nikhil',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all."
                },
                {
                    id: 4,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Abhishek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The general idea was to keep everything in one place and at an affordable price, and Saleswik was very accessible that way, and with the ability to expand without switching CRMs."
                },
                {
                    id: 5,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Rajan',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses."
                },
                {
                    id: 6,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Yogesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik has been really helpful for us to keep a track on contacts and deals. Since we are small team, Saleswik was so user-friendly that we were able to start using from week 1 of our trial."
                },
                {
                    id: 7,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Lokesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But Saleswik is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it."
                },
                {
                    id: 8,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Bhasker',
                    company: 'XYz Pvt Ltd',
                    rating: '3.5',
                    text: "As vendor and customers needed order visibility, we wanted to automate the entire business and found only Saleswik to be the best suited in terms of integration."
                },
                {
                    id: 9,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vivek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has stayed true to its value proposition—a CRM tailored for small businesses and startups."
                },
                {
                    id: 10,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Ankit',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since the implementation of Saleswik, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!"
                },
                {
                    id: 11,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Karan',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The mobile app of Saleswik increases productivity on a whole different level. As a small business, it gives us the edge over our competitors and we're very happy to use Saleswik!"
                },
                {
                    id: 12,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Rajat',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "Saleswik helps me stay on track, lets me know where I am at any point of time and what I need to do to reach where I really want to go!"
                },
                {
                    id: 13,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Ajay',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since I started using Saleswik, no lead has been lost. The student conversion rate has increased by 25 percent, to 30 percent."
                },
                {
                    id: 14,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Vikas',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has helped us to decentralize information. Now all the team has access to the documents and sales information. We no longer have the problem that some documents is stored on the PC of a teammate who is not accessible at the time."
                },
            ],
            topLinks: [
                {
                    id: 1,
                    name: 'Home',
                    link: '/'
                },
                {
                    id: 2,
                    name: 'Services',
                    link: '/services'
                },
                {
                    id: 3,
                    name: 'About',
                    link: '/about'
                },
                {
                    id: 4,
                    name: 'Contact',
                    link: '/contact'
                },
                {
                    id: 5,
                    name: 'Blog',
                    link: '/blog'
                },
                {
                    id: 6,
                    name: 'Pricing',
                    link: '/pricing'
                },
                {
                    id: 7,
                    name: 'FAQ',
                    link: '/faq'
                },
                {
                    id: 8,
                    name: 'Blog',
                    link: '/blog'
                },
                {
                    id: 9,
                    name: 'Careers',
                    link: '/careers'
                },
            ]
        }
    },
    // created() {
    //     // Log the route params to debug
    //     console.log('Route params:', this.$route.params);
    //     // Extract the route parameter by the correct name
    //     const routeParam = this.$route.params.title; // Use 'slug' if that is the parameter name
    //     if (routeParam) {
    //         // Set services based on the route parameter
    //         this.services = routeParam;
    //     } else {
    //         console.error('Route parameter "title" is undefined');
    //     }
    // }, 
    created() {
        // Log the route params to debug
        console.log('Route params:', this.$route.params);
        
        // Extract the route parameter by the correct name
        const routeParam = this.$route.params.title; // Use 'slug' if that is the parameter name
        if (routeParam) {
            // Set tagTest based on the route parameter
            switch (routeParam) {
                case 'we-are-offering-product-and-services':
                    this.tagTest = 'We are offering product and services';
                    this.services = this.$route.params.name
                    break;
                case 'we-are-loved-by-peoples':
                    this.tagTest = 'We are loved by peoples';
                    break;
                case 'we-are-working-for-industries':
                    this.tagTest = 'We are working for industries';
                    break;
                case 'we-are-working-in-cities':
                    this.tagTest = 'We are working in cities';
                    break;
                default:
                    this.tagTest = ''; // Handle default case if needed
                    break;
            }
        } else {
            console.error('Route parameter "title" is undefined');
        }
    }, 
}
</script> 