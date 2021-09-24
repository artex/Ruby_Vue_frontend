<template>
    <div>
        <h1 class="confirm">Please Confirm Your Data Again!!</h1>
        <v-form ref="form" @submit.prevent="submit" lazy-validation > 
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
            <p class="data">{{ this.confirmData.name}}</p>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title2">Profile Photo</span>
            <span class="data"><img v-if="this.$store.state.photofile && this.$store.state.photofile.length" :src="this.$store.state.photofile" style="width: 200px"/></span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Date Of Birth</span>
            <span class="data">{{ this.$store.state.applicant.date}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Phone Number</span>
            <span class="data">{{ this.$store.state.applicant.phone_no1}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Phone Number 2</span>
            <span class="data">{{ this.$store.state.applicant.phone_no2}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Email</span>
            <span class="data">{{ this.$store.state.applicant.email}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Current Address</span>
            <span class="data">{{ this.$store.state.applicant.current_address}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Hometown Address</span>
            <span class="data">{{ this.$store.state.applicant.hometown_address}}</span>
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
            <span class="data">{{ this.$store.state.applicant.bachelor_university}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Bachelor Year</span>
            <span class="data">{{ this.$store.state.applicant.bachelor_year}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Bachelor Degree</span>
            <span class="data">{{ this.$store.state.applicant.bachelor_degree}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Master University</span>
            <span class="data">{{ this.$store.state.applicant.master_university}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Master Year</span>
            <span class="data">{{ this.$store.state.applicant.master_year}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Master Degree</span>
            <span class="data">{{ this.$store.state.applicant.master_degree}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Diploma Name</span>
            <span class="data">{{ this.$store.state.applicant.diploma_name}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Other Certification</span>
            <span class="data">{{ this.$store.state.applicant.certificate}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Programming Skills</span>
            <span class="data">{{ this.$store.state.applicant.programming_language}}:{{this.$store.state.applicant.programming_level}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">English Skills</span>
            <span class="data">{{ this.$store.state.applicant.english}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Japanese Skills</span>
            <span class="data">{{ this.$store.state.applicant.japanese}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Other Skills</span>
            <span class="data">{{ this.$store.state.applicant.other}}</span>
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
            <span class="data">{{ this.$store.state.applicant.internship_info}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Job Experience</span>
            <span class="data">{{ this.$store.state.applicant.job_experience}}</span>
            </v-alert>
            <v-alert
            border="left"
            colored-border
            color="secondary accent-4"
            elevation="2"
            >
            <span class="title1">Total Experience Year</span>
            <span class="data">{{ this.$store.state.applicant.total_exp_year}}</span>
            </v-alert>
            </div>
            <div class="btn">
                <v-btn
                    color="error"
                    class="mr-4"
                    @click="clear"
                >
                    Cancel
                </v-btn>    
                <v-btn
                    type="submit"
                    color="success"
                    class="mr-4"
                >
                Confirm
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>


export default {
    name: "Confirm",
    data(){
        return{
            name:""
        }
    },
    methods: {
        clear() {
            this.$store.dispatch("clear");
            this.$router.push({ name: "home" });
        },
        submit(){
            // console.log(this.aa)
            let formData = new FormData();
            if (this.confirmData) {
            formData.append("filename", this.confirmData.profile_photo );
            // console.log(this.confirmData.profile_photo.name)
            Object.entries(this.confirmData).forEach(([key, value]) => {
                formData.append(key, value);
            });
            formData.append("programming", this.confirmData.programming_language +":"+ this.confirmData.programming_level)
            formData.append("profile_photo", this.confirmData.profile_photo.name)
            }
            // console.log(formData);
            this.$store.dispatch("createPost", formData);
            this.$router.push({ name: "success" });
        }
    },
    computed:{
        confirmData(){
            // console.log(this.$store.state.applicant)
            return this.$store.state.applicant;
        }
    }
}
</script>
 <style>
.confirm{
    text-align: center;
    color: #424242;
    margin: 5px 0;
}
.confirmheader{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
    padding: 5px 0;
    margin: 10px 0;
}
.form{
    width: 80%;
    margin: 0 auto;
}
.title1,
.title2{
    width: 25%;
    display: block;
    margin-left: 2%;
    font-size: 18px;
    font-weight: bold;
    float: left;
}
.data{
    display: block;
    width: 640px;
    float: left;
    font-size: 18px;
}
 </style>
