import constant from "../../constants";

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
        errImg: null,

        /**
         * Validation
         * Validation for all form data
         */
        nameRules: [
            (v) => !!v == constant.VALIDATION.NAME.REQUIRE || "Name is required",
            (v) =>
            v.length <= constant.VALIDATION.NAME.MAX ||
            `Name must be less than ${constant.VALIDATION.NAME.MAX} characters`,
        ],
        emailRules: [
            (v) => !!v == constant.VALIDATION.EMAIL.REQUIRE || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
            (v) =>
            v.length <= constant.VALIDATION.EMAIL.MAX ||
            "Name must be less than 100 characters",
        ],
        dateRules: [
            (v) => !!v == constant.VALIDATION.DOB.REQUIRE || "DOB is required",
        ],
        phoneRules: [
            (v) => !!v == constant.VALIDATION.PH.REQUIRE || "Phone is required",
            (v) => /^\d+$/.test(v) || "Phone Number only accept numbers",
            (v) =>
            v.length <= constant.VALIDATION.PH.MAX ||
            `Phone Number is maximum ${constant.VALIDATION.PH.MAX} numbers`,
        ],
        phone2Rules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.PH.MAX) ||
            `Phone Number is maximum ${constant.VALIDATION.PH.MAX} numbers`,
            (v) => /^\d{0,11}$/.test(v) || "Phone Number must be number",
        ],
        currentRules: [
            (v) =>
            !!v == constant.VALIDATION.ADDRESS.REQUIRE ||
            "Hometown Address is required",
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.ADDRESS.MAX) ||
            `Current Address must be less than ${constant.VALIDATION.ADDRESS.MAX} characters`,
        ],
        homeRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.ADDRESS.MAX) ||
            `Hometown Address must be less than ${constant.VALIDATION.ADDRESS.MAX} characters`,
        ],
        buniRules: [
            (v) =>
            !!v == constant.VALIDATION.BUNI.REQUIRE ||
            "Bachelor University is required",
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.BUNI.MAX) ||
            `Bachelor University must be less than ${constant.VALIDATION.BUNI.MAX} characters`,
        ],
        byearRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.BYEAR.MAX) ||
            `Bachelor Year must be less than ${constant.VALIDATION.BYEAR.MAX} characters`,
        ],
        bdegreeRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.BDEGREE.MAX) ||
            `Bachelor Degree must be less than ${constant.VALIDATION.BDEGREE.MAX} characters`,
        ],
        muniRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.MUNI.MAX) ||
            `Master University must be less than ${constant.VALIDATION.MUNI.MAX} characters`,
        ],
        myearRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.MYEAR.MAX) ||
            `Master Year must be less than ${constant.VALIDATION.MYEAR.MAX} characters`,
        ],
        mdegreeRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.MDEGREE.MAX) ||
            `Master Degree must be less than ${constant.VALIDATION.MDEGREE.MAX} characters`,
        ],
        diplomaRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.DIPLOMA.MAX) ||
            `Diploma must be less than ${constant.VALIDATION.DIPLOMA.MAX} characters`,
        ],
        othercRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.CERTIFICATE.MAX) ||
            `Other Certification must be less than ${constant.VALIDATION.CERTIFICATE.MAX} characters`,
        ],
        englishRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.ENGLISH.MAX) ||
            `This field must be less than ${constant.VALIDATION.ENGLISH.MAX} characters`,
        ],
        japaneseRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.JAPANESE.MAX) ||
            `This field must be less than ${constant.VALIDATION.JAPANESE.MAX} characters`,
        ],
        otherRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.OTHER.MAX) ||
            `This field must be less than ${constant.VALIDATION.OTHER.MAX} characters`,
        ],
        internRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.INTERN.MAX) ||
            `This field must be less than ${constant.VALIDATION.INTERN.MAX} characters`,
        ],
        jobexpRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.JOBEXP.MAX) ||
            `This field must be less than ${constant.VALIDATION.JOBEXP.MAX} characters`,
        ],
        totalexpRules: [
            (v) =>
            (v.length >= 0 && v.length <= constant.VALIDATION.EXPYEAR.MAX) ||
            `Total exp is maximum ${constant.VALIDATION.EXPYEAR.MAX} digit`,
            (v) => /^\d{0,3}$/.test(v) || "Total exp must be number",
        ],
    }),
    methods: {
        /**
         * addFile
         * Image file, to show in Confirm Page
         * @param {File} file data to show in Confirm Page
         * @return void
         */
        addFile(file) {
            if (file) {
                if (file.size > constant.VALIDATION.IMAGE.MAX) {
                    this.errImg = "Image size too big!! Maximum is 2MB ";
                } else {
                    const reader = new FileReader();
                    reader.addEventListener("load", (event) =>
                        this.$store.dispatch("filestore", event.target.result)
                    );
                    reader.addEventListener(
                        "error",
                        () => (this.previews = this.errorImage)
                    );
                    reader.readAsDataURL(file);
                }
            } else {
                this.$store.dispatch("filestore", null);
                this.errImg = null;
            }
        },

        /**
         * Form validation
         * @return void
         */
        validate() {
            this.$refs.form.validate();
        },

        /**
         * Send data to "confirm" state and route to confirm page if valid,
         * if retrun error, set error and show
         * @retrun void
         */
        confirmApplicantInfo() {
            this.$store.dispatch("confirmApplicantInfo", this.applicant).then(() => {
                this.error = this.$store.state.error1;
                this.$router.push({
                    name: "confirm",
                });
            });
        },

        /**
         * form reset function
         * @retrun void
         */
        reset() {
            var self = this;
            Object.keys(this.applicant).forEach(function(key) {
                self.applicant[key] = "";
            });
            this.applicant.profile_photo = null;
            this.$refs.form.reset();
        },
    },
    computed: {
        errImage() {
            return this.errImg;
        },
    },
};