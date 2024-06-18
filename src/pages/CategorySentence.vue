<template>
  <div>
    <NavBar brandColorOne="#125252" brandTextColor="#77E6B5" brandLogo="/img/logo.svg" brandName="workwity"
      brandTagLine="Your Productivity Partner" :brandLinks="topLinks" />
    <div class="" style="padding-top: 70px; background-color:#125252 ">
      <div class="container mb-3 py-5">
        <label for="categorySelect" class="form-label text-white fs-4">Filter by Customers</label>
        <select v-model="selectedCategory" class="form-select" id="categorySelect">
          <option value="">All Customers</option>
          <option v-for="category in customerList" :key="category" :value="category">{{ category }}</option>
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
      servicesList: ["Product", "Services"],
      customerList: ["men", "women", "children", "mother", "father", "student", "professional", "executive", "adult", "all types of people", "athlete", "other"],
      placesList: [
        'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur',
        'Chandigarh', 'Coimbatore', 'Lucknow', 'Surat', 'Indore', 'Patna', 'Nagpur', 'Ernakulam', 'Bhopal',
        'Vadodara', 'Ludhiana', 'Kanpur', 'Nashik', 'Varanasi', 'Visakhapatnam', 'Rajkot', 'Raipur-Chhattisgarh',
        'Vijayawada', 'Madurai', 'Ranchi', 'Goa', 'Thiruvananthapuram', 'Bhubaneshwar', 'Allahabad',
        'Aurangabad-Maharashtra', 'Dehradun', 'Mysore', 'Trichy', 'Guwahati', 'Agra', 'Kozhikode', 'Jodhpur',
        'Thrissur', 'Kolhapur', 'Salem', 'Meerut', 'Mangalore', 'Gorakhpur', 'Jabalpur', 'Jalandhar', 'Gwalior'
      ],
      title: this.$route.params.name,
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
          this.placesList.forEach(place => {
            const sentence = `We are offering ${service} to ${customer} from ${this.title} in ${place}.`;
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

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>