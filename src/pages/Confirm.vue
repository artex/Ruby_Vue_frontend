<template>
  <div>
    <h1 class="confirm">Please Confirm Your Data Again!!</h1>
    <v-form ref="form" @submit.prevent="submit" lazy-validation>
      <div class="form">
        <v-toolbar-title class="confirmheader secondary">
          <span class="header-title">Personal Information</span>
        </v-toolbar-title>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <p class="title1">Name</p>
          <p class="data">{{ this.confirmData.name }}</p>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title2">Profile Photo</span>
          <span class="data"
            ><img
              v-if="
                this.$store.state.photofile &&
                  this.$store.state.photofile.length
              "
              :src="this.$store.state.photofile"
              style="width: 200px"
          /></span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Date Of Birth</span>
          <span class="data">{{ this.$store.state.applicant.date }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Phone Number</span>
          <span class="data">{{ this.$store.state.applicant.phone_no1 }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Phone Number 2</span>
          <span class="data">{{ this.$store.state.applicant.phone_no2 }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Email</span>
          <span class="data">{{ this.$store.state.applicant.email }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Current Address</span>
          <span class="data">{{
            this.$store.state.applicant.current_address
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Hometown Address</span>
          <span class="data">{{
            this.$store.state.applicant.hometown_address
          }}</span>
        </v-alert>
        <v-toolbar-title class="confirmheader secondary">
          <span class="header-title">Education Background</span>
        </v-toolbar-title>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Bachelor University</span>
          <span class="data">{{
            this.$store.state.applicant.bachelor_university
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Bachelor Year</span>
          <span class="data">{{
            this.$store.state.applicant.bachelor_year
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Bachelor Degree</span>
          <span class="data">{{
            this.$store.state.applicant.bachelor_degree
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Master University</span>
          <span class="data">{{
            this.$store.state.applicant.master_university
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Master Year</span>
          <span class="data">{{
            this.$store.state.applicant.master_year
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Master Degree</span>
          <span class="data">{{
            this.$store.state.applicant.master_degree
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Diploma Name</span>
          <span class="data">{{
            this.$store.state.applicant.diploma_name
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Other Certification</span>
          <span class="data">{{
            this.$store.state.applicant.certificate
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Programming Skills</span>
          <span class="data"
            >{{ this.$store.state.applicant.programming_language }}:{{
              this.$store.state.applicant.programming_level
            }}</span
          >
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">English Skills</span>
          <span class="data">{{ this.$store.state.applicant.english }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Japanese Skills</span>
          <span class="data">{{ this.$store.state.applicant.japanese }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Other Skills</span>
          <span class="data">{{ this.$store.state.applicant.other }}</span>
        </v-alert>
        <v-toolbar-title class="confirmheader secondary">
          <span class="header-title">Experience</span>
        </v-toolbar-title>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Internship Info</span>
          <span class="data">{{
            this.$store.state.applicant.internship_info
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Job Experience</span>
          <span class="data">{{
            this.$store.state.applicant.job_experience
          }}</span>
        </v-alert>
        <v-alert
          border="left"
          colored-border
          color="secondary accent-4"
          elevation="2"
        >
          <span class="title1">Total Experience Year</span>
          <span class="data">{{
            this.$store.state.applicant.total_exp_year
          }}</span>
        </v-alert>
      </div>
      <div class="btn">
        <v-btn color="error" class="mr-4" @click="clear">
          Cancel
        </v-btn>
        <v-btn type="submit" color="success" class="mr-4">
          Confirm
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script src="../services/pages/Confirm.js"></script>

<style src="../assets/css/pages/confirm.css"></style>
