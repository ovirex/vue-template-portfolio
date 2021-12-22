import gridItem from "../components/grid-item.js";
import masonryWrapper from "../components/masonry-wrapper.js";

export default {
    template: `
    <div class="px-4 py-5">
        <div class="container-fluid">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
    `,
    components: {
        gridItem,
        masonryWrapper,
    },
};
