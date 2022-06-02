<script>
export default {
  data() {
    return {
      namePlayerX: "",
      namePlayerO: "",
    };
  },
};
</script>

<template>
  <main>
    <h1>Tris</h1>

    <form>
      <div class="form-group">
        <label for="formGroupExampleInput">Nome Giocatore X</label>
        <input
          type="text"
          v-model="namePlayerX"
          class="form-control"
          id="formGroupExampleInput"
          placeholder=" "
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Nome Giocatore O</label>
        <input
          type="text"
          v-model="namePlayerO"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder=" "
        />
      </div>
    </form>
    <nav v-if="namePlayerX != '' && namePlayerO != ''">
      <router-link
        :to="{
          name: 'gametable',
          params: { playerX: namePlayerX, playerO: namePlayerO },
        }"
        >Gioca</router-link
      >
    </nav>
  </main>
</template>

<style>
main {
  max-width: 500px;
  max-height: 500px;
  margin: auto;
  font-size: 25px;
}

main h1 {
  text-align: center;
  margin-bottom: 5rem;
  padding: 2rem;
}
main nav {
  display: flex;
  justify-content: center;
  padding: 3rem;
  font-size: 25px;
}
</style>
