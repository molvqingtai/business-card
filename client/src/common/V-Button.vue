<template>
  <button
    @click="$emit('click')"
    type="button"
    :disabled="disabled"
    class="inline-flex justify-center items-center shadow-md border border-transparent transition ease-in-out focus:outline-none"
    :class="[typeClass,sizeClass,shapeClass]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClass () {
      return {
        default:
          'text-gray-600 bg-white hover:bg-gray-100 focus:border-gray-200',
        primary:
          'text-white bg-teal-500 hover:bg-teal-400 focus:border-teal-500',
        warning: 'text-white bg-red-500 hover:bg-red-400 focus:border-red-500'
      }[this.type]
    },
    sizeClass () {
      return {
        large: this.round ? 'p-3 text-md' : 'px-5 py-3 text-md',
        default: this.round ? 'p-2 text-sm' : 'px-4 py-2 text-sm',
        small: this.round ? 'p-1 text-xs' : 'px-2 py-1 text-xs'
      }[this.size]
    },
    shapeClass () {
      return this.round ? 'rounded-full' : 'rounded-md'
    }
  }
}
</script>

<style>
</style>
