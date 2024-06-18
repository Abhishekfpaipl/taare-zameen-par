<template>
  <div class="container py-3">
    <p class="px-2 py-3 text-center mb-3">
      <span class="fs-2">~ About Us ~</span>
    </p>
    <div class="text-end d-flex justify-content-end gap-3">
      <i class="bi bi-chevron-left fs-1" @click="scrollLeft"></i>
      <i class="bi bi-chevron-right fs-1" @click="scrollRight"></i>
    </div>
    <div class="d-flex gap-3 overflow-x-scroll" id="scroll" ref="scrollContainer">
      <div class="" v-for="(custom, index) in customFields" :key="index">
        <div class="card" style="min-width: 18rem; min-height: 12rem">
          <div class="card-body p-0">
            <h5 class="card-title border-bottom py-3 bg-light">{{ custom.name }}</h5>
            <p class="card-text px-2 overflow-scroll" id="scroll">{{ custom.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSection',
  props: ['customFields'],
  methods: {
  scrollLeft() {
    const container = this.$refs.scrollContainer;
    const scrollWidth = container.clientWidth;
    const newScrollLeft = Math.max(container.scrollLeft - scrollWidth);

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  },
  scrollRight() {
    const container = this.$refs.scrollContainer;
    const scrollWidth = container.clientWidth;
    const maxScrollLeft = container.scrollWidth - scrollWidth;
    const newScrollLeft = Math.min(container.scrollLeft + scrollWidth, maxScrollLeft);

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  }
}
}
</script>

<style scoped>
.card-text {
  max-height: 12rem;
  /* Adjust as needed */
  overflow-y: auto;
}

#scroll::-webkit-scrollbar {
  display: none;
}
</style>
