<template>
<div class="main_container">
 
  <v-form ref="form" v-model="valid" @submit.prevent="confirm" lazy-validation > 
    <v-toolbar-title class="title secondary">
        <span class="header-title">Personal Infromation</span>
    </v-toolbar-title>
    <v-card class="mx-auto px-14 py-8">
    <v-text-field
      v-model="applicant.name"
      :counter="100"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-file-input
      v-model="applicant.profile_photo"
      label="upload Profile"
      prepend-icon="mdi-camera"
      @change = "addFile"
    ></v-file-input>
    <img v-if="previews && previews.length" :src="previews" style="width: 200px"/>

    <div>
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="applicant.date"
            label="Date of Birth"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            required
            :rules="dateRules"
          ></v-text-field>
        </template>

        <v-date-picker
          v-model="applicant.date"
          scrollable
          :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
          min="1995-01-01"
          
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    </div>

    <span class="errormsg" v-if="this.$store.state.error1.phone_no1">Phone Number {{ error.phone_no1[0] }}</span>
    <v-text-field
        v-model="applicant.phone_no1"
        :counter="11"
        label="Phone Number"
        required
        :rules="phoneRules"
            
    ></v-text-field>
    <v-text-field
        v-model="applicant.phone_no2"
        :counter="11"
        label="Phone Number2"
        required
        :rules="phone2Rules"
            
    ></v-text-field>
    
    <span class="errormsg" v-if="this.$store.state.error1.email">Email {{ error.email[0] }}</span>
    <v-text-field
      v-model="applicant.email"
      :rules="emailRules"
      :counter="100"
      label="E-mail"
      required
    ></v-text-field>

    <v-textarea
      v-model="applicant.current_address"
      background-color="grey lighten-2"
      color="black"
      label="Current Address"
      :counter="255"
      required
      :rules="currentRules"
      no-resize
    ></v-textarea>

    <v-textarea
      class="last"
      v-model="applicant.hometown_address"
      background-color="grey lighten-2"
      color="black"
      :counter="255"
      :rules="homeRules"
      label="Hometown Address"
      no-resize
    ></v-textarea>

    
    </v-card>
    <v-toolbar-title class="title secondary">
        <span class="header-title">Education background</span>
    </v-toolbar-title>
    <v-card class="mx-auto px-14 py-8">
      <div>
        
          <v-row
          >
            <v-col cols="4">
              
              <v-text-field
                :counter="100"
                v-model="applicant.bachelor_university"
                :rules="buniRules"
                label="Bachelor University"
                required
              ></v-text-field>
              
            </v-col>
            <v-col cols="4">
              
              <v-text-field
                :counter="20"
                :rules="byearRules"
                v-model="applicant.bachelor_year"
                label="Bachelor Year"
              ></v-text-field>
              
            </v-col>
            <v-col cols="4">
              
              <v-text-field
                :counter="100"
                :rules="bdegreeRules"
                v-model="applicant.bachelor_degree"
                label="Bachelor Degree"
              ></v-text-field>
              
            </v-col>
          </v-row> 
      </div>
      <div>
        
          <v-row
          >
            <v-col cols="4">
              
              <v-text-field
                :counter="100"
                :rules="muniRules"
                v-model="applicant.master_university"
                label="Master University"
              ></v-text-field>
              
            </v-col>
            <v-col cols="4">
              
              <v-text-field
                :counter="20"
                :rules="myearRules"
                v-model="applicant.master_year"
                label="Master Year"
              ></v-text-field>
              
            </v-col>
            <v-col cols="4">
              
              <v-text-field
                :counter="100"
                :rules="mdegreeRules"
                v-model="applicant.master_degree"
                label="Master Degree"
              ></v-text-field>
              
            </v-col>
          </v-row> 
      </div>
      <v-text-field
        v-model="applicant.diploma_name"
        :counter="100"
        :rules="diplomaRules"
        label="Diploma Name"
    ></v-text-field>
    <v-text-field
        v-model="applicant.certificate"
        :counter="100"
        :rules="othercRules"
        label="Other Certification"
    ></v-text-field>

    <div>
        
          <v-row
          >
            <v-col cols="6">
              
              <v-text-field
                  v-model="applicant.programming_language"
                  label="Programming Language"
                  placeholder="Ruby"
                ></v-text-field>
              
            </v-col>
            <v-col cols="6">
              
              <v-text-field
                  v-model="applicant.programming_level"
                  label="Level"
                  placeholder="A"
                ></v-text-field>
              
            </v-col>
          </v-row> 
      </div>

      <v-text-field
        v-model="applicant.english"
        :counter="255"
        :rules="englishRules"
        label="English Language Skill"
    ></v-text-field>
    <v-text-field
        v-model="applicant.japanese"
        :counter="255"
        :rules="japaneseRules"
        label="Japanese Language Skill"
    ></v-text-field>
    <v-text-field
        class="last"
        v-model="applicant.other"
        :counter="255"
        :rules="otherRules"
        label="Other Language Skill"
    ></v-text-field>

    </v-card>

    <v-toolbar-title class="title secondary">
        <span class="header-title">Experience</span>
    </v-toolbar-title>
    <v-card class="mx-auto px-14 py-3">
      <v-checkbox
        label="secondary"
        color="secondary"
      ></v-checkbox>

      <v-textarea
        v-model="applicant.internship_info"
        background-color="grey lighten-2"
        color="black"
        :counter="255"
        :rules="internRules"
        label="Internship Info"
        no-resize
      ></v-textarea>

      <v-textarea
        v-model="applicant.job_experience"
        background-color="grey lighten-2"
        color="black"
        :counter="255"
        :rules="jobexpRules"
        label="Job Experience"
        no-resize
      ></v-textarea>

      <v-text-field
        class="last"
        v-model="applicant.total_exp_year"
        :counter="3"
        :rules="totalexpRules"
        label="Total Exprience Years"
      ></v-text-field>

    </v-card>

    <div class="btn">
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset
      </v-btn>    
      <v-btn
        type="submit"
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
      Submit
      </v-btn>
    </div>
  </v-form>

