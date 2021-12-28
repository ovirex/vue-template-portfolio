export default {
    props: {
        title: { type: String },
        images: {
            type: Object,
        },
    },
    template: `
    <div class="col-lg-7 project-images">
        <div v-if="images.rrss.length > 0">
            <h3>Social Media Design</h3>
            <a 
                v-for="image in images.rrss"
                :href="image"
                data-gallery="rrss-gallery"
                class="glightbox is-loading"
            >
                <img class="img-fluid mb-4" :src="image" alt="image" />
                <!-- Loading spinner -->
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <!-- End of Loading spinner -->
            </a>
        </div>
        <div v-if="images.web.length > 0">
            <h3>Web Design</h3>
            <a 
                v-for="image in images.web"
                :href="image"
                data-gallery="web-gallery"
                class="glightbox is-loading"
            >
                <img class="img-fluid mb-4" :src="image" alt="image" />
                <!-- Loading spinner -->
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <!-- End of Loading spinner -->
            </a>
        </div>
    </div>
    `,
    data: () => ({
        lightbox: {},
    }),
    methods: {
        addGLightbox() {
            this.lightbox = GLightbox({
                zoomable: false,
            });
            let $projectImagesContainer = $(".project-images");

            $projectImagesContainer
                .imagesLoaded()
                .progress(function (imgLoad, image) {
                    let $item = $(image.img).parent();
                    $item.removeClass("is-loading");
                    if (!image.isLoaded) {
                        $item.addClass("is-broken");
                    }
                });
        },
    },
    updated: function () {
        this.addGLightbox();
    },
    destroyed: function () {
        this.lightbox.close();
    },
};
