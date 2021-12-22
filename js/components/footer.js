import footerFollow from "../components/footer-components/follow.js";
import footerAbout from "../components/footer-components/about.js";
import footerCopyright from "../components/footer-components/copyright.js";

export default {
    template: `
    <footer class="text-muted" style="background: #0d0d0d">
      <div class="container-fluid py-5">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="row">
              <footer-about></footer-about>
              <footer-follow></footer-follow>
            </div>
          </div>
        </div>
      </div>
      <footer-copyright></footer-copyright>
    </footer>
    `,
    components: {
        footerAbout,
        footerFollow,
        footerCopyright,
    },
};
