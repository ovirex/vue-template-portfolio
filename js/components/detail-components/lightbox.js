export default {
    template: `
    <div class="col-lg-7">
        <a href="img/portfolio-3.jpg" data-lightbox="image-1" data-title="Tour de France">
            <img class="img-fluid mb-4" src="img/portfolio-3.jpg" alt="">
        </a>
        <a href="img/portfolio-1.jpg" data-lightbox="image-1" data-title="Tour de France">
            <img class="img-fluid mb-4" src="img/portfolio-1.jpg" alt="">
        </a>
    </div>
    `,
    methods: {
        addLightbox() {
            lightbox.option({
                disableScrolling: true,
            });
        },
    },
    mounted: function () {
        this.addLightbox();
    },
};
