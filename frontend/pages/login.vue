<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Log In</h2>

          <FfNotifications v-if="error" type="danger" :message="error" />

          <form method="post" @submit.prevent="userLogin">
            <label class="label">Email</label>
            <input
              v-model="login.identifier"
              type="text"
              class="input"
              name="email"
            />

            <label class="label">Password</label>
            <input
              v-model="login.password"
              type="password"
              class="input"
              name="password"
            />
            <button type="submit" class="button is-dark">Log In</button>
          </form>
          <div style="margin-top: 20px">
            <p>
              Don't have an account?
              <nuxt-link to="/register">Register</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/forgot-password">Forgot Password?</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

export default {
    name:"LoginPage",
  data() {
    return {
      login: {
        identifier: '',
        password: '',
      },
      error: "",
    }
  },
  methods: {
  async userLogin() {
    console.log(this.login)
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response.data.user)
           await this.$auth.setUserToken(response.data.jwt)
          this.$router.push('/');        
      } catch (e) {
        //  this.error = e.response.data.error.message;
         console.log(e.response.data.error)
      }
    },
  },
}
</script>