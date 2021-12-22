import sidebar from "../js/components/sidebar.js";
import pageHolder from "../js/components/page-holder.js";
import masonryWrapper from "../js/components/masonry-wrapper.js";
import detail from "../js/components/detail.js";
import about from "../js/components/about.js";

const Home = {
    template: `
        <masonryWrapper></masonryWrapper>
    `,
    components: {
        masonryWrapper,
    },
};

const Detail = {
    template: `
        <detail></detail>
    `,
    components: {
        detail,
    },
};

const About = {
    template: `
        <about></about>
    `,
    components: {
        about,
    },
};

const routes = [
    { path: "/", component: Home },
    { path: "/details", component: Detail },
    { path: "/about", component: About },
];

const router = new VueRouter({
    routes, // short for `routes: routes`
});

const app = new Vue({
    router,
    template: `
    <div id="app">
        <sidebar></sidebar>
        <pageHolder></pageHolder>
    </div>
    `,
    components: {
        sidebar,
        pageHolder,
    },
}).$mount("#app");
