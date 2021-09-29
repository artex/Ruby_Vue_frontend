const constants = {
    /**
     * App title
     */
    APP_TITLE: "OJT Application Form",

    VALIDATION: {
        NAME: {
            REQUIRE: true,
            MAX: 100,
            MIN: 0
        },
        IMAGE: {
            MAX: 2048 * 2048
        },
        EMAIL: {
            REQUIRE: true,
            MAX: 100,
            MIN: 0
        },
        DOB: {
            REQUIRE: true,
        },
        PH: {
            REQUIRE: true,
            MAX: 11,
            MIN: 1
        },
        ADDRESS: {
            REQUIRE: true,
            MAX: 255
        },
        BUNI: {
            REQUIRE: true,
            MAX: 100
        },
        BYEAR: {
            MAX: 20
        },
        BDEGREE: {
            MAX: 100
        },
        MUNI: {
            REQUIRE: true,
            MAX: 100
        },
        MYEAR: {
            MAX: 20
        },
        MDEGREE: {
            MAX: 100
        },
        DIPLOMA: {
            MAX: 100
        },
        CERTIFICATE: {
            MAX: 100
        },
        ENGLISH: {
            MAX: 255
        },
        JAPANESE: {
            MAX: 255
        },
        OTHER: {
            MAX: 255
        },
        INTERN: {
            MAX: 255
        },
        JOBEXP: {
            MAX: 255
        },
        EXPYEAR: {
            MAX: 3
        },
    }

};

export default constants;