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

<script setup>
import categoryTickets from '@/data/categoryTickets';
import {
  ref, computed, defineProps, defineEmits,
} from 'vue';

const props = defineProps({
  filterPriorities: Number,
  ticketsFlag: Boolean,
  ticketsPerList: Number,
});

const emit = defineEmits(['update:filterPriorities', 'update:ticketsFlag', 'update:ticketsPerList']);

const currentTicketsFlag = ref(true);
const currentTicketsPerList = ref(5);

const getCategories = computed(() => categoryTickets);

const currentPriority = computed({
  get: () => {
    return props.filterPriorities;
  },
  set: (val) => {
    emit('update:filterPriorities', val);
    emit('update:ticketsFlag', currentTicketsFlag.value);
    emit('update:ticketsPerList', currentTicketsPerList.value);
  },
});
</script>
