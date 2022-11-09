<script>
export default {
  name: "AddPositionComponent",
  data() {
    return {
      dataPlayer: {
        GK: "",
        LB: "",
        LCB: "",
        RCB: "",
        RB: "",
        LMF: "",
        LCMF: "",
        RCMF: "",
        RMF: "",
        SS: "",
        ST: "",
      },
    };
  },
};
</script>
<template>
  <section
    class="justify-content-center bg bg-dark"
    style="padding-bottom: 30px"
  >
    <div class="d-flex align-items-center pt-3 ps-3">
      <img class="me-2" src="../assets/football-2-256.png" />
      <h4 style="color: green"><strong>Footballity</strong></h4>
    </div>
    <div id="login-form" class="d-flex col justify-content-center mt-5">
      <div style="width: 500px">
        <h2 style="color: white">Add your dream team</h2>
        <form id="login-form" method="post" class="col-sm-12">
          <label for="GK-login-form">Goal Keeper</label>
          <select v-model="dataPlayer.GK" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select GK --
            </option>
            <option value="22">Alisson Becker</option>
            <option value="21">David De Gea</option>
          </select>
          <label for="LB-login-form">Left Back</label>
          <select v-model="dataPlayer.LB" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select LB --
            </option>
            <option value="17">Luke Shaw</option>
            <option value="18">Andrew Robertson</option>
          </select>
          <label for="LCB-login-form">Left Center Back</label>
          <select v-model="dataPlayer.LCB" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select LCB --
            </option>
            <option value="15">Virgil van Dijk</option>
            <option value="16">Raphaël Varane</option>
          </select>
          <label for="RCB-login-form">Right Center Back</label>
          <select v-model="dataPlayer.RCB" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select RCB --
            </option>
            <option value="13">Harry Maguire</option>
            <option value="14">Kalidou Koulibaly</option>
          </select>
          <label for="RB-login-form">Right Back</label>
          <select v-model="dataPlayer.RB" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select RB --
            </option>
            <option value="19">João Cancelo</option>
            <option value="20">Achraf Hakimi</option>
          </select>
          <label for="LMF-login-form">Left Midfielder</label>
          <select v-model="dataPlayer.LMF" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select LMF --
            </option>
            <option value="9">Jadon Sancho</option>
            <option value="10">Mohamed Salah</option>
          </select>
          <label for="LCMF-login-form">Left Center Midfielder</label>
          <select v-model="dataPlayer.LCMF" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select LCMF --
            </option>
            <option value="7">Toni Kroos</option>
            <option value="8">Jorginho</option>
          </select>
          <label for="RCMF-login-form">Right Center Midfielder</label>
          <select v-model="dataPlayer.RCMF" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select RCMF --
            </option>
            <option value="5">Luka Modric</option>
            <option value="6">Kevin De Bruyne</option>
          </select>
          <label for="RMF-login-form">Right Midfielder</label>
          <select v-model="dataPlayer.RMF" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select RMF --
            </option>
            <option value="11">Serge Gnabry</option>
            <option value="12">Neymar</option>
          </select>
          <label for="SS-login-form">Second Striker</label>
          <select v-model="dataPlayer.SS" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select SS --
            </option>
            <option value="2">Heung-Min Son</option>
            <option value="3">Lionel Messi</option>
          </select>
          <label for="ST-login-form">Striker</label>
          <select v-model="dataPlayer.ST" class="form-control">
            <option value="" selected="true" disabled="true">
              -- Select ST --
            </option>
            <option value="1">Cristiano Ronaldo</option>
            <option value="4">Robert Lewandowski</option>
          </select>
          <button class="btn btn-success mt-4" id="button">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style>
select {
  margin-bottom: 10px;
}

label {
  color: white;
}
</style>
