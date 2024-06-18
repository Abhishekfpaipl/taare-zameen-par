<template>
    <div>
        <NavBar brandColorOne="#125252" brandTextColor="#77E6B5" brandLogo="/img/logo.svg" brandName="workwity"
            brandTagLine="Your Productivity Partner" :brandLinks="topLinks" />
        <div class="my-5">
            <FormBanner brandColorOne="#125252" brandName="work wity" :service="services" :category="category"
                :place="place" v-observe />
        </div>
        <div class="">
            <BusinessCard />
        </div>
    </div>
    <FooterBar/>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import FormBanner from '@/components/services/FormBanner.vue';
import BusinessCard from '@/components/BusinessCard.vue';
import FooterBar from '@/components/services/FooterBar.vue';
export default {
    name: "BusinessPage",
    components: {
        NavBar,
        FormBanner,
        BusinessCard,
        FooterBar,
    },
}
</script>
<style lang="">

</style>