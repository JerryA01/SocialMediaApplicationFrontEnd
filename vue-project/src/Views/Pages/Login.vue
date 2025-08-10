<template>
    <div class="banner">
    
        <h1 class="text-light text-center banner-heading mt-0 d-none d-sm-block">Login!</h1>

        <h1 class="text-light text-center login-heading-mobile mt-0 d-block d-sm-none">Login!</h1>
    
        <h1 class="text-warning text-center  display-5 banner-heading mt-0 ">{{error}}</h1>
    
        <div class="container">
    
            <div class="row">
    
                <div class="col-lg-12 col-md-6 col-sm-6">
    
                    <form @submit.prevent="handleSubmit">
    
                        <div class="mb-3">
    
                            <label for="exampleInputEmail1" class="form-label fw-bold FormText">Username</label>
    
                            <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" v-model="username">
    
                            <div id="emailHelp" class="form-text fw-bold" style="color: rgb(202, 202, 116);;">We'll never share your username with anyone else.</div>
    
                        </div>
    
                        <div class="mb-2">
    
                            <label for="password" class="form-label fw-bold FormText">Password</label>
    
                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password" v-model="password">
    
                        </div>
    
                        <button type="submit" class="btn btn-primary">Submit</button>
    
                    </form>
    
                </div>
    
                <div class="col-lg-12 col-md-6 col-sm-6">
    
                    <div class="text-center">
    
                        <form @submit.prevent="Register">
    
                            <button class="btn btn-outline-info text-light">Register here!</button>
    
                        </form>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>

<script>
import { userService } from "../../Services/users.service"
import { socialService } from "../../Services/social.service"
export default {
    data() {
        return {
            password: "",
            submitted: false,
            username: "",
            error: ""
        }
    },
    methods: {

        Register(m) {
            this.submitted = true
            this.error = ""
            this.$router.push("/create")
        },

        handleSubmit(e) {
            this.submitted = true
            this.error = ""

            const { password, username } = this

            if (!(username && password)) {
                this.error = "You cannot submit without entering all details"
                this.submitted = false;
                return;
            }

            const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/
            if (!(password_pattern.test(password))) {
                this.error = "Wrong password submitted."
                this.submitted = false;
                return;
            }

            userService.login(username, password)
                .then(result => {
                    console.log("Auth successful")
                    this.$router.push("/dashboard")
                })
                .catch(error => {
                    this.error = error;
                    this.submitted = false;
                })
        },
    },
}
</script>