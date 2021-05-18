<template>
  <div>
    <button v-on:click="onClick()">{{ title }}</button>
 </div>
</template>

<script>

export default {
  name: 'MyButton',
  props: {
    title: String,
  },
  emits: ['click'],
  methods: {
    onClick: function() {
      this.$emit('click');
    },
  }
}
</script>