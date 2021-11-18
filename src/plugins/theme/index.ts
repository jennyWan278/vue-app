import _ from "lodash";
import color, { Tmix } from "./mix";
type Tcolor = "blue" | "green";
type Ttheme = "blue" | "green";
class PropertyUtil {
  public vuetify;
  public colorObj: Tmix;
  public _defaultTheme: any;
  public constructor(vuetify: any, colorObj: Tmix, theme: Ttheme) {
    this.vuetify = vuetify;
    this.colorObj = colorObj;
    this.theme = theme;
  }

  set theme(val: Tcolor) {
    if (
      _.isEmpty(this.colorObj) ||
      _.isEmpty(val) ||
      _.isEmpty(this.colorObj[val])
    ) {
      return;
    }
    this._defaultTheme = val;
    if (this.vuetify) {
      // item: 'light'|'dark'
      Object.keys(this.colorObj[val]).forEach((item) => {
        this.vuetify.framework.theme.setTheme(item, this.colorObj[val][item]);
      });
    }
  }

  get theme() {
    return this._defaultTheme;
  }

  get currentTheme() {
    return this.vuetify.framework.theme.currentTheme;
  }
}

export default {
  install(Vue: any, options: any) {
    options = options || {};
    Vue.prototype.$theme = new PropertyUtil(
      options.vuetify,
      color,
      options.theme || "green"
    );
  },
};
