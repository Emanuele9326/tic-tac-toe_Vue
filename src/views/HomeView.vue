<template>
  <main>
    <h1>TRIS</h1>

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
        class="play"
        :to="{
          name: 'gametable',
          params: { playerX: namePlayerX, playerO: namePlayerO },
        }"
        >Gioca</router-link
      >
    </nav>
  </main>
</template>

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

<style>
main {
  width: 600px;
  height: 600px;
  margin: auto;
  font-size: 33px;
}

main h1 {
  text-align: center;
  font-size: 2em;
  letter-spacing: 0.5em;
  margin-bottom: 5rem;
  padding: 2rem;
}

.form-control {
  font-size: x-large;
}
main nav {
  display: flex;
  justify-content: center;
  padding: 3rem;
  font-size: 30px;
}
.play {
  color: red;
}
.play:hover {
  width: 8rem;
  text-align: center;
  text-decoration: none;
  background-color: hsla(241, 95%, 17%, 0.726);
  color: rgb(230, 221, 221);
}

@media (max-width: 980px) {
  main {
    width: 500px;
    height: 500px;
  }
}
@media (max-width: 736px) {
  main {
    width: 400px;
    height: 400px;
  }
}
@media (max-width: 480px) {
  main {
    max-width: 380px;
    height: 500px;
  }
}
</style>
