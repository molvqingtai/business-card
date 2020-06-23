<template>
  <main>
    <section
      class="w-screen h-screen flex justify-center items-center"
      :style="{'background-image': 'url(' + require('@/assets/images/texture.png') + ')'}"
    >
      <div class="container px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="max-w-md w-screen px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 bg-opacity-50"
            >
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h1 class="text-teal-500 text-2xl text-bold">Sign In</h1>
                </div>
              </div>
              <div class="flex-auto px-10 py-10 pt-0">
                <validation-observer ref="form">
                  <form>
                    <ValidationProvider rules="required" v-slot="{errors,failed}" name="用户名称">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-500 text-sm mb-2"
                          for="username"
                        >用户名称</label>
                        <input
                          v-on:keyup.enter="handleSubmitSignIn"
                          v-model="form.username"
                          type="text"
                          :class="failed?['border-red-500']:['border-transparent']"
                          class="focus:outline-none border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full"
                          placeholder="Username"
                          style="transition: all 0.15s ease 0s;"
                        />
                        <p class="text-xs h-6 leading-6 text-red-600">{{errors[0]}}</p>
                      </div>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors,failed}" name="用户密码">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-500 text-sm mb-2"
                          for="password"
                        >用户密码</label>
                        <input
                          v-on:keyup.enter="handleSubmitSignIn"
                          v-model="form.password"
                          type="password"
                          :class="failed?['border-red-500']:['border-transparent']"
                          class="focus:outline-none border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full"
                          placeholder="Password"
                          style="transition: all 0.15s ease 0s;"
                        />
                        <p class="text-xs h-6 leading-6 text-red-600">{{errors[0]}}</p>
                      </div>
                    </ValidationProvider>
                    <div>
                      <label class="inline-flex items-center cursor-pointer">
                        <input
                          v-on:keyup.enter="handleSubmitSignIn"
                          type="checkbox"
                          class="cursor-pointer form-checkbox text-teal-500 w-5 h-5 focus:border-teal-300 border-teal-300 focus:outline-none focus:shadow-none"
                          style="transition: all 0.15s ease 0s;"
                        />
                        <span class="ml-2 text-sm text-gray-500">记住密码</span>
                      </label>
                    </div>
                    <div class="text-center mt-6">
                      <v-button @click="handleSubmitSignIn" type="primary" size="large" class="w-full">登 录</v-button>
                    </div>
                  </form>
                </validation-observer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { mapActions } from 'vuex'
import VButton from '@/common/V-Button'

extend('required', {
  ...required,
  message: name => `请输入${name}！`
})

export default {
  name: 'VLogin',
  data () {
    return {
      form: {
        username: '', // 管理员账号
        password: '' // 管理员密码
      }
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    VButton
  },
  methods: {
    /**
     * 管理员登录
     */
    async handleSubmitSignIn () {
      const status = await this.$refs.form.validate()

      if (status) {
        try {
          await this.login(this.form)
          this.$router.replace({ name: 'Admin' })
        } catch (error) {
          this.$toast.error(error.message)
        }
      }
    },
    ...mapActions(['login'])
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #ededed;
  background-image: url("~@/assets/images/texture.png");
}
</style>
