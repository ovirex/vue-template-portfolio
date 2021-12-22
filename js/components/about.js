import aboutDescription from "../components/about-components/description.js";
import aboutSkill from "../components/about-components/skill.js";
import aboutFunFacts from "../components/about-components/fun-facts.js";

export default {
    template: `
    <div>
        <about-description></about-description>
        <h2 class="h1">Work experience</h2>
        <p class="text-muted mb-4">Received overcame oh sensible so at an. Formed do change merely to county it.</p>
        <div class="row mb-4">
            <about-skill></about-skill>
            <about-skill></about-skill>
            <about-skill></about-skill>
            <about-skill></about-skill>
        </div>
        <h2 class="h1">Fun facts</h2>
        <p class="text-muted mb-4">Received overcame oh sensible so at an. Formed do change merely to county it.</p>
        <div class="row text-center align-items-stretch">
            <about-fun-facts></about-fun-facts>
            <about-fun-facts></about-fun-facts>
            <about-fun-facts></about-fun-facts>
            <about-fun-facts></about-fun-facts>
        </div>
    </div>
    `,
    components: {
        aboutDescription,
        aboutSkill,
        aboutFunFacts,
    },
};
