<template>
  <v-app-bar :clipped-left="primaryDrawer.clipped" app>
    <v-app-bar-nav-icon
      v-if="primaryDrawer.type !== 'permanent'"
      @click.stop="primaryDrawer.model = !primaryDrawer.model"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>
    <div class="locale-changer">
      <select v-model="$i18n.locale" class="select">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: false,
    },
    langs: ["cn", "en"],
  }),
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style lang="scss">
.memu {
  width: 200px;
  height: 100%;
  background-color: #f9f;
}
</style>
