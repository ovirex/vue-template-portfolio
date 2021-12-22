import detailDescription from "../components/detail-components/description.js";
import lightbox from "../components/detail-components/lightbox.js";

export default {
    template: `
    <div>
        <div class="row">
            <div class="col-lg-7">
                <h1>Tour de France</h1>
                <p class="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="row mb-5">
            <lightbox></lightbox>
            <detail-description></detail-description>
        </div>
    </div>
    `,
    components: {
        detailDescription,
        lightbox,
    },
};
