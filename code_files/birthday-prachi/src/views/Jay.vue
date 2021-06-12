<template>
<div v-bind:style="{backgroundColor: '#a8e9ff'}">

  <v-container fluid grid-list-xl>
    <v-layout row text-center wrap>
      <v-flex xs12>
        <h1 class="display-3">Your Memories</h1>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-1.jpeg')" aspect-ratio="1.1" ></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-2.jpeg')" aspect-ratio="1"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-3.jpeg')" aspect-ratio="1.2"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-4.jpeg')" aspect-ratio="1"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-5.jpeg')" aspect-ratio="1"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-6.jpeg')" aspect-ratio="0.7"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-7.jpeg')" aspect-ratio="1.2"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-8.jpeg')" aspect-ratio="1"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-9.jpeg')" aspect-ratio="0.8"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-10.jpeg')" aspect-ratio="0.8"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-11.jpeg')" aspect-ratio="1.2"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-12.jpeg')" aspect-ratio="0.6"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-13.jpeg')" aspect-ratio="1.2"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-14.jpeg')" aspect-ratio="0.8"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/jay-15.jpeg')" aspect-ratio="1.3"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-img :src="require('../assets/bday-592.gif')" contain height="300"></v-img>
      </v-flex>

      <v-flex xs12>
        <v-btn to="/words" color="info">This is For You</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
