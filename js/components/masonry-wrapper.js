import gridItem from "../components/grid-item.js";

export default {
    template: `
    <div class="masonry-wrapper">
        <grid-item></grid-item>
        <grid-item></grid-item>
        <grid-item></grid-item>
        <grid-item></grid-item>
        <grid-item></grid-item>
        <grid-item></grid-item>
    </div>
    `,
    components: {
        gridItem,
    },
    methods: {
        masonryDistribution: function () {
            var $grid = $(".masonry-wrapper").masonry({
                itemSelector: ".grid-item",
                columnWidth: ".grid-item",
                percentPosition: true,
                transitionDuration: 300,
            });

            $grid.imagesLoaded().progress(function () {
                $grid.masonry();
            });
        },
    },
    mounted: function () {
        this.masonryDistribution();
    },
};
