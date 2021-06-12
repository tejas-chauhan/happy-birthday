<template >
<div v-bind:style="{backgroundImage:'url(https://www.teahub.io/photos/full/73-736681_1920x1080-wallpaper-white-blue-gradient-linear-deep-electric.jpg)'}">
<v-container grid-list-xl>
    <v-layout text-center row wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/2.jpeg')" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2">Happy Birthday!</h1>
        <h2 class="display-1"> Jay Patel (Jayu)</h2>
      </v-flex>

      <v-flex xs12>
        <v-img :src="require('../assets/bday-112.gif')" contain height="300"></v-img>
      </v-flex>

      <v-flex xs12>
        <v-btn to="/memories" color="info">See Your Memories</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script src="./Main.js">
</script>
