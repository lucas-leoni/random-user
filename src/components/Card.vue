<template>
  <div class="container d-flex justify-content-center">
    <div
      v-for="(item, index) in user"
      :key="index"
      class="card"
      style="width: 18rem"
    >
      <img :src="item.picture.medium" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ item.name.first }} {{ item.name.last }}</h5>
        <h6 class="card-title">{{ item.email }}</h6>
        <h6 class="card-title">Age: {{ item.dob.age }}</h6>
        <h6 class="card-title">Country {{ item.location.country }}</h6>
        <button @click="getOtherUser" class="btn btn-primary">
          Other User
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    user: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getOtherUser() {
      this.$emit("onChangeUser");
    },
  },
};
</script>

<style></style>
