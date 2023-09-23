<template>
  <div>
    <!-- Botón para activar el menú desplegable -->
    <b-button @click="toggleDropdown">{{ buttonText }}</b-button>

    <!-- Menú desplegable -->
    <b-dropdown v-model="dropdownOpen" @hidden="closeDropdown">
      <template #button-content>
        <div>{{ menuTitle }}</div>
      </template>
      <b-dropdown-item v-for="(item, index) in menuItems" :key="index" @click="handleItemClick(item)">
        {{ item }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    menuTitle: String,
    menuItems: Array,
    buttonText: String,
  },
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    handleItemClick(item) {
      this.$emit("item-clicked", item);
      this.dropdownOpen = false; // Cierra el menú después de hacer clic en un elemento
    },
  },
};
</script>
