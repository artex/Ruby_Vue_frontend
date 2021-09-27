import { mapGetters } from "vuex";
export default {
    data() {
        return {
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [{
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Phone Number",
                    value: "phone_no1",
                },

                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Bachelor University",
                    value: "bachelor_university",
                },

                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
            keyword: null,
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.$axios
            .get("/api/applicant")
            .then((response) => {
                this.postList = response.data;
                this.showList = this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        /**
         * This is to delete posts of datatable.
         * @returns void
         */
        deleteApplicant(id) {
            if (confirm("Do you really want to delete?")) {
                this.$axios
                    .delete("/destroy?id=" + id)
                    .then(() => {
                        this.$axios
                            .get("/api/applicant")
                            .then((response) => {
                                this.postList = response.data;
                                this.showList = this.postList;
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPosts() {
            this.showList = this.postList.filter((post) => {
                return (
                    post.name.toLowerCase().includes(this.keyword.toLowerCase()) ||
                    post.phone_no1.includes(this.keyword) ||
                    post.email.includes(this.keyword) ||
                    post.bachelor_university.includes(this.keyword)
                );
            });
        },
    },
};