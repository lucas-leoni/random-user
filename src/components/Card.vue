<template>
  <div class="container">
    <div class="row justify-content-center">
      <div
        v-for="(item, index) in user"
        :key="index"
        class="col-4 d-flex justify-content-center"
      >
        <div class="card mb-5 mr-1" style="width: 18rem">
          <img :src="item.picture.medium" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">
              {{ item.name.first }} {{ item.name.last }}
            </h5>
            <h6 class="card-title"><b>Email: </b>{{ item.email }}</h6>
            <h6 class="card-title"><b>Age: </b>{{ item.dob.age }}</h6>
            <h6 class="card-title">
              <b>Country: </b>{{ item.location.country }}
            </h6>
            <h6 class="card-title"><b>Phone: </b>{{ item.phone }}</h6>
            <button @click="getOtherUser" class="btn btn-primary">
              Other User
            </button>
          </div>
        </div>
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
