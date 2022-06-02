<template>
  <div @click="$emit('cellPlayer')" class="cell">
    <span v-if="value !== ''">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {},
};
</script>

<style>
.cell {
  width: 65px;
  height: 65px;
  border: 2px solid rgb(26, 25, 25);
  font-size: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
