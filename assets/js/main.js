// Homepage component
const Home = {
    template: `<main id="home">
        <div class="about__me">
            <img src="./assets/img/avatar.svg" alt="">
            <h1>Donnovan Feuillastre</h1>
            <h3>Junior Game Developper</h3>
            <p>Currently in my last year of school, i'm looking for an internship as a Game Developper.</p>
    
            <div class="skills_projects_link">
                <router-link to="/projects">Projects/Skills</router-link> 
            </div>
        </div>
    </main>`,
};

const Projects = {
    template: `<div>
        <h1>Projects</h1>
    </div>`,

    data() {
        return {
            // data object here
            projects: [],
            projectsList: null,
            skills: [],
            projectsCount: 5,
            perPage: 20,
            page: 1,
            loading: true,
            errors: false,
        }
    },

    methods: {
        // all methods here
        fetchData: function() {
            axios
                .get(`https://api.github.com/users/PhantomDO/repos?per_page=${this.perPage}&page=${this.page}`)
                .then(
                    response => {
                        this.projects = response.data;
                        this.projects.array.forEach(project => {
                            if (project.language !== null && !this.skills.includes(project.language)) {
                                this.skills.push(project.language);
                            }
                        });
                    }
                )
                .catch(error => {
                    console.log(error);
                    this.errors = true;
                })
                .finally(() => {
                    this.loading = false;
                    this.getProjects();
                })
        },

        getProjects: function() {
            this.projectsList = this.projects.array.slice(0, this.projectsCount);
            return this.projectsList;
        },

        loadMore: function() {
            if (this.projectsList.array.length <= this.projects.array.length) {
                this.projectsCount += 5;
                this.projectsList = this.getProjects();
            }
        }
    },

    mounted() {
        // lifecycle hook
    },
};

// defines routes
const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects }
];

// create router instance
const router = new VueRouter({
    routes
})

// create and mount the vue instance
const app = new Vue({
    router
}).$mount('#app');