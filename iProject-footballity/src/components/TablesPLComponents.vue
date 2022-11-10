<script>
export default {
  name: "TablesPLComponents",
};
</script>

<template>
  <div class="ptable">
    <h1 class="headin">Standings</h1>
    <table>
      <tr class="col">
        <th>#</th>
        <th>Team</th>
        <th>GP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GD</th>
        <th>PTS</th>
      </tr>
      <tr class="wpos">
        <td>1</td>
        <td>Warriors FC</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr class="wpos">
        <td>2</td>
        <td>YOLO FC</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>6</td>
      </tr>
      <tr class="wpos">
        <td>3</td>
        <td>Majestic A</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>4</td>
        <td>4</td>
      </tr>
      <tr class="wpos">
        <td>4</td>
        <td>Fenris</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>4</td>
      </tr>
      <tr class="pos">
        <td>5</td>
        <td>La Masia</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>3</td>
      </tr>
      <tr class="pos">
        <td>6</td>
        <td>Ultra Sort FC</td>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>2</td>
        <td>-1</td>
        <td>3</td>
      </tr>
      <tr class="pos">
        <td>7</td>
        <td>Wasseypur FC</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>-2</td>
        <td>3</td>
      </tr>
      <tr class="pos">
        <td>8</td>
        <td>Majestic B</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr class="pos">
        <td>9</td>
        <td>Not So Hot Spurs</td>
        <td>2</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>-1</td>
        <td>1</td>
      </tr>
      <tr class="pos">
        <td>10</td>
        <td>Silver Hawks</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>2</td>
        <td>-4</td>
        <td>0</td>
      </tr>
      <tr class="pos">
        <td>11</td>
        <td>Barely Legal FC</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>2</td>
        <td>-5</td>
        <td>0</td>
      </tr>
    </table>
  </div>
</template>

<style>
* {
  font-family: Fjalla One;
  margin: 0;
  border: 0;
  padding: 0;
  color: white;
}

html {
  background-color: #000000;
}

.ptable table {
  margin: 30px auto;
  border-collapse: collapse;
}

.ptable {
  margin: 0px 0% 30px 0%;
}

th,
td {
  padding: 10px;
}

th {
  background-color: black;
  color: #ffe221;
}

.headin {
  text-align: center;
  text-decoration: none;
  color: #ffe221;
  margin: 30px;
  display: block;
}

.wpos {
  text-align: center;
}

.wpos td {
  color: #77ff21;
}

.pos {
  text-align: center;
}

.pos td {
  color: #ff7b21;
}

table .col {
  border-bottom: 1px solid #ffffff;
}

.wpos:hover {
  background-color: #77ff21;
}

.wpos:hover td {
  color: #000000;
}

.pos:hover {
  background-color: #ff7b21;
}

.pos:hover td {
  color: #000000;
}
</style>
