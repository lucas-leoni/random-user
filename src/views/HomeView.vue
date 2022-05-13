<template>
  <div class="home">
    <h1>Hello! My Status is {{ status }}</h1>
    <hr />

    <button @click="getUser">Clique {{ count }}</button>

    <div>
      <h2>{{ user.login }}</h2>
      <p v-if="status">
        <strong>Número de Repositórios |</strong> {{ user.public_repos }}
      </p>
      <span>{{ user.html_url }}</span>
      <p>{{ user.bio }}</p>
      <img :src="user.avatar_url" alt="" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      status: false,
      count: 0,
      user: {},
    };
  },
  /* beforeCreate() {
    console.log("hook - before-create - is done?", this.status);
  },
  created() {
    // vamos utilizar sempre
    console.log("pre-created", this.status);
    this.status = true;
    console.log("created", this.status);
    console.log("DOM CREATED -", this.$el);
  },
  beforeMount() {
    console.log("BEFORE MOUNT - ", this.status);
    console.log("DOM BEFORE MOUNT -", this.$el);
  },
  mounted() {
    // vamos utilizar sempre
    console.log("MOUNTED - ", this.status);
    console.log("DOM MOUNTED -", this.$el);
  }, */
  /* beforeUpdate() {
    console.log("beforeUpdate - ", this.status);
    console.log("DOM beforeUpdate -", this.$el);
  },
  updated() {
    console.log("updated - ", this.status);
    console.log("DOM updated -", this.$el);
  }, */

  mounted() {
    this.getUser();
  },

  methods: {
    contador() {
      this.count++;
    },
    getUser() {
      const url = "https://api.github.com/users/lucas-leoni";
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
          this.status = true;
        })
        .catch((error) => {
          console.log(error);
        });
      // duas formas de fazer
      // fetchApi -> ES6
      // axios -> Lib
    },
  },
};
</script>
