<script>
import { useBonfireStore } from "../stores/bonfire";
import { mapState, mapActions, mapWritableState } from "pinia";

export default {
  nama: "UserControlView",
  methods: {
    ...mapActions(useBonfireStore, ["fetchUserDetails", "postUserUpdate",'verifyUser']),
  },
  computed: {
    ...mapState(useBonfireStore,['isVerified']),
    ...mapWritableState(useBonfireStore, ["loggedUserDetails"]),
    getUpdatedDate() {
      return this.loggedUserDetails.updatedAt.split("T")[0];
    },
    getCreatedDate() {
      return this.loggedUserDetails.createdAt.split("T")[0];
    },
  },
  created() {
    this.fetchUserDetails();
  },
};
</script>

<template>
  <div class="row">
    <div class="col-4 mt-4 m-auto">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <h3 class="mx-1 my-1">User Details:</h3>
          <button v-show="isVerified ==''" @click="verifyUser" class="btn btn-warning">Verify User</button>
          <button v-show="isVerified =='Verified'" class="btn btn-secondary">Verified User</button>
          <button v-show="isVerified =='Rejected'" class="btn btn-danger">Verification Rejected</button>
        </div>
        <div class="card-body">
          <form @submit.prevent="postUserUpdate">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                v-model="loggedUserDetails.firstName"
                type="text"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                v-model="loggedUserDetails.lastName"
                type="text"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label for="birthDate">Birth Date</label>
              <input
                v-model="loggedUserDetails.birthDate"
                type="date"
                class="form-control"
              />
            </div>

            <button type="submit" class="btn btn-warning mt-3">Submit</button>
          </form>
        </div>
        <div class="card-footer">
          <p>User registered at : {{ getCreatedDate }}</p>
          <p>Data last modified at : {{ getUpdatedDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
