<template>
    <div class="container my-5">
        <h1 class="my-4 text-center text-capitalize">We are offering product and services</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
            <div class="col" v-for="(service, index) in services" :key="index">
                <router-link :to="'/service/' + service.name" class="card text-decoration-none">
                    <img :src="service.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-capitalize">{{ service.name }}</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat!
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </router-link>
            </div>
        </div>
        <h1 class="my-4 text-center text-capitalize">we are loved by peoples</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
            <div class="col" v-for="(customer, index) in customers" :key="index">
                <router-link :to="'/customer/' + customer" class="card text-decoration-none">
                    <p class="card-header text-capitalize">{{ customer }}</p>
                    <div class="card-body">
                        <p class="card-text text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Alias, cupiditate.</p>
                    </div>
                </router-link>
            </div>
        </div>
        <h1 class="my-4 text-center text-capitalize">We are working for Categories</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
            <div class="col" v-for="(category, index) in categories" :key="index">
                <router-link :to="'/category/' + category" class="card text-decoration-none">
                    <p class="card-header text-capitalize">{{ category }}</p>
                    <div class="card-body">
                        <p class="card-text text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Alias, cupiditate.</p>
                        <a href="#" class="btn btn-primary">More</a>
                    </div>
                </router-link>
            </div>
        </div>
        <h1 class="my-4 text-center text-capitalize">we are working in cities</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
            <div class="col" v-for="(place, index) in places" :key="index">
                <router-link :to="'/place/' + place" class="card text-decoration-none">
                    <p class="card-header text-capitalize border-0">{{ place }}</p>
                    <!-- <div class="card-body">
                        <p class="card-text text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Alias, cupiditate.</p>
                        <a href="#" class="btn btn-primary">More</a>
                    </div> -->
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MiniFooter",
    data() {
        return {
            services: [
                { name: "Product", image: "img/template1.png", },
                { name: "Services", image: "img/template1.png", },
            ],
            customers: ["men", "women", "children", "mother", "father", "student", "professional", "executive", "adult", "all types of people", "athlete", "other"],
            categories: [
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
            places: [
                'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur',
                'Chandigarh', 'Coimbatore', 'Lucknow', 'Surat', 'Indore', 'Patna', 'Nagpur', 'Ernakulam', 'Bhopal',
                'Vadodara', 'Ludhiana', 'Kanpur', 'Nashik', 'Varanasi', 'Visakhapatnam', 'Rajkot', 'Raipur-Chhattisgarh',
                'Vijayawada', 'Madurai', 'Ranchi', 'Goa', 'Thiruvananthapuram', 'Bhubaneshwar', 'Allahabad',
                'Aurangabad-Maharashtra', 'Dehradun', 'Mysore', 'Trichy', 'Guwahati', 'Agra', 'Kozhikode', 'Jodhpur',
                'Thrissur', 'Kolhapur', 'Salem', 'Meerut', 'Mangalore', 'Gorakhpur', 'Jabalpur', 'Jalandhar', 'Gwalior'
            ],
            links: [
                {
                    id: 1,
                    name: "We are offering product and services",
                    sublinks: [
                        // {name: "Product", slug: "we-are-offering-product-and-services"},{name: "Services", slug: "we-are-offering-product-and-services"},
                        "Product", "Services"
                    ]
                },
                {
                    id: 2,
                    name: 'we are loved by peoples',
                    sublinks: [
                        "men", "women", "children", "mother", "father", "student", "professional", "executive", "adult", "all types of people", "athlete", "other"
                    ]
                },
                {
                    id: 3,
                    name: "We are working for Categories",
                    sublinks: [
                        'Body Massage Centres',
                        'Cinema Halls', 'Schools', 'Beauty Spas', 'Dermatologists', 'Hospitals', 'Malls',
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
                },
                {
                    id: 4,
                    name: "we are working in cities",
                    route: "/place/",
                    sublinks: [
                        'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur',
                        'Chandigarh', 'Coimbatore', 'Lucknow', 'Surat', 'Indore', 'Patna', 'Nagpur', 'Ernakulam', 'Bhopal',
                        'Vadodara', 'Ludhiana', 'Kanpur', 'Nashik', 'Varanasi', 'Visakhapatnam', 'Rajkot', 'Raipur-Chhattisgarh',
                        'Vijayawada', 'Madurai', 'Ranchi', 'Goa', 'Thiruvananthapuram', 'Bhubaneshwar', 'Allahabad',
                        'Aurangabad-Maharashtra', 'Dehradun', 'Mysore', 'Trichy', 'Guwahati', 'Agra', 'Kozhikode', 'Jodhpur',
                        'Thrissur', 'Kolhapur', 'Salem', 'Meerut', 'Mangalore', 'Gorakhpur', 'Jabalpur', 'Jalandhar', 'Gwalior'
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="">

</style>