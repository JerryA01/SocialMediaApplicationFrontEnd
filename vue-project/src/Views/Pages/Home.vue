<template>
  <div class="page-wrapper">
    <div class="banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h1
              class="text-light text-center display-5 banner-heading mt-0 d-none d-sm-block"
            >
              Hi and welcome to Chirrup!
            </h1>
            <h1
              class="text-light text-center banner-heading-mobile mt-0 d-block d-sm-none"
            >
              Hi and welcome to Chirrup!
            </h1>

            <p
              class="text-light text-center display-1 banner-heading5 d-block d-lg-none d-none d-sm-block"
            >
              Chirrup is a social media application for the University. Here you
              can see what people are getting up to and enage with their posts!
              <br />
              <br />
              <br />
              <span>Create an account to engage!</span> <br />Scroll down to
              view peoples posts!
            </p>

            <p
              class="text-light text-center banner-heading5-mobile d-block d-sm-none"
            >
              Chirrup is a social media application for the University. Here you
              can see what people are getting up to and engage with their posts!
              <br /><br />
              <span>Create an account to engage!</span> <br />
              Scroll down to view people's posts!
            </p>

            <p
              class="text-light text-center display-1 display-lg-6 banner-heading2 d-none d-lg-block"
            >
              Chirrup is a social media application for the University. Here you
              can see what people are getting up to and enage with their posts!
              <br />
              <br />
              <br />
              <span>Create an account to engage!</span> <br />Scroll down to
              view peoples posts!

              <br />
              <br />
            </p>

            <p class="text-center fw-bold click text-warning d-none d-sm-block">
              Click on a post to view!
            </p>

            <p class="text-center fw-bold click text-warning d-block d-sm-none">
              Click on a post to view!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12 col-md-12 col-sm-12 bg-dark border border-dark">
      <em v-if="loading"
        >Loading posts... Refresh the page if noting is shown!</em
      >

      <h1 class="text-center fw-bold homefeed d-none d-sm-block">FEED</h1>
      <h1 class="text-center fw-bold homefeed-mobile d-block d-sm-none">
        FEED
      </h1>

      <ul class="" style="list-style-type: none" v-if="posts.length">
        <li v-for="post in posts" :key="post.post_id">
          <router-link
            :to="'/posts/' + post.post_id"
            custom
            v-slot="{ navigate }"
          >
            <div
              @click="navigate"
              style="text-decoration: none; cursor: pointer"
            >
              <p
                class="feedtext mt-2 me-5 text-center d-none d-sm-block"
                style="color: rgb(202, 202, 116)"
              >
                {{ post.author.username }} <br />
                Post: {{ post.text }} <br />
                TimeStamp: {{ formattedDate(post.timestamp) }}
              </p>
              <p
                class="feedtext-mobile mt-2 me-5 text-center d-block d-sm-none"
                style="color: rgb(202, 202, 116)"
              >
                {{ post.author.username }} <br />
                Post: {{ post.text }} <br />
                TimeStamp: {{ formattedDate(post.timestamp) }}
              </p>
              <div v-for="likes in post.likes" :key="likes.like_id">
                <p
                  class="feedtext text-center me-5 d-none d-sm-block"
                  style="color: rgb(202, 202, 116)"
                >
                  Liked by: {{ likes.username }}
                </p>
                <p
                  class="feedtext-mobile text-center me-5 d-block d-sm-none"
                  style="color: rgb(202, 202, 116)"
                >
                  Liked by: {{ likes.username }}
                </p>
              </div>
              <br />
              <br />
            </div>
          </router-link>
        </li>
      </ul>

      <div v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { feedService } from "../../Services/feed.service";

export default {
  data() {
    return {
      posts: [],
      error: "",
      loading: true,
      submitted: false,
      post: {},
    };
  },

  methods: {
    formattedDate(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return date.toLocaleString(); // Adjust the format as needed
    },
  },

  mounted() {
    feedService
      .getFeed()
      .then((posts) => {
        this.posts = posts;
        this.loading = false;
      })
      .catch((error) => (this.error = error));
  },
};
</script>