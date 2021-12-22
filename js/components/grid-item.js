export default {
    template: `
    <div class="col-lg-4 col-md-6 grid-item mb-4">
        <div class="listing-item">
            <div class="position-relative">
                <ul class="list-inline listing-tags m-0">
                    <li class="list-inline-item">
                        <router-link class="reset-anchor font-weight-normal text-gray text-small" to="/details">Creative</router-link>
                    </li>
                </ul>
                <router-link class="reset-anchor d-block listing-img-holder" to="/details">
                    <img class="img-fluid" src="img/portfolio-3.jpg" alt="">
                    <p class="mb-0 text-primary small d-flex align-items-center listing-btn"> <span>Look inside</span>
                        <svg class="svg-icon text-primary svg-icon-sm ml-2">
                        <use xlink:href="#arrow-right-1"> </use>
                        </svg>
                    </p>
                </router-link>
            </div>
            <div class="py-3">
                <router-link class="reset-anchor" to="/details">
                    <h2 class="h5 listing-item-heading">Tour de France</h2>
                </router-link>
                <p class="text-small mb-0 listing-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing
                elit</p>
            </div>
        </div>
    </div>
    `,
};
