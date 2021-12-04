//const { default: Vue } = require("vue");

let app = new Vue({
    // all vue option are set here
    el: "#app",
    data: {
        alert: "This is an alert message!",
        title: "Donnovan Feuillastre Portfolio",
        projects: [{
            title: "portfolio",
            languages: ["HTML", "CSS", "VueJS"]
        }],
        dynamicId: "projects_section",
        dynamicClass: "projects",

        attribute_name: "href",
        url: "https://donnovanfeuillastre.com",

        event_name: "click",
    },
    methods: {
        runFunction() {
            console.log("test click");
        },
    },
});