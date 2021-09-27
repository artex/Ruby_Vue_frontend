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
            bachelor_university: "",
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
        modal: false,

        /**
         * Validation
         * Validation for all form data
         */
        nameRules: [
            (v) => !!v || "Name is required",
            (v) => (v && v.length <= 100) || "Name must be less than 100 characters",
        ],
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
            (v) =>
            (v.length >= 0 && v.length <= 100) ||
            "Name must be less than 100 characters",
        ],
        dateRules: [(v) => !!v || "DOB is required"],
        phoneRules: [
            (v) => !!v || "Phone is required",
            (v) => /^\d+$/.test(v) || "Phone Number only accept numbers",
            (v) => /^\d{1,11}$/.test(v) || "Phone Number is maximum 11 numbers",
        ],
        phone2Rules: [
            (v) =>
            (v.length >= 0 && v.length <= 11) ||
            "Phone Number is maximum 11 numbers",
            (v) => /^\d{0,11}$/.test(v) || "Phone Number must be number",
        ],
        currentRules: [
            (v) => !!v || "Hometown Address is required",
            (v) =>
            (v.length >= 0 && v.length <= 255) ||
            "Current Address must be less than 255 characters",
        ],
        homeRules: [
            (v) =>
            (v.length >= 0 && v.length <= 255) ||
            "Hometown Address must be less than 255 characters",
        ],
        buniRules: [
            (v) => !!v || "Bachelor University is required",
            (v) =>
            (v.length >= 0 && v.length <= 100) ||
            "Bachelor University must be less than 100 characters",
        ],
        byearRules: [
            (v) =>
            (v.length >= 0 && v.length <= 20) ||
            "Bachelor Year must be less than 20 characters",
        ],
        bdegreeRules: [
            (v) =>
            (v.length >= 0 && v.length <= 100) ||
            "Bachelor Degree must be less than 100 characters",
        ],
        muniRules: [
            (v) =>
            (v.length >= 0 && v.length <= 100) ||
            "Master University must be less than 100 characters",
        ],
        myearRules: [
            (v) =>
            (v.length >= 0 && v.length <= 20) ||
            "Master Year must be less than 20 characters",
        ],
        mdegreeRules: [
            (v) =>
            (v.length >= 0 && v.length <= 100) ||
            "Master Degree must be less than 100 characters",
        ],
        diplomaRules: [
            (v) =>
            (v.length >= 0 && v.length <= 100) ||
            "Diploma must be less than 100 characters",
        ],
        othercRules: [
            (v) =>
            (v.length >= 0 && v.length <= 100) ||
            "Other Certification must be less than 100 characters",
        ],
        englishRules: [
            (v) =>
            (v.length >= 0 && v.length <= 255) ||
            "This field must be less than 255 characters",
        ],
        japaneseRules: [
            (v) =>
            (v.length >= 0 && v.length <= 255) ||
            "This field must be less than 255 characters",
        ],
        otherRules: [
            (v) =>
            (v.length >= 0 && v.length <= 255) ||
            "This field must be less than 255 characters",
        ],
        internRules: [
            (v) =>
            (v.length >= 0 && v.length <= 255) ||
            "This field must be less than 255 characters",
        ],
        jobexpRules: [
            (v) =>
            (v.length >= 0 && v.length <= 255) ||
            "This field must be less than 255 characters",
        ],
        totalexpRules: [
            (v) => (v.length >= 0 && v.length <= 3) || "Total exp is maximum 3 digit",
            (v) => /^\d{0,3}$/.test(v) || "Total exp must be number",
        ],
    }),

    methods: {
        /**
         * addFile
         * Image file, to show in Confirm Page
         * @param {file} file data to show in Confirm Page
         * @return void
         */
        addFile(file) {
            if (file) {
                const reader = new FileReader();
                reader.addEventListener("load", (e) =>
                    this.$store.dispatch("filestore", e.target.result)
                );
                reader.addEventListener(
                    "error",
                    () => (this.previews = this.errorImage)
                );
                reader.readAsDataURL(file);
            } else {
                this.$store.dispatch("filestore", null);
            }
        },

        validate() {
            this.$refs.form.validate();
        },

        /**
         * confirm
         * Send data to "confirm" state and route to confirm page if valid,
         * if retrun error, set error and show
         * @retrun void
         */
        confirm() {
            this.$store.dispatch("confirm", this.applicant).then(() => {
                this.error = this.$store.state.error1;
                this.$router.push({
                    name: "confirm",
                });
            });
        },

        //reset function
        reset() {
            var self = this;
            Object.keys(this.applicant).forEach(function(key) {
                self.applicant[key] = "";
            });
            this.applicant.profile_photo = null;
            this.$refs.form.reset();
        },
    },
};