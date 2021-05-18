<template>
  <div class="profile">
    <h1>This is a profile page.</h1>
    <div>Name: {{$store.state.fullname}}</div>
    <div>Age: {{$store.state.age}}</div>
    <img style="height: 100px; width: 100px" v-bind:src="$store.state.avatar">
  </div>
</template>
