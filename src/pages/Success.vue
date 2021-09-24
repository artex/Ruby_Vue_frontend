<template>
    <div>
        <h1 class="confirm">Your Data Sent Successfuly</h1>
        <div class="btn">
        <v-btn
            color="error"
            class="mr-4"
            @click="clear"
        >
        Cancel
        </v-btn>
        </div>  
    </div>
</template>
<script>

export default({
    methods: {
        clear() {
            this.$router.push({ name: "home" });
        }
    }
})
</script>
