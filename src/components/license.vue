<script>
import mixin from '@/utils/mixin'
export default {
  render: function (comp, createElement) {
    if (mixin([]).methods.checkLicenseData(this.currentLicense)) {
      // return createElement(
      //   'div',   // 标签名称
      //   this.$slots.default // 子节点数组
      // )
      // return <AuthFilter {...newProps} />
    }
    return null
  },
  props: {
    currentLicense: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped></style>
