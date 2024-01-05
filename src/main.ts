import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faGithub);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
