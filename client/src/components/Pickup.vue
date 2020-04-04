<template>
    <div id="app">
  <v-app>
    <v-container grid-list-md>
      <v-layout column align-center>
        <v-flex>
          <h1>Output: {{ myDateTime }}</h1>
          <v-date-time v-model="myDateTime" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>