<template>
  <transition name="modal" v-if="showModal">
    <div class="fixed z-50 w-screen h-screen top-0 left-0 bg-black bg-opacity-25 flex justify-center items-center" style="transition: opacity 0.3s ease;">
      <div class="bg-white rounded-lg shadow-xl transform transition-all modal-container p-4" style="transition: all 0.3s ease;">
        <slot name="body"></slot>
        <slot name="footer">
          <div class="px-4 py-3 flex items-center justify-end">
            <v-button @click="handleCancel" :type="cancelType">
              {{cancelText}}
            </v-button>
            <v-button @click="handleConfirm" :type="confirmType" class="ml-5">
              {{confirmText}}
            </v-button>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import VButton from './V-Button'
export default {
  name: 'VModal',
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: '确 认'
    },
    confirmType: {
      type: String,
      default: 'primary'
    },
    cancelText: {
      type: String,
      default: '取 消'
    },
    cancelType: {
      type: String,
      default: 'default'
    },
    onCancel: {
      type: Function,
      default: () => () => true
    },
    onConfirm: {
      type: Function,
      default: () => () => true
    }
  },
  model: {
    prop: 'showModal',
    event: 'close'
  },
  components: {
    VButton
  },
  methods: {
    async handleCancel () {
      await this.onCancel() && this.$emit('cancel') && this.$emit('close', false)
    },
    async handleConfirm () {
      await this.onConfirm() && this.$emit('confirm') && this.$emit('close', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
