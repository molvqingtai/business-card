<template>
  <div class="sm:p-6 lg:p-8 wrapper min-h-screen">
    <div class="flex flex-col">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full overflow-hidden shadow-md sm:rounded-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  名称
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  工号
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  职位
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  手机
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  地址
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  二维码
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="user in list" :key="user.id">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full object-cover" :src="user.avatar"/>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">{{user.name}}</div>
                      <div class="text-sm leading-5 text-gray-500">{{user.email}}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  {{user.index}}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="py-1 px-2 text-xs bg-orange-200 text-orange-400 rounded-md ">{{user.level}}</span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm text-gray-500">
                  {{user.phone}}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm text-gray-500">
                  {{user.address}}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm text-gray-500">
                  <v-button type="primary" size="small" @click="handleOpenQRCode(user.id,user.name)">
                    <span class="mr-1">生成</span> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="14px" height="14px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M3,11h8V3H3V11z M5,5h4v4H5V5z"/><path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z"/><path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z"/><rect height="2" width="2" x="19" y="19"/><rect height="2" width="2" x="13" y="13"/><rect height="2" width="2" x="15" y="15"/><rect height="2" width="2" x="13" y="17"/><rect height="2" width="2" x="15" y="19"/><rect height="2" width="2" x="17" y="17"/><rect height="2" width="2" x="17" y="13"/><rect height="2" width="2" x="19" y="15"/></g></g></svg>
                  </v-button>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex justify-end">
                    <v-button size="small" type="primary" @click="handleOpenForm(user.id)">
                      编辑 <i class="material-icons text-sm ml-1">edit</i>
                    </v-button>
                    <v-button size="small" type="warning" @click="handleRemoveItem(user.id)" class="ml-5">
                      删除 <i class="material-icons text-sm ml-1">delete</i>
                    </v-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <v-button @click="handleOpenForm" type="primary" round class=" fixed bottom-0 right-0 mr-8 mb-8">
      <i class="material-icons">add</i>
    </v-button>
    <v-modal v-model="showToastModal" confirmType="warning" @cancel="$emit('cancel')" @confirm="$emit('confirm')">
      <template #body>
        <div class="bg-white p-4 max-w-lg w-screen">
          <div class="flex">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-700">
                删除员工
              </h3>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  您确定要删除该员工吗？该员工数据将永久删除，此操作无法撤销。
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </v-modal>
    <v-modal v-model="showFormModal">
      <template #body>
        <validation-observer ref="form" class="max-w-xl w-screen block">
          <form class="px-8 pb-0 pt-8 flex">
            <div class="flex flex-col justify-around mr-10">
              <ValidationProvider rules="required" v-slot="{errors}" name="头像">
                <div class="mb-5 w-full flex flex-col items-center justify-center">
                  <div class="upload flex justify-center items-center rounded-full w-24 h-24 shadow-md border-white border-4 overflow-hidden">
                    <img v-if="form.avatar" :src="form.avatar" class="w-full h-full object-cover align-middle">
                  </div>
                  <label for="avatar" class="flex flex-col items-center justify-center">
                    <input @change="handleAvatarChange" ref="avatar-input" id="avatar" type="file" accept="image/png,image/jpeg" class="hidden">
                    <input v-model="form.avatar" type="text" class="hidden">
                    <v-button size="small" type="primary" class="mt-3" @click="$refs['avatar-input'].click()">
                      上传头像
                      <i class="material-icons text-sm ml-1">cloud_upload</i>
                    </v-button>
                  </label>
                  <p class="text-xs h-6 leading-8 text-red-600 text-cente">{{errors[0]}}</p>
                </div>
              </ValidationProvider>
              <ValidationProvider rules="required" v-slot="{errors}" name="微信">
                <div class="mb-5 w-full flex flex-col items-center justify-center">
                  <div class="upload flex justify-center items-center rounded-md w-24 h-24 shadow-md border-white border-4 overflow-hidden">
                    <img v-if="form.wechat" :src="form.wechat" class="avatar__image w-full h-full object-cover align-middle">
                  </div>
                  <label for="wechat">
                    <input @change="handleWechatChange" ref="wechat-input" id="wechat" type="file" accept="image/png,image/jpeg" class="hidden">
                    <input v-model="form.wechat" type="text" class="hidden">
                    <v-button size="small" type="primary" class="mt-3" @click="$refs['wechat-input'].click()">
                      上传微信
                      <i class="material-icons text-sm ml-1">cloud_upload</i>
                    </v-button>
                  </label>
                  <p class="text-xs h-6 leading-8 text-red-600 text-center">{{errors[0]}}</p>
                </div>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider rules="required" v-slot="{errors,failed}" name="名称">
                <div class="w-full">
                  <label for="name" class="flex flex-col mb-3">
                    <div class="flex items-center">
                      <span class="whitespace-no-wrap text-gray-500">名 称：</span>
                      <input v-model="form.name" id="name" type="text" :class="{'border-red-500':failed}" class="ml-2 focus:outline-none border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full transition ease-in-out border-transparent" placeholder="Please input name">
                    </div>
                    <p class="ml-16 text-xs h-6 leading-6 text-red-600">{{errors[0]}}</p>
                  </label>
                </div>
              </ValidationProvider>
              <div class="flex">
                <ValidationProvider rules="required" v-slot="{errors,failed}" name="职位">
                  <label for="level" class="flex flex-col mb-3">
                    <div class="flex items-center">
                      <span class="whitespace-no-wrap text-gray-500">职 位：</span>
                      <input v-model="form.level" id="level" type="text" :class="{'border-red-500':failed}" class="ml-2 focus:outline-none border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full transition ease-in-out border-transparent" placeholder="Please input level">
                    </div>
                    <p class="ml-16 text-xs h-6 leading-6 text-red-600">{{errors[0]}}</p>
                  </label>
                </ValidationProvider>
                <ValidationProvider rules="required" v-slot="{errors,failed}" name="工号">
                  <label for="index" class="flex flex-col ml-5 mb-3">
                    <div class="flex items-center">
                      <span class="whitespace-no-wrap text-gray-500">工 号：</span>
                      <input v-model="form.index" id="index" type="text" :class="{'border-red-500':failed}" class="ml-2 focus:outline-none border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full transition ease-in-out border-transparent" placeholder="Please input index">
                    </div>
                    <p class="ml-16 text-xs h-6 leading-6 text-red-600">{{errors[0]}}</p>
                  </label>
                </ValidationProvider>
              </div>
              <ValidationProvider rules="required|phone" v-slot="{errors,failed}" name="手机号">
                <div>
                  <label for="phone" class="flex flex-col mb-3">
                    <div class="flex items-center">
                      <span class="whitespace-no-wrap text-gray-500">手 机：</span>
                      <input v-model="form.phone" id="phone" type="tel" :class="{'border-red-500':failed}" class="ml-2 focus:outline-none border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full transition ease-in-out border-transparent" placeholder="Please input phone">
                    </div>
                    <p class="ml-16 text-xs h-6 leading-6 text-red-600">{{errors[0]}}</p>
                  </label>
                </div>
              </ValidationProvider>
              <ValidationProvider rules="required|email" v-slot="{errors,failed}" name="邮箱账号">
                <div>
                  <label for="email" class="flex flex-col mb-3">
                    <div class="flex items-center">
                      <span class="whitespace-no-wrap text-gray-500">邮 箱：</span>
                      <input v-model="form.email" id="email" type="email" :class="{'border-red-500':failed}" class="ml-2 focus:outline-none border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full transition ease-in-out border-transparent" placeholder="Please input email">
                    </div>
                    <p class="ml-16 text-xs h-6 leading-6 text-red-600">{{errors[0]}}</p>
                  </label>
                </div>
              </ValidationProvider>
              <ValidationProvider rules="required" v-slot="{errors,failed}" name="地址">
                <div>
                  <label for="address" class="flex flex-col mb-3">
                    <div class="flex">
                      <span class="whitespace-no-wrap text-gray-500">地 址：</span>
                      <textarea v-model="form.address" id="address" placeholder="Please input address" rows="3" :class="{'border-red-500':failed}" class="ml-2 focus:outline-none border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full transition ease-in-out border-transparent"></textarea>
                    </div>
                    <p class="ml-16 text-xs h-6 leading-6 text-red-600">{{errors[0]}}</p>
                  </label>
                </div>
              </ValidationProvider>
            </div>

          </form>
        </validation-observer>
      </template>
      <template #footer>
        <div class="px-4 py-3 flex items-center justify-center">
          <v-button @click="$emit('cancel')">取 消</v-button>
          <v-button @click="$emit('confirm')" type="primary" class="ml-16">保 存</v-button>
        </div>
      </template>
    </v-modal>
    <v-modal v-model="showQRCodeModal">
      <template #body>
        <v-qrcode :url="url"></v-qrcode>
      </template>
      <template #footer>
        <div class="px-4 py-3 flex items-center justify-center">
          <v-button @click="$emit('cancel')">取 消</v-button>
          <v-button @click="$emit('confirm')" type="primary" class="ml-16">下 载</v-button>
        </div>
      </template>
    </v-modal>
  </div>