</div>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      applicant: {
        name: "",
        profile_photo: null,
        date: "",
        phone_no1: "",
        phone_no2: "",
        email: "",
        current_address: "",
        hometown_address: "",
        bachelor_university:"",
        bachelor_year: "",
        bachelor_degree: "",
        master_university: "",
        master_year: "",
        master_degree: "",
        diploma_name: "",
        certificate: "",
        english: "",
        japanese: "",
        other: "",
        internship_info: "",
        job_experience: "",
        total_exp_year: "",
        programming_language: "",
        programming_level: "",
      },
      date: "",
      error: null,
      previews: [],
      errorImage: "url of an image to use to indicate an error",
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        v => (v.length >=0 && v.length <= 100) || 'Name must be less than 100 characters',
      ],
      dateRules: [
          v => !!v || 'DOB is required',
      ],
      phoneRules: [
        v => !!v || 'Phone is required',
        v => /^\d+$/.test(v)||'Phone Number only accept numbers',
        v => /^\d{1,11}$/.test(v)||'Phone Number is maximum 11 numbers',
      ],
      phone2Rules: [
        // v => /^\d+$/.test(v)||'Phone Number only accept numbers',
        // v => /^\d{0,11}$/.test(v)||'Phone Number is maximum 11 numbers',
        v => (v.length>=0 && v.length <=11)||'Phone Number is maximum 11 numbers',
        v => /^\d{0,11}$/.test(v)||'Phone Number must be number',
      ],
      currentRules: [
        v => !!v || 'Hometown Address is required',
        v => (v.length >=0 && v.length <= 255) || 'Current Address must be less than 255 characters',

      ],
      homeRules: [
        v => (v.length >=0 && v.length <= 255) || 'Hometown Address must be less than 255 characters',
      ],
      buniRules: [
        v => !!v || 'Bachelor University is required',
        v => (v.length >=0 && v.length <= 100) || 'Bachelor University must be less than 100 characters',
      ],
      byearRules: [
        v => (v.length >=0 && v.length <= 20) || 'Bachelor Year must be less than 20 characters',
      ],
      bdegreeRules: [
        v => (v.length >=0 && v.length <= 100) || 'Bachelor Degree must be less than 100 characters',
      ],
      muniRules: [
        v => (v.length >=0 && v.length <= 100) || 'Master University must be less than 100 characters',
      ],
      myearRules: [
        v => (v.length >=0 && v.length <= 20) || 'Master Year must be less than 20 characters',
      ],
      mdegreeRules: [
        v => (v.length >=0 && v.length <= 100) || 'Master Degree must be less than 100 characters',
      ],
      diplomaRules: [
        v => (v.length >=0 && v.length <= 100) || 'Diploma must be less than 100 characters',
      ],
      othercRules: [
        v => (v.length >=0 && v.length <= 100) || 'Other Certification must be less than 100 characters',
      ],
      englishRules: [
        v => (v.length >=0 && v.length <= 255) || 'This field must be less than 255 characters',
      ],
      japaneseRules: [
        v => (v.length >=0 && v.length <= 255) || 'This field must be less than 255 characters',
      ],
      otherRules: [
        v => (v.length >=0 && v.length <= 255) || 'This field must be less than 255 characters',
      ],
      internRules: [
        v => (v.length >=0 && v.length <= 255) || 'This field must be less than 255 characters',
      ],
      jobexpRules: [
        v => (v.length >=0 && v.length <= 255) || 'This field must be less than 255 characters',
      ], 
      totalexpRules: [
        v => (v.length>=0 && v.length <=3)||'Total exp is maximum 3 digit',
        v => /^\d{0,3}$/.test(v)||'Total exp must be number',
      ],

      modal: false,
    }),

    methods: {
      addFile(file){
        if (file){
          const reader = new FileReader();
          reader.addEventListener('load', e =>  this.$store.dispatch("filestore", e.target.result));
          reader.addEventListener('error', () => this.previews = this.errorImage);
          reader.readAsDataURL(file);
        }
        else{
          this.$store.dispatch("filestore", null)
        }
      },

      validate () {
        this.$refs.form.validate()
      },
      confirm () {
        // console.log("hello world")
        // console.log(this.applicant.profile_photo)
        this.$store
        .dispatch("confirm", this.applicant)
        .then(() => {
          this.error = this.$store.state.error1
          this.$router.push({ name: "confirm" });
        })
      },
      reset () {
        var self = this;
        Object.keys(this.applicant).forEach(function(key){
         self.applicant[key] = '';
        });
        this.applicant.profile_photo = null
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style>
.main_container{
    border-radius: 20px;
    width: 800px;
    margin: 0 auto;
}
.header-title{
    display: block;
    padding: 10px 0;
    margin-left: 3%;
    color: white;
}
.title{
  margin-top: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.btn{
  text-align: center;
  margin: 30px 0;
}
.last{
  margin-bottom: 30px;
}
.errormsg{
  color: red;
}
</style>