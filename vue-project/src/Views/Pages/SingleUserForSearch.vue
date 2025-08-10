<template>
  <div class="container=fluid full-height-dark">
    <div class="row g-3 bg-dark">
      <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
        <router-link to="/dashboard" class="DashBoardButtonsLoggedIn fw-bold"
          >Back to Dashboard</router-link
        >
      </div>

      <div class="col-lg-12 col-md-6 col-sm-6">
        <h1
          v-if="multiple"
          class="text-center display-5 banner-heading DashBoardButtons d-block d-sm-none"
        >
          Your reuqested users!
        </h1>
        <h1
          v-if="multiple"
          class="text-center display-5 banner-heading DashBoardButtons d-sm-block d-none"
        >
          Your reuqested users!
        </h1>

        <h1
          v-else
          class="text-center display-5 banner-heading DashBoardButtons"
        >
          Your reuqested user!
        </h1>
      </div>

      <div class="col-lg-12 col-md-6 col-sm-6 text-center DashBoardButtons">
        <em v-if="user.loading">Loading User...</em>
        <em v-if="error" class="text-center DashBoardButtons">{{ error }}</em>

        <div v-else>
          <ul class="user-info-list" style="list-style-type: none">
            <li v-for="item in user" :key="item.user_id">
              <router-link
                :to="
                  loggedIn
                    ? '/userslog/' + item.user_id
                    : '/users/' + item.user_id
                "
                custom
                v-slot="{ navigate }"
              >
                <div
                  @click="navigate"
                  style="cursor: pointer; text-decoration: none"
                >
                  <p
                    class="feedtext text-center"
                    style="color: rgb(202, 202, 116)"
                  >
                    FirstName : {{ item.first_name }} <br />
                    LastName : {{ item.last_name }} <br />
                    UserName : {{ item.username }} <br /><br />
                  </p>
                </div>
              </router-link>
            </li>
          </ul>

          <hr />

          <p>All post info (for debugging during development):</p>

          <p>{{ user }}</p>
          <br /><br />
        </div>

        <div v-if="error">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { socialService } from "../../Services/social.service";

export default {
  data() {
    return {
      user: [],
      error: "",
      multiple: false,
      loggedIn: false,
    };
  },
  methods: {
    fetchUser(query) {
      this.user = [];
      this.error = "";
      this.multiple = false;

      // Check if user is logged in
      socialService
        .searchloggedin(query)
        .then(() => {
          this.loggedIn = true;
        })
        .catch((error) => {
          if (error === "Something went wrong") {
            this.loggedIn = false;
          }
          // Optional: log or handle error
          console.log("Login check failed:", error);
        });

      socialService
        .search(query)
        .then((user) => {
          this.user = user;
          this.multiple = Object.keys(user).length > 1;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
  mounted() {
    this.fetchUser(this.$route.params.id);
  },
  watch: {
    "$route.params.id"(newId) {
      this.fetchUser(newId);
    },
  },
};
</script>