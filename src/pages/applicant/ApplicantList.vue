<template>
  <v-card>
    <v-card-title>
      <h2 class="list-title">Applicant lists</h2>
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              label="Search keyword"
              @change="filterPosts"
              v-model="keyword"
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
          <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.name`]="{ item }">
          <router-link
            :to="`/applicants/${item.id}`"
            :key="item.id"
            v-if="item.name"
            >{{ item.name }}</router-link
          >
        </template>
        <template v-slot:[`item.operation`]="{ item }">
          <v-row>
            <div class="operation-btn">
              <router-link :to="`/applicants/${item.id}`" class="detail-btn"
                >DETAIL</router-link
              >
            </div>
            <div class="operation-btn">
              <v-btn color="error"  @click="deleteApplicant(item.id)" class="post-list-btn">Delete</v-btn>
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/applicant/applicant-list.js"></script>

<style scoped src="../../assets/css/pages/applicant/applicant-list.css"></style>
