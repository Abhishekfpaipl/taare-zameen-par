<template>
    <div class="bg-light position-fixed top-0 w-100 d-flex justify-content-between align-items-center border-bottom px-md-4 px-2"
        style="z-index: 999;">
        <div class="p-2">
            <div class="flex-fill d-flex align-items-center">
                <router-link to="/" class="text-decoration-none d-flex align-items-center">
                    <img :src="brandLogo" alt="Brand Logo" style="height: 50px; object-fit: contain;">
                </router-link>
                <div class="d-flex flex-column align-items-start" :style="{ color: brandColorOne }">
                    <span v-if="brandName" class="text-uppercase fs-4 fw-bold lh-1">{{ brandName
                        }}</span>
                    <small class="smaller">{{ brandTagLine }}</small>
                </div>
            </div>
        </div>
        <div class="flex-fill d-none d-md-flex gap-3 justify-content-end me-3">
            <router-link :to="link.link" class="text-decoration-none text-dark" v-for="(link, index) in brandLinks"
                :key="index">{{ link.name }}</router-link>
        </div>
        <div class="d-none d-md-flex justify-content-center align-items-center rounded-pill border px-2">
            <i class="bi bi-person-circle fs-3"></i>
            <span class="ms-2">Login</span>
        </div>

        <i class="bi bi-list border rounded p-1 px-2 fs-5 d-md-none" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <ul class="list-group list-group-flush">
                    <router-link :to="link.link" class="list-group-item border-bottom"
                        v-for="(link, index) in brandLinks" :key="index">{{ link.name }}
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        brandColorOne: {
            type: String,
            required: true
        },
        brandLogo: {
            type: String,
            required: true
        },
        brandName: {
            type: String,
            required: true
        },
        brandTextColor: {
            type: String,
            required: true
        },
        brandLinks: {
            type: Array,
            required: true
        },
        brandTagLine: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
