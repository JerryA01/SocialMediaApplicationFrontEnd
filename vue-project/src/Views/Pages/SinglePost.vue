<template>
  <!-- <div class="post-wrapper"> -->
  <div class="container-fluid full-height-dark">
    <div class="row g-3 bg-dark">
      <div class="col-lg-12 col-md-6 col-sm-6">
        <h1
          class="text-center fw-bold display-5 banner-heading mt-0 DashBoardButtons"
        >
          Your reuqested POST!
        </h1>
      </div>

      <div class="col-lg-12 col-md-6 col-sm-6 text-center DashBoardButtons">
        <em v-if="post.loading">Loading post...</em>

        <div v-else>
          <p>
            <span class="fw-bold">Author:</span>
            {{ post.author.first_name + " " + post.author.last_name }}
          </p>

          <p><span class="fw-bold">Text:</span> {{ post.text }}</p>

          <p><span class="fw-bold">TimeStamp:</span> {{ formattedDate }}</p>

          <div v-for="likes in post.likes" :key="likes.like_id">
            <p>
              <span class="fw-bold">Liked by:</span> {{ likes.first_name }}
              {{ likes.last_name }} <br />
            </p>
          </div>

          <hr />

          <p>All post info (for debugging during development):</p>

          <p>{{ post }}</p>
        </div>

        <div v-if="error">
          {{ error }}
        </div>
      </div>

      <div class="col-lg-12 col-md-6 col-sm-6 text-center DashBoardButtons">
        <div class="text-center">
          <router-link :to="'/users/' + post.author.user_id">
            <button class="btn btn-outline-info">
              View this users profile!
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import { postService } from "../../Services/posts.service";

export default {
  data() {
    return {
      post: {},
      error: "",
      posts: [],
      error: "",
    };
  },
  methods: {},
  computed: {
    formattedDate() {
      if (!this.post.timestamp) return "";
      const date = new Date(this.post.timestamp);
      return date.toLocaleString();
    },
  },
  created() {
    this.post.loading = true;
    postService
      .getSinglePost(this.$route.params.id)
      .then((post) => {
        this.post = post;
      })
      .catch((error) => (this.error = error));
  },
};
</script>