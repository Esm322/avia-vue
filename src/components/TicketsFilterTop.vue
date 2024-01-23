<template>
  <div class="radio-list">
    <label class="radio-list__label" v-for="category in getCategories" :key="category.id">
      <input type="radio" class="radio-list__radio" name="price" :value="category.id"
      v-model="currentPriority"
      @change.prevent="filtered">
      <span class="radio-list__custom">
        {{ category.name }}
      </span>
    </label>
    <!-- <label class="radio-list__label">
      <input type="radio" class="radio-list__radio" name="price" value="Самый быстрый"
      v-model="filterTickets">
      <span class="radio-list__custom">
        Самый быстрый
      </span>
    </label>
    <label class="radio-list__label">
      <input type="radio" class="radio-list__radio" name="price" value="Оптимальный"
      v-model="filterTickets">
      <span class="radio-list__custom">
        Оптимальный
      </span>
    </label> -->
  </div>
</template>

<script>
import categoryTickets from '@/data/categoryTickets';

export default {
  data() {
    return {
      currentPriority: 0,
    };
  },
  props: ['filterPriorities'],
  computed: {
    getCategories() {
      return categoryTickets;
    },
  },
  methods: {
    filtered() {
      this.$emit('update:filterPriorities', this.currentPriority);
    },
  },
};
</script>
