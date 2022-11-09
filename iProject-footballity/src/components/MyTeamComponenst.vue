<script>
import { mapActions, mapState } from "pinia";
import { useFootballStore } from "../stores/football";

export default {
  name: "MyTeamComponents",
  data() {
    return {
      GK: "",
      LC: "",
      LCB: "",
      RCB: "",
      RB: "",
      LMF: "",
      LCMF: "",
      RCMF: "",
      LMF: "",
      SS: "",
      ST: "",
    };
  },
  methods: {
    ...mapActions(useFootballStore, ["fetchMyTeam"]),
  },
  computed: {
    ...mapState(useFootballStore, ["myTeamData"]),
  },
  created() {
    this.fetchMyTeam();
  },
};
</script>
<template>
  <!-- <pre>{{ myTeamData[0] }} hello</pre> -->
  <table style="width: 100%; height: 100%">
    <tr>
      <td></td>
      <td></td>
      <td>
        <!-- ini posisi Left Back -->
        <img v-if="myTeamData[1]" :src="myTeamData[1].Player.imgUrl" alt="" />
        <p v-if="myTeamData[1]">{{ myTeamData[1].Player.name }}</p>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <!-- ini posisi Left Midfielder -->
        <img v-if="myTeamData[7]" :src="myTeamData[7].Player.imgUrl" alt="" />
        <p v-if="myTeamData[7]">{{ myTeamData[7].Player.name }}</p>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>
        <!-- ini posisi Left Center Back -->
        <img v-if="myTeamData[3]" :src="myTeamData[3].Player.imgUrl" alt="" />
        <p v-if="myTeamData[3]">{{ myTeamData[3].Player.name }}</p>
      </td>
      <td>
        <!-- ini posisi Left Center Midfielder -->
        <img v-if="myTeamData[6]" :src="myTeamData[6].Player.imgUrl" alt="" />
        <p v-if="myTeamData[6]">{{ myTeamData[6].Player.name }}</p>
      </td>
      <td></td>
      <td>
        <!-- ini posisi Second Striker -->
        <img v-if="myTeamData[9]" :src="myTeamData[9].Player.imgUrl" alt="" />
        <p v-if="myTeamData[9]">{{ myTeamData[9].Player.name }}</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>
        <!-- ini posisi Keeper -->
        <img v-if="myTeamData[0]" :src="myTeamData[0].Player.imgUrl" alt="" />
        <p v-if="myTeamData[0]">{{ myTeamData[0].Player.name }}</p>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td style="visibility: hidden">HELLOOO</td>
    </tr>
    <tr>
      <td style="visibility: hidden">HELLOOO</td>
      <td></td>
      <td>
        <!-- ini posisi Right Center Back -->
        <img v-if="myTeamData[2]" :src="myTeamData[2].Player.imgUrl" alt="" />
        <p v-if="myTeamData[2]">{{ myTeamData[2].Player.name }}</p>
      </td>
      <td>
        <!-- ini posisi Right Midfielder -->
        <img v-if="myTeamData[8]" :src="myTeamData[8].Player.imgUrl" alt="" />
        <p v-if="myTeamData[8]">{{ myTeamData[8].Player.name }}</p>
      </td>
      <td></td>
      <td>
        <img v-if="myTeamData[10]" :src="myTeamData[10].Player.imgUrl" alt="" />
        <p v-if="myTeamData[10]">{{ myTeamData[10].Player.name }}</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <img v-if="myTeamData[5]" :src="myTeamData[5].Player.imgUrl" alt="" />
        <p v-if="myTeamData[5]">{{ myTeamData[5].Player.name }}</p>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>
        <img v-if="myTeamData[4]" :src="myTeamData[4].Player.imgUrl" alt="" />
        <p v-if="myTeamData[4]">{{ myTeamData[4].Player.name }}</p>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>
<style>
img {
  width: 52px;
}
</style>
