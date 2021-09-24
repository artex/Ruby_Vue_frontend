<template>
<v-card>
    <v-card-title>
        <h2 class="list-title">Applicant lists</h2>
        <v-spacer></v-spacer>
        <v-form ref="form">
            <!-- <v-row class="filter-bar">
                <v-col md="2.5">
                    <v-text-field label="Search keyword" hide-details="auto"></v-text-field>
                </v-col>
                <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Create</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
            </v-row> -->
        </v-form>
    </v-card-title>
    <v-container>
        <v-data-table :headers="headers" :items="showList">
            <!-- <template v-slot:[`item.name`]="{ item }">
                <a v-if="item.name">{{item.name}}</a>
            </template> -->
            <template v-slot:[`item.operation`]="{ item }">
                <v-row>
                    <div class="operation-btn">
                        <!-- <v-btn color="primary" class="post-list-btn">Details</v-btn> -->
                        <router-link :to="`/post/list/detail/${item.id}`" class="detail-btn">DETAIL</router-link>
                    </div>
                    <div class="operation-btn">
                        <!-- <v-btn @click="deleteApplicant(item.id)" class="destroy-btn">Delete</v-btn> -->
                        <button class="destroy-btn" @click="deleteApplicant(item.id)">DELETE</button>
                    </div>
                </v-row>
            </template>
        </v-data-table>
    </v-container>
</v-card>
</template>

<script src="../../services/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
