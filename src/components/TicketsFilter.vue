<template>
  <aside class="filter">
    <form action="#" class="form filter__form" method="get">
      <fieldset class="form__block">
        <legend class="form__legend">
          Количество пересадок
        </legend>
        <ul class="check-list">
          <li class="check-list__item" v-for="category in filterStopsData" :key="category.id">
            <label class="check-list__label">
              <input type="checkbox" class="check-list__check"
              name="transfer" :value="category.id"
              v-model="currentStopsIds">
              <span class="check-list__custom">
                {{ category.name }}
              </span>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  </aside>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue';
import categoryStops from '@/data/categoryStops';

const props = defineProps({
  filterStopsIds: Array,
  ticketsFlag: Boolean,
  ticketsPerList: Number,
});

const emit = defineEmits(['update:filterStopsIds', 'update:ticketsFlag', 'update:ticketsPerList']);

const currentTicketsFlag = ref(true);
const currentTicketsPerList = ref(5);

const filterStopsData = computed(() => categoryStops);

const currentStopsIds = computed({
  get: () => {
    return props.filterStopsIds;
  },
  set: (val) => {
    emit('update:filterStopsIds', val);
    emit('update:ticketsFlag', currentTicketsFlag.value);
    emit('update:ticketsPerList', currentTicketsPerList.value);
  },
});
</script>
