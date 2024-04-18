<template>
  <main class="content container">
    <div class="content__filter">
      <TicketsFilter
      v-model:filterStopsIds="filterStopsIds.stopsIds"
      v-model:ticketsFlag="ticketsFlag"
      v-model:ticketsPerList="ticketsPerList"/>

      <button class="btn-reset-filters"
      @click.prevent="resetFilters"
      v-show="filterPriorities > 0
      || (filterStopsIds.stopsIds.indexOf(1) && filterStopsIds.stopsIds.length > 0)
      || (!filterStopsIds.stopsIds.indexOf(1) && filterStopsIds.stopsIds.length > 1)">
        Сбросить фильтры
      </button>
    </div>

    <div class="content__list">
      <TicketsFilterTop
      v-model:filterPriorities="filterPriorities"
      v-model:ticketsFlag="ticketsFlag"
      v-model:ticketsPerList="ticketsPerList"/>

      <TicketsList
      :tickets="ticketsData"/>

      <button class="btn-more"
      @click.prevent="showMore"
      :class="{ 'disabled-btn--active': !ticketsFlag }">
        Показать еще 5 билетов!
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  onUpdated,
  reactive,
  ref,
} from 'vue';
import type { Ref } from 'vue';
import useTicketsData from '@/composables/useTicketsData';
import useFilteredTickets from '@/composables/useFilteredTickets';
import tickets from '@/data/tickets';
import TicketsFilterTop from '@/components/TicketsFilterTop.vue';
import TicketsList from '@/components/TicketsList.vue';
import TicketsFilter from '@/components/TicketsFilter.vue';
import IStops from '@/models/StopsModel';

const filterStopsIds: IStops = reactive({ stopsIds: [1] });
const filterPriorities: Ref<number> = ref(0);
const ticketsPerList: Ref<number> = ref(5);
const ticketsFlag: Ref<boolean> = ref(true);
const list: Ref<number> = ref(1);
const offset: Ref<number> = ref((list.value - 1) * ticketsPerList.value);

const { filteredTickets } = useFilteredTickets(
  tickets,
  filterStopsIds,
  filterPriorities,
);

const { ticketsData } = useTicketsData(
  filteredTickets,
  ticketsPerList,
  offset,
);

const showMore = () => ticketsPerList.value += 5;

const stopShowing = () => {
  if (filteredTickets.value.length === ticketsData.value.length
  || ticketsData.value.length === 0) {
    ticketsFlag.value = false;
  }
};

const resetFilters = () => {
  filterStopsIds.stopsIds = [1];
  filterPriorities.value = 0;
  ticketsPerList.value = 5;
  ticketsFlag.value = true;
};

onUpdated(stopShowing);
</script>
