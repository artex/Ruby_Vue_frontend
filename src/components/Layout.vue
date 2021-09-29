<template>
  <v-app>
    <v-card color="lighten-4" flat height="200px" tile>
      <v-toolbar dark color="primary" tile>
        <v-container>
          <v-row>
            <router-link :to="{ name: 'home' }">
              <v-toolbar-title class="title white--text">
                <span>{{ title }}</span>
              </v-toolbar-title>
            </router-link>
            <div class="route-links"></div>
            <v-spacer></v-spacer>
            <div class="route-links">
              <v-menu offset-y v-if="isLoggedIn">
                <template v-slot:activator="{ on }">
                  <v-btn class="ma-2 secondary" @click="logout" v-on="on">
                    Logout
                  </v-btn>
                </template>
                
              </v-menu>
              <router-link
                class="route-link"
                :to="{ name: 'login' }"
                v-if="!isLoggedIn"
                >Login</router-link
              >
            </div>
          </v-row>
        </v-container>
      </v-toolbar>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-card>
  </v-app>
</template>

<script src="../services/components/layout.js"></script>

<style scoped src="../assets/css/components/layout.css"></style>
