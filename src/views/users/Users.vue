<template>
  <Card @onChangeUser="getUser" :user="user" />
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  name: "User",
  data() {
    return {
      user: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      const url = "https://randomuser.me/api/?results=20";
      axios
        .get(url)
        .then((response) => {
          console.log(response.data.results);
          this.user = response.data.results;
          /* console.log("encontrando nome: ", this.user.name.first); */
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
