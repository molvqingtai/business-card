<template>
  <div ref="qr-code" class="flex flex-col justify-center items-center p-10">
    <img :src="dataUrl" class="mb-5">
    <p class="bg-orange-200 text-orange-400 rounded-md text-xs py-1 px-2">{{url}}</p>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'VQrcode',
  props: {
    url: {
      type: String,
      default: 'qrcode url'
    }
  },
  data () {
    return {
      dataUrl: ''
    }
  },
  watch: {
    url: {
      async handler () {
        try {
          this.dataUrl = await QRCode.toDataURL(this.url)
        } catch (error) {
          this.$toast.error(error.message)
        }
      },
      immediate: true
    }
  }
}
</script>

<style>

</style>
