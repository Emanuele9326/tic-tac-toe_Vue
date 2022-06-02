<template>
  <div class="tris container mx-auto">
    <div class="row">
      <div class="col">
        <h1 v-if="title">{{ winner }}</h1>
        <h2 v-if="count == 9">Nessun vincitore</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="basic_color" :class="{ shift: turnX }">{{ nameplayerX }}</h3>
      </div>
      <div class="col">
        <h3 class="basic_color" :class="{ shift: turnY }">{{ nameplayerO }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="table_player">
          <div class="tictactoe-board">
            <div v-for="(n, i) in 3" v-bind:key="i">
              <!--colonne-->

              <div v-for="(n, j) in 3" v-bind:key="j">
                <!--righe-->

                <cellBoard
                  @cell-player="performMove(j, i)"
                  :value="this.board[j][i]"
                ></cellBoard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-outline-secondary">
          <router-link :to="{ name: 'home' }">HOME</router-link>
        </button>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="this.$router.go()"
        >
          RESTART
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import cellBoard from "./cellBoard.vue";

export default {
  data() {
    return {
      turnX: true,
      turnY: false,
      winner: "Ha vinto ",
      title: null,
      winnerBoard: false,
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      count: 0,
    };
  },
  props: {
    nameplayerX: String,
    nameplayerO: String,
  },

  components: {
    cellBoard,
  },

  methods: {
    player3row(player) {
      //orizzontale
      for (let i = 0; i < 3; i++) {
        if (
          this.board[i][0] == player &&
          this.board[i][1] == player &&
          this.board[i][2] == player
        ) {
          this.winner += player == "X" ? this.nameplayerX : this.nameplayerO;
          this.title = true;

          this.winnerBoard = true;
          this.turnX = false;
          this.turnY = false;
        }
      }
      //verticale
      for (let i = 0; i < 3; i++) {
        if (
          this.board[0][i] == player &&
          this.board[1][i] == player &&
          this.board[2][i] == player
        ) {
          this.winner += player == "X" ? this.nameplayerX : this.nameplayerO;
          this.title = true;

          this.winnerBoard = true;
          this.turnX = false;
          this.turnY = false;
        }
      }
      //diagonale
      if (
        this.board[0][0] == player &&
        this.board[1][1] == player &&
        this.board[2][2] == player
      ) {
        this.winner += player == "X" ? this.nameplayerX : this.nameplayerO;
        this.title = true;
        this.winnerBoard = true;
        this.turnX = false;
        this.turnY = false;
      }
      if (
        this.board[0][2] == player &&
        this.board[1][1] == player &&
        this.board[2][0] == player
      ) {
        this.winner += player == "X" ? this.nameplayerX : this.nameplayerO;
        this.title = true;
        this.winnerBoard = true;
        this.turnX = false;
        this.turnY = false;
      }
    },
    performMove(x, y) {
      if (this.count < 9 && !this.winnerBoard) {
        if (this.turnX && !this.turnY) {
          this.turnX = false;
          this.turnY = true;

          if (this.board[x][y] != "") {
            return;
          }
          this.board[x][y] = "X";
          this.player3row("X");
          this.count++;
        } else {
          this.turnX = true;
          this.turnY = false;
          if (this.board[x][y] != "") {
            return;
          }
          this.board[x][y] = "O";

          this.player3row("O");
          this.count++;
        }
      }

      if (this.count == 9) {
        this.turnX = false;
        this.turnY = false;
      }
    },
  },
};
</script>

<style>
.basic {
  color: black;
}
.shift {
  color: red;
}

.tictactoe-board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 250px;
  height: 250px;
  margin: 20px auto;
}

.col {
  text-align: center;
}
.player_table {
  width: 100%;
  height: 100%;
  margin: auto;
}
a,
.green {
  text-decoration: none;
  color: rgb(26, 13, 12);
  transition: 0.4s;
}
a:hover {
  text-decoration: none;
  background-color: hsla(60, 18%, 97%, 0);
  color: rgb(252, 250, 250);
}
</style>
