<script>
import Tris from "../components/TrisBoard.vue";

export default {
  component: {
    Tris,
  },
  props: ["playerX", "playerO"],
  components: { Tris },
};
</script>

<template>
  <div class="game_table mx-auto">
    <Tris :nameplayerX="playerX" :nameplayerO="playerO"></Tris>
  </div>
</template>
<style>
.game_table {
  max-width: 600px;
  margin-right: 30px;
}
</style>
