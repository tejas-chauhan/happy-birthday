<template>
<div v-bind:style="{backgroundImage:'url(https://www.teahub.io/photos/full/73-736681_1920x1080-wallpaper-white-blue-gradient-linear-deep-electric.jpg)'}">

  <v-container grid-list-xl>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="display-1"></h1>
          </v-card-title>

          <v-card-text>
            <h1 class="display-2">Once Again</h1>
            <h2 class="display-1">Happy Birthday
              <br><p class="blue--text">Jay Patel </p>
            </h2>

            <p class="body-2">
              I wish you get everything you desire <br>
              May god bless you and your loved ones <br>
              May your smile be just like this always as it is in those photos <br>
              May your this year becomes more fun and adventurous <br>
              Wishing you a Many Many Happy returns of the day <br></p>
            <p class="body-2 blue--text">FANTASTIC 5</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-img :src="require('../assets/bday-112.gif')" contain height="200"></v-img>
      </v-flex>

      <v-flex xs12>
        <v-btn to="/" color="info">Back to Home</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
