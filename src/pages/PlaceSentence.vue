<template>
    <div>
        <NavBar brandColorOne="#125252" brandTextColor="#77E6B5" brandLogo="/img/logo.svg" brandName="workwity"
            brandTagLine="Your Productivity Partner" :brandLinks="topLinks" />
        <div class="" style="padding-top: 70px; background-color:#125252 ">
            <div class="container mb-3 py-5">
                <label for="categorySelect" class="form-label text-white fs-4">Filter by Category</label>
                <select v-model="selectedCategory" class="form-select" id="categorySelect">
                    <option value="">All Categories</option>
                    <option v-for="category in categoriesList" :key="category" :value="category">{{ category }}</option>
                </select>
            </div>
        </div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 my-5">
                <div class="col" v-for="(sentence, index) in filteredSentences" :key="index">
                    <div class="card text-decoration-none">
                        <div class="card-body p-0">
                            <h6 class="card-title text-capitalize border-bottom p-2" style="min-height: 6rem;"
                                :style="{ backgroundColor: randomColors[index] }">{{ sentence }}</h6>
                            <p class="card-text p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                                repellat!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    components: {
        NavBar,
    },
    data() {
        return {
            customerList: ["men", "women", "children", "mother", "father", "student", "professional", "executive", "adult", "all types of people", "athlete", "other"],
            categoriesList: [
                'Body Massage Centres', 'Cinema Halls', 'Schools', 'Beauty Spas', 'Dermatologists', 'Hospitals', 'Malls',
                'Gyms', 'Beauty Parlours', 'Estate Agents', 'Banquet Halls', 'ENT Doctors', 'Book Shops', 'Bike On Rent',
                'Sexologist Doctors', 'Neurologists', 'Gynaecologist & Obstetrician Doctors', 'Train Ticket Booking Agents',
                'Travel Agents', 'Paying Guest Accommodations', 'General Physician Doctors', 'Dentists', 'Orthopaedic Doctors',
                'Chemists', 'Motor Training Schools', 'Gastroenterologists', 'Car Rental', 'Salons', 'Courier Services',
                'Dance Classes', 'Pathology Labs', 'Taxi Services', 'Cake Shops', 'AC Repair & Services', 'Mobile Phone Dealers',
                'Pet Shops', 'Dmart', 'Packers And Movers', 'Psychiatrists', 'Dharamshalas', 'Urologist Doctors', 'Bakeries',
                'Bicycle Dealers', 'Coffee Shops', 'Paediatricians', 'Sonography Centres', 'Yoga Classes', 'Hostels',
                'Cardiologists', 'Electrical Shops', 'Skin Care Clinics', 'Diagnostic Centres', 'Homeopathic Doctors',
                'Physiotherapists', 'Photo Studios', 'Plumbers', 'Music Classes', 'Electricians', 'Sports Goods Dealers',
                'Shoe Dealers', 'Hair Stylists', 'Gift Shops', 'Ophthalmologists', 'Car Repair & Services', 'Ayurvedic Doctors',
                'Eye Clinics', 'Restaurants', 'Carpenters', 'Jewellery Showrooms', 'Cooks On Hire', 'Stationery Shops',
                'Nephrologists', 'Caterers', 'Interior Designers', 'Rehabilitation Center', 'Grocery Stores', 'Banks', 'ATM',
                '5 Star Hotels', 'Hotels', 'Resorts', 'Plastic Surgeons', 'Smart Watch Dealers', 'Drug De Addiction Centres'
            ],
            servicesList: [
                "Product", "Services"
            ],
            title: this.$route.params.place,
            sentences: [],
            randomColors: [],
            selectedCategory: ''
        };
    },
    mounted() {
        this.generateSentences();
        this.assignRandomColors();
    },
    methods: {
        generateSentences() {
            this.servicesList.forEach(service => {
                this.customerList.forEach(customer => {
                    this.categoriesList.forEach(category => {
                        const sentence = `We are offering ${service} to ${customer} from ${category} in ${this.title}.`;
                        this.sentences.push(sentence);
                    });
                });
            });
        },
        assignRandomColors() {
            this.randomColors = this.sentences.map(() => this.getRandomLightColor());
        },
        getRandomLightColor() {
            const letters = 'BCDEF'; // Letters corresponding to light colors
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * letters.length)];
            }
            return color;
        }
    },
    computed: {
        filteredSentences() {
            if (!this.selectedCategory) {
                return this.sentences;
            }
            return this.sentences.filter(sentence => sentence.includes(this.selectedCategory));
        }
    },
    watch: {
        sentences() {
            this.assignRandomColors();
        },
        selectedCategory() {
            this.assignRandomColors();
        }
    }
};
</script>