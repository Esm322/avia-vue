<template>
<div class="content__filter">
    <aside class="filter">
      <form action="#" class="form filter__form" method="get">
        <fieldset class="form__block">
          <legend class="form__legend">
            Количество пересадок
          </legend>
          <ul class="check-list">
            <li class="check-list__item"
            v-for="category in filterStopsData" :key="category.id">
              <label class="check-list__label">
                <input type="checkbox" class="check-list__check"
                name="transfer" :value="category.id" v-model.number="currentStopsId"
                :checked="currentStopsId"
                @change.prevent="filtered">
                <span class="check-list__custom">
                  {{ category.name }}
                </span>
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
    </aside>
  </div>
</template>

<script>
import categoryStops from '@/data/categoryStops';

export default {
  data() {
    return {
      currentStopsId: [1],
      currentTicketsPerList: 5,
    };
  },
  props: ['filterStops', 'ticketsPerList'],
  computed: {
    filterStopsData() {
      return categoryStops;
    },
  },
  methods: {
    filtered() {
      this.$emit('update:filterStops', this.currentStopsId);
      this.$emit('update:ticketsPerList', this.currentTicketsPerList);
    },
  },
};
</script>
