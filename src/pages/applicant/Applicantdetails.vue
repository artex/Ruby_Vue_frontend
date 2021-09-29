<template>
  <div class="detail-container clearFix">
    <div class="left clearFix">
      <img class="detail-img" :src="applicant.profile_photo" alt="" />

      <div class="detail-name">{{ applicant.name }}</div>
      <div class="contact-data">
        <v-icon class="contact-icon">event_note</v-icon>
        <span>{{ dob }}</span>
      </div>
      <div class="contact clearFix">
        <h3 class="details-contact">CONTACT</h3>
        <div>
          <div class="contact-data-real clearFix">
            <v-icon class="icon-left contact-icon">phone</v-icon>
            <span class="icon-right">{{ applicant.phone_no1 }}</span>
          </div>
          <div class="contact-data-real clearFix">
            <v-icon class="icon-left contact-icon">phone</v-icon>
            <span class="icon-right">{{ applicant.phone_no2 }}</span>
          </div>
          <div class="contact-data-real clearFix">
            <v-icon class="icon-left contact-icon">email</v-icon>
            <span class="icon-right">{{ applicant.email }}</span>
          </div>
          <div class="contact-data-real clearFix">
            <v-icon class="icon-left contact-icon">home</v-icon>
            <span class="icon-right">{{ applicant.current_address }}</span>
          </div>
          <div class="contact-data-real clearFix">
            <v-icon class="icon-left contact-icon">location_city</v-icon>
            <span class="icon-right">{{ applicant.hometown_address }}</span>
          </div>
        </div>
      </div>
      <div class="language-skills">
        <h3 class="details-contact">
          <v-icon class="contact-icon">language</v-icon>Language Skills
        </h3>
        <div class="contact-data-real clearFix">
          <span class="language-title icon-left1">English</span>
          <span class="language-data icon-right1">{{ applicant.english }}</span>
        </div>
        <div class="contact-data-real clearFix">
          <span class="language-title icon-left1">Japanese</span>
          <span class="language-data icon-right1">{{ applicant.japanese }}</span>
        </div>
        <div class="contact-data-real clearFix">
          <span class="language-title icon-left1">Others</span>
          <span class="language-data icon-right1">{{ applicant.other }}</span>
        </div>
      </div>
    </div>
    <div class="right clearFix">
      <div class="education">
        <h2 class="details-contact">
          <v-icon class="contact-icon">school</v-icon>EDUCATION
        </h2>
        <div class="contact-data clearFix">
          <span class="education-title">Bachelor University</span>
          <span class="education-data">{{
            applicant.bachelor_university
          }}</span>
        </div>
        <div class="contact-data clearFix">
          <span class="education-title">Bachelor Year</span>
          <span class="education-data">{{ applicant.bachelor_year }}</span>
        </div>
        <div class="contact-data clearFix">
          <span class="education-title">Bachelor Degree</span>
          <span class="education-data">{{ applicant.bachelor_degree }}</span>
        </div>
        <div class="contact-data clearFix">
          <span class="education-title">Master University</span>
          <span class="education-data">{{ applicant.master_university }}</span>
        </div>
        <div class="contact-data clearFix">
          <span class="education-title">Master Year</span>
          <span class="education-data">{{ applicant.master_year }}</span>
        </div>
        <div class="contact-data clearFix">
          <span class="education-title">Master Degree</span>
          <span class="education-data">{{ applicant.master_degree }}</span>
        </div>
      </div>
      <div class="diploma-certification">
        <h2 class="details-contact">Diploma and Certifications</h2>
        <div class="contact-data clearFix">
          <span class="education-title">Diploma Name</span>
          <span class="education-data">{{ applicant.diploma_name }}</span>
        </div>
        <div class="contact-data clearFix">
          <span class="education-title">Certifications</span>
          <span class="education-data">{{ applicant.certificate }}</span>
        </div>
      </div>
      <div class="job-experience">
        <h2 class="details-contact">Job Experience</h2>
        <div class="contact-data clearFix">
          <span class="education-title">Internship Info</span>
          <span class="education-data">{{ applicant.diploma_name }}</span>
        </div>
        <div class="contact-data clearFix">
          <span class="education-title">Job Experience</span>
          <span class="education-data">{{ applicant.job_experience }}</span>
        </div>
        <div class="contact-data clearFix">
          <span class="education-title">Total Experience Years</span>
          <span class="education-data">{{ applicant.total_exp_year }}</span>
        </div>
      </div>
      <div class="programming-skill">
        <h2 class="details-contact">Programming Skills</h2>
        <div class="contact-data clearFix">
          <span class="education-data">{{ applicant.programming }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../../services/applicant/applicant-details.js"></script>

<style scoped src="../../assets/css/pages/applicant/applicant-details.css"></style>
