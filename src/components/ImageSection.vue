<template>
    <div class="container-fluid" :style="{backgroundColor : brandColorOne}">
        <div class="row p-3">
            <div class="col-12">
                <img :src="banner" alt="Cover Image" style="width:50%;">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ImageSection', 
    props:{
        banner: {
            type: String,
            required: true
        },
        brandColorOne: {
            type: String,
            required: true
        },
        brandTextColor: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
   
}
</script> 