import axios from "axios";
export default {
    data() {
        return {
            applicant: {},
            dob: "",
        };
    },
    created() {
        axios
            .get(`/detail?id=${this.$route.params.id}`)
            .then((applicantData) => {
                this.applicant = applicantData.data.applicant;
                this.dob = applicantData.data.dob;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};