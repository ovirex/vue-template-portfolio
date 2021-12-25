import gridItem from "../components/grid-item.js";
import masonryWrapper from "../components/masonry-wrapper.js";

export default {
    template: `
    <div class="px-4 py-5">
        <div class="container-fluid">
            <transition name="fade" appear>
                <router-view :key="$route.path"></router-view>
            </transition>
        </div>
    </div>
    `,
    components: {
        gridItem,
        masonryWrapper,
    },
    methods: {
        backToTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
    watch: {
        $route(to, from) {
            this.backToTop();
        },
    },
};
