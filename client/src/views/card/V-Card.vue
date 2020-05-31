<template>
  <div class="wrapper w-screen min-h-screen flex flex-col items-center justify-evenly py-5">
    <div class="info-card w-11/12 shadow-md rounded-lg mt-12">
        <div class="flex items-center justify-center -mt-12">
          <img src="@/assets/images/avatar.jpg" class="rounded-full w-24 h-24 object-cover shadow-md align-middle border-white border-4">
        </div>
        <div class="">
          <div class="info-card__bar my-5 pl-5 pr-10 py-2 inline-block">
            <p class="text-white text-sm">四川肆拾伍度贸易有限公司</p>
          </div>
          <div class="pr-5 pl-5 pb-5 text-gray-600 info-card__content text-lg">
            <div class="flex my-3">
              <i class="material-icons pr-2">perm_identity</i>
              <span class="whitespace-no-wrap">名称：</span>
              <p class="pl-2">墨绿青苔</p>
            </div>
            <div class="flex my-3">
              <i class="material-icons pr-2">card_travel</i>
              <span class="whitespace-no-wrap">职位：</span>
              <p class="pl-2">监事</p>
            </div>
            <div class="flex my-2">
              <i class="material-icons pr-2">format_list_bulleted</i>
              <span class="whitespace-no-wrap">工号：</span>
              <p class="pl-2">0002</p>
            </div>
            <div class="flex my-2 mt-8">
              <i class="material-icons pr-2">phone_android</i>
              <span class="whitespace-no-wrap">电话：</span>
              <a href="tel:13551294010" class="pl-2 text-purple-600">13551294010</a>
            </div>
            <div class="flex my-2">
              <i class="material-icons pr-2">mail_outline</i>
              <span class="whitespace-no-wrap">邮箱：</span>
              <a href="mailto:molvqingtai@gmail.com" class="pl-2 text-purple-600">molvqingtai@gmail.com</a>
            </div>
            <div class="flex my-2">
              <i class="material-icons pr-2">domain</i>
              <span class="whitespace-no-wrap">地址：</span>
              <p class="pl-2">成都市锦江区牛市口通宝街财富中心 1609 号</p>
            </div>
          </div>
      </div>
    </div>
    <div class="code-card w-11/12 shadow-md rounded-lg p-5 my-5">
      <div class="flex overflow-hidden justify-between">
        <div class="flex-1 text-center">
          <img src="@/assets/images/qr-code.jpg" alt="">
          <p class="text-gray-600">加我微信</p>
        </div>
        <div class="flex-1 text-center">
          <img src="@/assets/images/qr-code.jpg" alt="">
          <p class="text-gray-600">关注公众号</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <img src="@/assets/images/logo-2.png" class="w-3/12">
    </div>
  </div>
</template>

<script>

export default {
  name: 'VCard',
  data () {
    return {
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    background-color:#EDEDED;
    background-image: url('~@/assets/images/texture.png');
  }
  .info-card{
    background-color: #fffefa;
    &__content{
      text-shadow: 3px 3px 3px #DDDDDD;
    }
  }
  .code-card{
    background-color: #fffefa;
    text-shadow: 3px 3px 3px #DDDDDD;
  }
  .info-card__bar{
    background-image: linear-gradient(-45deg,transparent 15%, red 0%);
  }
</style>
