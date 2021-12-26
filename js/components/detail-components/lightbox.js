export default {
    props: {
        title: { type: String },
        images: {
            type: Object,
        },
    },
    template: `
    <div class="col-lg-7">
        <!--<a 
            v-for="image in images" 
            :href="image" 
            data-lightbox="image-1" 
            :data-title="title"
        >
            <img class="img-fluid mb-4" :src="image" alt="">
        </a>-->
        <div v-if="images.rrss.length > 0">
            <h3>Social Media Design</h3>
            <a 
                v-for="image in images.rrss"
                :href="image"
                data-gallery="rrss-gallery"
                class="glightbox"
            >
                <img class="img-fluid mb-4" :src="image" alt="image" />
            </a>
        </div>
        <div v-if="images.web.length > 0">
            <h3>Web Design</h3>
            <a 
                v-for="image in images.web"
                :href="image"
                data-gallery="web-gallery"
                class="glightbox"
            >
                <img class="img-fluid mb-4" :src="image" alt="image" />
            </a>
        </div>
    </div>
    `,
    methods: {
        addLightbox() {
            lightbox.option({
                disableScrolling: true,
                alwaysShowNavOnTouchDevices: true,
            });
        },
        addGLightbox() {
            const lightbox = GLightbox({
                zoomable: false,
            });
        },
    },
    updated: function () {
        this.addGLightbox();
    },
};
