<template>
  <div class="game_table mx-auto">
    <Tris :nameplayerX="playerX" :nameplayerO="playerO"></Tris>
  </div>
</template>

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

<style>
.game_table {
  max-width: 600px;
  margin-right: 30px;
}
</style>
