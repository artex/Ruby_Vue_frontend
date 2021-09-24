<template>
    <div class="detail-container clearFix">
        <div class="left clearFix">
            <img class="detail-img" :src="applicant.profile_photo" alt="">
                
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
                <h3 class="details-contact"><v-icon class="contact-icon">language</v-icon>Language Skills</h3>
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
                <h2 class="details-contact"><v-icon class="contact-icon">school</v-icon>EDUCATION</h2>
                <div class="contact-data clearFix">
                    <span class="education-title">Bachelor University</span>
                    <span class="education-data">{{ applicant.bachelor_university }}</span>
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

<script>
import axios from "axios"
    export default {
        data(){
        return{
            applicant:{},
            dob: ""
        }
        },
        created() {

        axios.get(`/api/applicant/detail?id=${this.$route.params.id}`)
            .then(applicantData => {
            // console.log("hello")
            this.applicant = applicantData.data.applicant
            this.dob = applicantData.data.dob
            })
            .catch()

    },
    }
    
    
</script>

<style>
.clearFix:after {
    content: "";
    clear: both;
	display: block;
	visibility: hidden;
	font-size: 0;
	height: 0;
}
.contact{
    margin: 20px 0;
}
.contact-icon{
    padding-right: 10px;
}
.contact-icon2{
    padding-right: 30px;
}
.detail-container{
    width: 85%;
    margin: 0 auto;
    background-color: #F6F6F6;
    border: 2px solid #F6F6F6;
}
.left{
    float: left;
    width: 35%;
    padding-top: 50px;

    text-align: center;
}
.right{
    padding-top: 10px;
    width: 65%;
    float: right;
    background-color: white;
}
.detail-img{
    width: 200px;
    height: 200px;
    border-radius: 60%;
}
.detail-name{
    padding: 20px 0 5px 0;
    font-size: 23px;
    letter-spacing: 2.5px;
    font-weight: bold;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;

    border-bottom: 1px solid black;
    text-align: center;
}
.contact-data{
    padding: 10px;
}
.details-contact{
    padding: 20px 0 10px 0;
    width: 60%;
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid black;
}
.education,
.diploma-certification,
.job-experience,
.programming-skill{
    width: 90%;
    margin: 0 auto;
}
.education-title{
    font-size: 19px;
    font-weight: bold;
    padding-left: 10px;
    width: 35%;
    float: left;
}
.education-data{
    width: 65%;
    font-size: 18px;
    padding-left: 30px;
    float: left;
}
.language-title{
    font-size: 18px;
    font-weight: bold;
    width: 20%;
    text-align: left;
}
.language-data{
    width: 70%;
    font-size: 18px;
    padding-left: 30px;
}
</style>