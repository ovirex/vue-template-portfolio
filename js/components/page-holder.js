import navbar from "../components/navbar.js";
import contentWrapper from "../components/content-wrapper.js";
import footerComponent from "../components/footer.js";

export default {
    template: `
    <div class="page-holder">
        <navbar></navbar>
        <content-wrapper></content-wrapper>
        <footer-component></footer-component>
    </div>
    `,
    components: {
        navbar,
        contentWrapper,
        footerComponent,
    },
};
