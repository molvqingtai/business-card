<template>
  <div class="fixed w-screen h-screen flex justify-center items-center bg-white top-0 left-0">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: 'VLoading'
}
</script>

<style>
.loading {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: rgb(56, 178, 172);
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
