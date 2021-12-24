import gridItem from "../components/grid-item.js";

export default {
    template: `
    <div class="masonry-wrapper">
        <grid-item 
            v-for="project in projectsToShow"
            v-bind:key="project.id"
            v-bind:project="project"
        ></grid-item>
    </div>
    `,
    data: () => ({
        projects: [],
        projectsToShow: [],
        path: "",
    }),
    components: {
        gridItem,
    },
    methods: {
        masonryDistribution: function (reload = false) {
            this.$nextTick(function () {
                var $grid = $(".masonry-wrapper");
                if (!reload) {
                    $grid.masonry({
                        itemSelector: ".grid-item",
                        columnWidth: ".grid-item",
                        percentPosition: true,
                        transitionDuration: 300,
                    });
                    $grid.imagesLoaded().progress(function () {
                        $grid.masonry();
                    });
                } else {
                    $grid.masonry("reloadItems");
                }
            });
        },
        fetchProjects: async function () {
            await fetch("../data/projects.json")
                .then((data) => data.json())
                .then((projectsJson) => {
                    this.projects = [...projectsJson.projects];
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        filterProjectsAccordingToPath: async function () {
            await this.fetchProjects();

            this.path = this.$route.path.replace("/", "");

            let tag = this.capitalizePathName(this.path);

            if (tag === null) {
                this.projectsToShow = this.projects;
            } else {
                this.projectsToShow = this.projects.filter((project) => {
                    return project.tags.includes(tag);
                });
            }
            this.masonryDistribution();
        },
        capitalizePathName: function (path) {
            /**
             * This function make the current path to have a format similar to the
             * Strings in the tags Array of the projects.json
             */
            if (path === "") {
                return null;
            }
            return path
                .split("-")
                .map((word) => {
                    return `${word[0].toUpperCase() + word.slice(1)}`;
                })
                .join(" ");
        },
    },
    updated: function () {
        this.masonryDistribution(true);
    },
    created: function () {
        this.filterProjectsAccordingToPath();
    },

    watch: {
        $route(to, from) {
            // react to route changes...
            this.path = to.path.replace("/", "");
            this.filterProjectsAccordingToPath();
        },
    },
};
