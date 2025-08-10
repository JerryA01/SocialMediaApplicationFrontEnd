<template>
  <div class="banner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 text-center DashBoardButtons">
          <div class="text-center">
            <ul style="list-style-type: none">
              <li v-for="item in user" :key="item">
                <router-link :to="'/follow/' + item.user_id">
                  <button class="btn btn-outline-info">Follow user!</button>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 text-center DashBoardButtons">
          <div class="text-center">
            <ul style="list-style-type: none">
              <li v-for="item in user" :key="item">
                <router-link :to="'/unfollow/' + item.user_id">
                  <button class="btn btn-outline-info">Unfollow user!</button>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>