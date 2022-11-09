<script>
import { RouterView } from "vue-router";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://investr-12fcc-default-rtdb.firebaseio.com",
};
const fireApp = initializeApp(firebaseConfig);

export default {
  name: "app",
  created() {
    const db = getDatabase();
    const BINANCE = ref(db, "stocks/BINANCE:BTCUSDT");
    onValue(BINANCE, (snapshot) => {
      const data = snapshot.val();
      console.log("from firebase");
    });
  },
};
</script>

<template>
  <RouterView />
</template>
