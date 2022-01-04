import Vue from "vue";
import Vuetify, {
  VBtn,
  VCard,
  VHover,
  VIcon,
  VRadioGroup,
  VRadio,
} from "vuetify/lib";
// import "@mdi/font/css/materialdesignicons.css";
// import "@/assets/font/iconfont.css";
import zhHans from "./vuetify_zh_Hans";
import en from "vuetify/es5/locale/en";
import Theme from "./theme";
// import icons from "./icon";

Vue.use(Vuetify);

const myVuetify = new Vuetify({
  components: {
    VBtn,
    VCard,
    VHover,
    VIcon,
    VRadioGroup,
    VRadio,
  },
  lang: {
    locales: { cn: zhHans, en: en },
    current: "cn",
  },
});

Vue.use(Theme, {
  vuetify: myVuetify,
  theme: "green",
});

export default myVuetify;
