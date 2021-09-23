import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

/**
 * loadLocaleMessages函数实现
 * messages = {
     en: require('./en.json'),
     zh: require('./zh.json')
  } 的效果
**/
type localeType = "cn" | "en";
function loadLocaleMessages() {
  const locales = require.context(
    "@/locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: any = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale: localeType = matched[1] as localeType;
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: "cn",
  fallbackLocale: "cn", // 使用fallbackLocale：'<lang>'选择首选语言缺少翻译时要使用的语言。
  messages: loadLocaleMessages(),
});
