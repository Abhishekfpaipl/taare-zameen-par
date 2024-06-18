<template>
  <div class="">
    <TemplateDemo v-observe />
  </div>
</template>

<script>
import TemplateDemo from '@/components/TemplateDemo.vue'
export default {
  name: "HomePage",
  components: { 
        TemplateDemo,
    },
};
</script>
