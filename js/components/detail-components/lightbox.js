export default {
    props: {
        title: { type: String },
        images: {
            type: Array,
        },
    },
    template: `
    <div class="col-lg-7">
        <a 
            v-for="image in images" 
            :href="image" 
            data-lightbox="image-1" 
            :data-title="title"
        >
            <img class="img-fluid mb-4" :src="image" alt="">
        </a>
    </div>
    `,
    methods: {
        addLightbox() {
            lightbox.option({
                disableScrolling: true,
                alwaysShowNavOnTouchDevices: true,
            });
        },
    },
    mounted: function () {
        this.addLightbox();
    },
};
