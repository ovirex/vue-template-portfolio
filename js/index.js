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
    props: ["id"],
    template: `
        <detail :id="id"></detail>
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
    { path: "/social-media-design", component: Home },
    { path: "/web-design", component: Home },
    { path: "/art-direction", component: Home },
    { path: "/works/:id", component: Detail, props: true },
    { path: "/about", component: About },
];

const router = new VueRouter({
    mode: "history",
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
