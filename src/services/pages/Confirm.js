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
        clear() {
            this.$store.dispatch("clear");
            this.$router.push({
                name: "home",
            });
        },

        /**
         * submit
         * Confirmed function when click "confirm" in confirm page
         * @return void
         */
        submit() {
            let formData = new FormData();
            if (this.confirmData) {
                formData.append("filename", this.confirmData.profile_photo);
                Object.entries(this.confirmData).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                formData.append(
                    "programming",
                    this.confirmData.programming_language +
                    ":" +
                    this.confirmData.programming_level
                );
                formData.append("profile_photo", this.confirmData.profile_photo.name);
            }
            // console.log(formData);
            this.$store.dispatch("createPost", formData);
            this.$router.push({
                name: "success",
            });
        },
    },
    computed: {
        confirmData() {
            return this.$store.state.applicant;
        },
    },
};