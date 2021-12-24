export default {
    template: `
    <div class="sidebar-menu-holder flex-grow-1">
        <ul class="sidebar-menu list-unstyled">
            <li class="mb-2 pb-1">
                <!-- Link--><router-link class="sidebar-link h6 text-uppercase letter-spacing-2 font-weight-bold text-small" to="/">Home</router-link>
            </li>
            <li class="mb-2 pb-1">
                <!-- Link--><router-link class="sidebar-link h6 text-uppercase letter-spacing-2 font-weight-bold text-small" to="/social-media-design">Social Media Design</router-link>
            </li>
            <li class="mb-2 pb-1">
                <!-- Link--><router-link class="sidebar-link h6 text-uppercase letter-spacing-2 font-weight-bold text-small" to="/web-design">Web Design</router-link>
            </li>
            <li class="mb-2 pb-1">
                <!-- Link--><router-link class="sidebar-link h6 text-uppercase letter-spacing-2 font-weight-bold text-small" to="/art-direction">Art Direction</router-link>
            </li>
            <li class="mb-2 pb-1">
                <!-- Link--><router-link class="sidebar-link h6 text-uppercase letter-spacing-2 font-weight-bold text-small" to="/about">About</router-link>
            </li>
        </ul>
    </div>
    `,
};
