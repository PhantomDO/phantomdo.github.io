// Homepage component
const Home = {
    template: `<main id="home">
        <div class="about__me">
            <img src="./assets/img/photo_portfolio.png" alt="user avatar">
            <h1>Donnovan Feuillastre</h1>
            <h3>Junior Game Developer</h3>
            <p>Currently in my last year of school, i'm looking for an internship as a Game Developer.</p>
    
            <div class="skills_projects_link">
                <router-link to="/projects">Projects | Skills</router-link> 
            </div>
        </div>
    </main>`,
};

const Projects = {
    template: `<div>
        <header id="site_header" class="container d_flex">
            <div class="bio__media">
                <img src="./assets/img/photo_portfolio.png" alt="user avatar">
                <div class="bio__media__text">
                    <h1>Donnovan Feuillastre</h1>
                    <h3>Junior Game Developer</h3>
                    <p>Currently in my last year of school, i'm looking for an internship as a Game Developer.</p>
                </div>
            </div>
            <nav>
                <router-link to="/" class="p_2">Home</router-link> 
                <router-link to="/projects" class="p_2">Projects</router-link> 
                <a :href="gitHubLink">
                    <i class="fab fa-github fa-lg fa-fw"></i> 
                </a>
            </nav>
        </header>

        <main class="container">
            <!-- Show an error message if the REST API doesn't work -->
            <div class="error" v-if="errors">
                Sorry! It seems we can't fetch data right now
            </div>
            <!-- Otherwise show a section for our portfolio projects and skills -->
            <section id="portfolio" v-else>
                <!-- loading message -->
                <div class="loading" v-if="loading">
                    Loading...
                </div>

                <!-- show the projects -->
                <div class="projects" v-else>
                    <div v-for="project in projectsList" class="card__custom">
                        <div class="card__custom__text">
                            <div>
                                <h3>{{project.name}}</h3>
                                <p>{{project.description}}</p>
                            </div>
                            <div class="meta__data d_flex">
                                <div class="date">
                                    <h5>Update at</h5>
                                    <div>{{new Date(project.updated_at).toDateString()}}</div>
                                </div>
                                <img class="avatar" :src="project.owner.avatar_url">
                            </div>
                        </div>

                        <div class="card__custom__img"></div>
                        <div class="card_custom__button">
                            <a :href="project.html_url" target="_blank">
                                Code
                            </a>
                        </div>
                    </div>

                    <div v-if="!loading">
                        <div v-if="projectsList.length < projects.length">
                            <button class="btn_load_more" v-on:click="loadMore()">
                                Load more
                            </button>
                        </div>
                        <div v-else>
                            <a :href="gitHubLink" target="_blank">Visit my GitHub</a>
                        </div>
                    </div>
                        
                    <div id="skills_section">
                        <h2>Dev Skills</h2>
                        <ul class="skills">
                            <li v-for="skill in skills">{{skill}}</li>
                        </ul>
                    </div>
                    
                </div>

            </section>

        </main>
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
            gitHubLink: 'https://github.com/PhantomDO',
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
                        this.projects.forEach(project => {
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
            this.projectsList = this.projects.slice(0, this.projectsCount);
            return this.projectsList;
        },

        loadMore: function() {
            if (this.projectsList.length <= this.projects.length) {
                this.projectsCount += 5;
                this.getProjects();
            }
        }
    },

    mounted() {
        // lifecycle hook
        setTimeout(this.fetchData, 2000);
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