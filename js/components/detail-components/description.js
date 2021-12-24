export default {
    props: {
        desc: {
            type: String,
        },
        tags: {
            type: Array,
        },
    },
    template: `
    <div class="col-lg-5 position-sticky">
        <h2>Idea</h2>
        <p class="text-muted">{{desc}}</p>
        <div class="p-4 bg-light mb-5">
            <ul class="list-unstyled mb-0">
                <li class="d-flex mb-2">
                    <h6 class="mb-0">Category:</h6>
                    <p class="ml-3 text-muted mb-0">Creative</p>
                </li>
                <li class="d-flex mb-2">
                    <h6 class="mb-0">Date:</h6>
                    <p class="ml-3 text-muted mb-0">23 Dec 2019</p>
                </li>
                <li class="d-flex">
                    <h6 class="mb-0">Tags:</h6>
                    <p class="ml-3 text-muted mb-0">
                        <span v-html="joinTags()"></span>
                    </p>
                </li>
            </ul>
        </div>
        <h2 class="h3 mb-4">Share</h2>
        <ul class="list-inline">
            <li class="list-inline-item">
                <a class="reset-anchor social-share-link facebook" href="#"><i class="fab fa-facebook-f mr-2"></i>Share</a>
            </li>
            <li class="list-inline-item">
                <a class="reset-anchor social-share-link twitter" href="#"><i class="fab fa-twitter mr-2"></i>Tweet</a>
            </li>
            <li class="list-inline-item">
                <a class="reset-anchor social-share-link instagram" href="#"><i class="fab fa-instagram mr-2"></i>Share</a>
            </li>
        </ul>
    </div>
    `,
    methods: {
        joinTags: function () {
            return this.tags
                .map((tag) => {
                    return `<a class="reset-anchor mr-1" href="#">${tag}`;
                })
                .join(",</a> ");
        },
    },
};
