<template>
  <div class="detail-container clearFix">
    <div class="left clearFix">
      <img class="detail-img" :src="applicant.profile_photo" alt="" />

      <div class="detail-name">{{ applicant.name }}</div>
      <div class="contact-data">
        <v-icon class="contact-icon">event_note</v-icon>
        <span>{{ dob }}</span>
      </div>
      <div class="contact">
        <h3 class="details-contact">CONTACT</h3>
        <div>
          <div class="contact-data">
            <v-icon class="contact-icon">phone</v-icon>
            <span>{{ applicant.phone_no1 }}</span>
          </div>
          <div class="contact-data">
            <v-icon class="contact-icon">phone</v-icon>
            <span>{{ applicant.phone_no2 }}</span>
          </div>
          <div class="contact-datas">
            <v-icon class="contact-icon">email</v-icon>
            <span>{{ applicant.email }}</span>
          </div>
          <div class="contact-data">
            <v-icon class="contact-icon">home</v-icon>
            <span>{{ applicant.current_address }}</span>
          </div>
          <div class="contact-data">
            <v-icon class="contact-icon">location_city</v-icon>
            <span>{{ applicant.hometown_address }}</span>
          </div>
        </div>
      </div>
      <div class="language-skills">
        <h3 class="details-contact">
          <v-icon class="contact-icon">language</v-icon>Language Skills
        </h3>
        <div class="contact-data">
          <span class="language-title">English</span>
          <span class="language-data">{{ applicant.english }}</span>
        </div>
        <div class="contact-data">
          <span class="language-title">Japanese</span>
          <span class="language-data">{{ applicant.japanese }}</span>
        </div>
        <div class="contact-data">
          <span class="language-title">Others</span>
          <span class="language-data">{{ applicant.other }}</span>
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

<script src="../../services/post/post-details.js"></script>

<style scoped src="../../assets/css/pages/post/post-details.css"></style>
