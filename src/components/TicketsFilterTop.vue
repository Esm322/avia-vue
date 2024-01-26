<template>
  <div class="radio-list">
    <label class="radio-list__label" v-for="category in getCategories" :key="category.id">
      <input type="radio" class="radio-list__radio" name="price" :value="category.id"
      v-model="currentPriority">
      <span class="radio-list__custom">
        {{ category.name }}
      </span>
    </label>
  </div>
</template>

<script>
import categoryTickets from '@/data/categoryTickets';

export default {
  data() {
    return {
      currentTicketsFlag: true,
      currentTicketsPerList: 5,
    };
  },
  props: ['filterPriorities', 'ticketsFlag', 'ticketsPerList'],
  computed: {
    getCategories() {
      return categoryTickets;
    },
    currentPriority: {
      get() {
        return this.filterPriorities;
      },
      set(val) {
        this.$emit('update:filterPriorities', val);
        this.$emit('update:ticketsFlag', this.currentTicketsFlag);
        this.$emit('update:ticketsPerList', this.currentTicketsPerList);
      },
    },
  },
};
</script>