</template>

<script>
import { searchUserList, removeUserItem, updateUserItem, createUserItem, uploadUserFile } from '@/api'
import VModal from '@/common/V-Modal.vue'
import VButton from '@/common/V-Button'
import VQrcode from '@/common/V-Qrcode'
import QRCode from 'qrcode'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: name => {
    const isImage = ['微信', '头像'].includes(name)
    return isImage ? `请上传${name}` : `请输入${name}！`
  }
})
extend('email', {
  ...email,
  message: name => `${name}格式不正确！`
})
extend('phone', {
  validate (value) {
    return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value)
  },
  message: name => `${name}格式不正确！`
})

export default {
  name: 'VAdmin',
  data () {
    return {
      showFormModal: false, // 用户详情弹窗
      showToastModal: false, // 删除用户弹窗
      showQRCodeModal: false, // 二维码弹窗
      keywords: null, // 用户列表模糊查询
      list: [], // 用户列表
      form: {}, // 用户详情表单
      url: '' // 用户名片链接
    }
  },
  components: {
    VModal,
    VButton,
    ValidationObserver,
    ValidationProvider,
    VQrcode
  },
  methods: {
    resetFormData () {
      this.form = {
        id: '',
        name: '',
        level: '',
        index: '',
        phone: '',
        email: '',
        address: '',
        avatar: '',
        wechat: ''
      }
    },
    /**
     * 查询用户列表
     */
    async handleSearchList () {
      try {
        this.list = await searchUserList() || []
      } catch (error) {
        this.$toast.error(error.message)
      }
    },
    /**
     * 删除用户项
     */
    async handleRemoveItem (id) {
      try {
        this.showToastModal = true
        this.$on('confirm', async e => {
          await removeUserItem({ id })
          await this.handleSearchList()
          this.$off()
          this.$toast.success('删除成功！')
        })
        this.$on('cancel', e => this.$off())
      } catch (error) {
        this.$on('cancel', e => this.$off())
        this.$toast.error(error.message)
      }
    },
    /**
     * 编辑用户项
     */
    async handleUpdateItem (user) {
      try {
        await updateUserItem(user)
        await this.handleSearchList()
      } catch (error) {
        this.$toast.error(error.message)
      }
    },

    /**
     * 创建用户项
     */
    async handleCreateItem (form) {
      try {
        await createUserItem(form)
        await this.handleSearchList()
      } catch (error) {
        this.$toast.error(error.message)
      }
    },

    /**
     * 打开表单 Modal
     */
    handleOpenForm (id) {
      this.showFormModal = true
      this.form = { ...(this.list.find(user => user.id === id) || {}) }
      this.$on('confirm', async e => {
        const status = await this.$refs.form.validate()
        if (status) {
          // if 用户ID？编辑:新建
          this.form.id ? await this.handleUpdateItem(this.form) : await this.handleCreateItem(this.form)
          this.showFormModal = false
          this.$off()
          this.resetFormData()
          this.$toast.success('保存成功！')
        }
      })
      this.$on('cancel', e => {
        this.showFormModal = false
        this.$off()
        this.resetFormData()
      })
    },

    /**
     * 更改用户头像
     */
    async handleAvatarChange (e) {
      try {
        const file = e.target.files[0]
        if (file) {
          const { url: avatar } = await this.uploadImageFile(file, 'avatar')
          this.form = { ...this.form, avatar }
        }
      } catch (error) {
        this.$toast.error(error.message)
      }
    },

    /**
     * 更改用户微信
     */
    async handleWechatChange (e) {
      try {
        const file = e.target.files[0]
        if (file) {
          const { url: wechat } = await this.uploadImageFile(file, 'wechat')
          this.form = { ...this.form, wechat }
        }
      } catch (error) {
        this.$toast.error(error.message)
      }
    },

    /**
     * 上传图片
     */
    async uploadImageFile (file, name) {
      if (file.size <= 1024 * 1024) {
        const formData = new FormData()
        formData.append(name, file)
        const res = await uploadUserFile(formData)
        this.$toast.success('上传完成！')
        return res
      } else {
        throw new Error('上传失败，图片不能大于 1MB')
      }
    },

    /**
     * 打开二维码 Modal
     */
    handleOpenQRCode (id, name) {
      this.url = `${location.origin}/user/${id}`
      this.showQRCodeModal = true
      this.$on('confirm', async e => {
        await this.downloadQRCode(this.url, name)
        this.showQRCodeModal = false
        this.$off()
      })
      this.$on('cancel', e => {
        this.showQRCodeModal = false
        this.$off()
      })
    },

    /**
     * 下载二维码
     */
    async downloadQRCode (url, name) {
      try {
        const dataUrl = await QRCode.toDataURL(url)
        const a = document.createElement('a')
        a.download = name
        a.href = dataUrl
        a.click()
      } catch (error) {
        this.$toast.error(error.message)
      }
    }
  },
  mounted () {
    // 初始化表单
    this.resetFormData()
    // 获取用户列表
    this.handleSearchList()
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: #ededed;
    background-image: url("~@/assets/images/texture.png");
  }
  .upload{
    background-color: #ededed;
    background-image: url("~@/assets/images/texture.png");
  }
</style>
