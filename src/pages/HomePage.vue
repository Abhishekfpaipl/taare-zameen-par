<template>
  <div class="">
    <TemplateTwo v-observe />
  </div>
</template>

<script>
import TemplateTwo from '@/components/TemplateTwo.vue'
export default {
  name: "HomePage",
  components: {
    TemplateTwo,
  },
};
</script>
