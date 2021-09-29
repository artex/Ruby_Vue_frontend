export default {
    name: "Confirm",
    data() {
        return {
            name: "",
        };
    },
    methods: {
        /**
         * clear
         * cancel function when click "cancel" in confirm page
         * @return void
         */
        clearApplicantInfo() {
            this.$store.dispatch("clearApplicantInfo");
            this.$router.push({
                name: "home",
            });
        },

        /**
         * submit
         * Confirmed function when click "confirm" in confirm page
         * @return void
         */
        createApplicantData() {
            let formData = new FormData();
            if (this.confirmApplicantInfo) {
                formData.append("filename", this.confirmApplicantInfo.profile_photo);
                Object.entries(this.confirmApplicantInfo).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                formData.append(
                    "programming",
                    this.confirmApplicantInfo.programming_language +
                    ":" +
                    this.confirmApplicantInfo.programming_level
                );
                formData.append(
                    "profile_photo",
                    this.confirmApplicantInfo.profile_photo.name
                );
            }
            this.$store.dispatch("createApplicantData", formData);
            this.$router.push({
                name: "success",
            });
        },
    },
    computed: {
        confirmApplicantInfo() {
            return this.$store.state.applicant;
        },
    },
};