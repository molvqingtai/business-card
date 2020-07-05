<template>
  <div class="wrapper w-screen min-h-screen py-5 flex justify-center">
    <div v-if="userInfo" class="flex flex-col items-center justify-evenly max-w-md">
      <div class="info-card w-11/12 shadow-md rounded-lg mt-12">
        <div class="flex items-center justify-center -mt-12">
          <img
            :src="userInfo.avatar"
            class="rounded-full w-24 h-24 object-cover shadow-md align-middle border-white border-4"
          />
        </div>
        <div class>
          <div class="info-card__bar my-5 pl-5 pr-10 py-2 inline-block">
            <p class="text-white text-sm">四川肆拾伍度贸易有限公司</p>
          </div>
          <div class="pr-5 pl-5 pb-5 text-gray-600 info-card__content text-lg">
            <div class="flex my-3">
              <i class="material-icons pr-2">perm_identity</i>
              <span class="whitespace-no-wrap">名称：</span>
              <p class="pl-2">{{userInfo.name}}</p>
            </div>
            <div class="flex my-3">
              <i class="material-icons pr-2">card_travel</i>
              <span class="whitespace-no-wrap">职位：</span>
              <p class="pl-2">{{userInfo.level}}</p>
            </div>
            <div class="flex my-2">
              <i class="material-icons pr-2">format_list_bulleted</i>
              <span class="whitespace-no-wrap">工号：</span>
              <p class="pl-2">{{userInfo.index}}</p>
            </div>
            <div class="flex my-2 mt-8">
              <i class="material-icons pr-2">phone_android</i>
              <span class="whitespace-no-wrap">电话：</span>
              <a href="tel:13551294010" class="pl-2 text-purple-600">{{userInfo.phone}}</a>
            </div>
            <div class="flex my-2">
              <i class="material-icons pr-2">mail_outline</i>
              <span class="whitespace-no-wrap">邮箱：</span>
              <a href="mailto:molvqingtai@gmail.com" class="pl-2 text-purple-600">{{userInfo.email}}</a>
            </div>
            <div class="flex my-2">
              <i class="material-icons pr-2">domain</i>
              <span class="whitespace-no-wrap">地址：</span>
              <p class="pl-2">{{userInfo.address}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="code-card w-11/12 shadow-md rounded-lg p-5 my-5">
        <div class="flex overflow-hidden justify-between">
          <div class="flex-1 flex flex-col justify-center items-center">
            <img :src="userInfo.wechat" alt />
            <p class="text-gray-600">加我微信</p>
          </div>
          <div class="flex-1 flex flex-col justify-center items-center">
            <img src="@/assets/images/qrcode-public.jpg" alt />
            <p class="text-gray-600">关注公众号</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <img src="@/assets/images/logo-2.png" class="w-3/12" />
      </div>
    </div>
    <div v-else class="wrapper w-screen h-screen flex flex-col justify-center items-center fixed">
      <h1 class="text-gray-600 leading-10 text-lg">没有此员工信息</h1>
      <p class="text-gray-600 leading-10 text-lg">请扫描公众号，联系管理员</p>
      <img src="@/assets/images/qrcode-public.jpg" class="w-4/12 mt-10 rounded-md" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
export default {
  name: 'VCard',
  props: {
    // 用户 id
    id: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      userInfo: null // 用户信息
    }
  },
  methods: {
    /**
     * 获取用户信息
     */
    async getUserInfo () {
      try {
        if (this.id) {
          this.userInfo = (await getUserInfo({ id: this.id })) || {}
        } else {
          this.$toast.error('错误，请扫描二维码！')
        }
      } catch (error) {
        this.$toast.error(error.message)
      }
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #ededed;
  background-image: url("~@/assets/images/texture.png");
}
.info-card {
  background-color: #fffefa;
  &__content {
    text-shadow: 3px 3px 3px #dddddd;
  }
}
.code-card {
  background-color: #fffefa;
  text-shadow: 3px 3px 3px #dddddd;
}
.info-card__bar {
  background-image: linear-gradient(-45deg, transparent 15%, red 0%);
}
</style>
