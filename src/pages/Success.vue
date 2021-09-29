<template>
  <div>
    <h1 class="confirm">Your Data Sent Successfuly.</h1>
    <div class="btn">
      <v-btn color="error" class="mr-4" @click="successApplicant">
        BACK
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  methods: {

    /**
     * Back Btn to home page after sent data
     * @retrun void
     */
    successApplicant() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
