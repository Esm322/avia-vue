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
              :checked="1"
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

<script>
import categoryStops from '@/data/categoryStops';

export default {
  data() {
    return {
      currentTicketsFlag: true,
      currentTicketsPerList: 5,
    };
  },
  props: ['filterStopsIds', 'ticketsFlag', 'ticketsPerList'],
  computed: {
    filterStopsData() {
      return categoryStops;
    },
    currentStopsIds: {
      get() {
        return this.filterStopsIds;
      },
      set(val) {
        this.$emit('update:filterStopsIds', val);
        this.$emit('update:ticketsFlag', this.currentTicketsFlag);
        this.$emit('update:ticketsPerList', this.currentTicketsPerList);
      },
    },
  },
};
</script>
