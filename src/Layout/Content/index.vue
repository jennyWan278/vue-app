<template>
  <div class="content">
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: ["ja", "en"],
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style lang="scss">
.memu {
  width: 200px;
  height: 100%;
  background-color: #99f;
}
</style>
