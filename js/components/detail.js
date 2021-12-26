import detailDescription from "../components/detail-components/description.js";
import lightbox from "../components/detail-components/lightbox.js";

export default {
    props: ["id"],
    template: `
    <div>
        <div class="row">
            <div class="col-lg-7">
                <h1>{{projectData.title}}</h1>
                <p class="text-muted mb-5">{{projectData.short_description}}</p>
            </div>
        </div>
        <div class="row mb-5">
            <lightbox :title="projectData.title" :images="projectData.images"></lightbox>
            <detail-description :desc="projectData.long_description" :tags="projectData.tags"></detail-description>
        </div>
    </div>
    `,
    data: () => ({
        projectData: {},
    }),
    components: {
        detailDescription,
        lightbox,
    },
    methods: {
        fetchProject: function () {
            fetch("./data/projects.json")
                .then((data) => data.json())
                .then((projectsJson) => {
                    let projectInfo = projectsJson.projects.filter(
                        (project) => project.id === parseInt(this.id)
                    );
                    this.projectData = projectInfo[0];
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
    created: function () {
        this.fetchProject();
    },
};
