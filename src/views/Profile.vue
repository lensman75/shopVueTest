<template>
  <div class="profile">
    <h1>This is a profile page.</h1>
    <div>Name: {{$store.state.fullname}}</div>
    <div>Age: {{$store.state.age}}</div>
    <img style="height: 100px; width: 100px" v-bind:src="$store.state.avatar" v-if="$store.state.showAvatar">
    <my-button title="Hide avatar" v-on:click="hideAvatar()"></my-button>
  </div>
</template>

<script>
  export default {
    methods: {
      hideAvatar () {
        this.$store.commit('hideAvatar')
      }
    }
  }
</script>