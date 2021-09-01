import _ from "lodash";
import color from "./mix.js";

class PropertyUtil {
  constructor(vuetify, options, theme) {
    this.vuetify = vuetify;
    this.options = options;
    this.theme = theme;
  }

  set theme(val) {
    if (
      _.isEmpty(this.options) ||
      _.isEmpty(val) ||
      _.isEmpty(this.options[val])
    ) {
      return;
    }
    this._defaultOption = val;
    if (this.vuetify) {
      Object.keys(this.options[val]).forEach((theme) => {
        this.vuetify.framework.theme.setTheme(theme, this.options[val][theme]);
      });
    }
  }

  get theme() {
    return this._defaultOption;
  }

  get currentTheme() {
    return this.vuetify.framework.theme.currentTheme;
  }
}

export default {
  install(Vue, options) {
    options = options || {};
    Vue.prototype.$theme = new PropertyUtil(
      options.vuetify,
      color,
      options.theme || "green"
    );
  },
};
