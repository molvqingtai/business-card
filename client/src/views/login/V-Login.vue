<template>
  <main>
    <section class="absolute w-full h-full" :style="{'background-image': 'url(' + require('@/assets/images/texture.png') + ')'}">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h1 class="text-gray-600 font-bold">
                    ADMIN LOGIN
                  </h1>
                </div>
                <hr class="mt-6 border-b-1 border-gray-400" />
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <validation-observer ref="form">
                  <form>
                    <ValidationProvider rules="required|email" v-slot="{ errors }">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">USERNAME</label>
                        <input v-model="form.username" type="text" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Username" style="transition: all 0.15s ease 0s;"/>
                        <p>{{errors}}</p>
                      </div>
                    </ValidationProvider>
                    <ValidationProvider rules="required|length:16" v-slot="{ errors }">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Password</label>
                        <input v-model="form.password" type="password" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Password" style="transition: all 0.15s ease 0s;"/>
                        <p>{{errors}}</p>
                      </div>
                    </ValidationProvider>
                    <div>
                      <label class="inline-flex items-center cursor-pointer">
                        <input id="customCheckLogin" type="checkbox" class="form-checkbox text-gray-800 ml-1 w-5 h-5" style="transition: all 0.15s ease 0s;"/>
                        <span class="ml-2 text-sm font-semibold text-gray-700">Remember me</span>
                      </label>
                    </div>
                    <div class="text-center mt-6">
                      <button @click="handleSubmit" class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" style="transition: all 0.15s ease 0s;">
                        Sign In
                      </button>
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
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach(rule => extend(rule, rules[rule]))

export default {
  name: 'VLogin',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }

    }
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  methods: {
    async handleSubmit () {
      const status = await this.$refs.form.validate()
      console.log(status)
      debugger
    }
  }
}
</script>

<style lang="scss" scoped>
 .wrapper{
    background-color:#EDEDED;
    background-image: url('~@/assets/images/texture.png');
 }
</style>
