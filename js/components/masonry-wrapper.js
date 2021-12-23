import gridItem from "../components/grid-item.js";
import fetchData from "../fetchData.js";

export default {
    template: `
    <div class="masonry-wrapper">
        <grid-item 
            v-for="project in projects"
            v-bind:key="project.id"
            v-bind:project="project"
        ></grid-item>
    </div>
    `,
    data: () => ({
        projects: [],
    }),
    components: {
        gridItem,
    },
    methods: {
        masonryDistribution: function () {
            this.$nextTick(function () {
                var $grid = $(".masonry-wrapper").masonry({
                    itemSelector: ".grid-item",
                    columnWidth: ".grid-item",
                    percentPosition: true,
                    transitionDuration: 300,
                });
                $grid.imagesLoaded().progress(function () {
                    $grid.masonry();
                });
            });
        },
        fetchProjects: function () {
            fetch("../../data/projects.json")
                .then((data) => data.json())
                .then((projectsJson) => {
                    this.projects = [...projectsJson.projects];
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
    updated: function () {
        this.masonryDistribution();
    },
    created: function () {
        this.fetchProjects();
    },
};
