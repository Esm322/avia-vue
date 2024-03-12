<template>
  <main class="content container">
    <div class="content__filter">
      <!-- <TicketsFilter
      v-model:filterStopsIds="filterStopsIds"
      v-model:ticketsFlag="ticketsFlag"
      v-model:ticketsPerList="ticketsPerList"/> -->

      <!-- <button class="btn-reset-filters"
      @click.prevent="resetFilters"
      v-show="filterPriorities > 0 || (filterStopsIds.indexOf(1) && filterStopsIds.length > 0)
      || (!filterStopsIds.indexOf(1) && filterStopsIds.length > 1)">
        Сбросить фильтры
      </button> -->
    </div>

    <div class="content__list">
      <!-- <TicketsFilterTop
      v-model:filterPriorities="filterPriorities"
      v-model:ticketsFlag="ticketsFlag"
      v-model:ticketsPerList="ticketsPerList"/> -->

      <TicketsList
      v-model:tickets="ticketsData"/>

      <!-- <button class="btn-more"
      @click.prevent="showMore"
      :class="{ 'disabled-btn--active': !ticketsFlag }">
        Показать еще 5 билетов!
      </button> -->
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import useTicketsData from '@/composables/useTicketsData';
import useFilteredTickets from '@/composables/useFilteredTickets';
import tickets from '@/data/tickets';
// import TicketsFilterTop from '@/components/TicketsFilterTop.vue';
import TicketsList from '@/components/TicketsList.vue';
// import TicketsFilter from '@/components/TicketsFilter.vue';

export default {
  // data() {
  //   return {
  //     filterStopsIds: [1],
  //     filterPriorities: 0,
  //     list: 1,
  //     ticketsPerList: 5,
  //     ticketsFlag: true,
  //   };
  // },
  components: {
    // TicketsFilterTop,
    TicketsList,
    // TicketsFilter,
  },
  // computed: {
  //   ticketsData() {
  //     const offset = (this.list - 1) * this.ticketsPerList;

  //     if (this.filteredTickets.length <= 2) {
  //       document.body.style.overflow = 'hidden';
  //       document.body.style.paddingRight += '17px';
  //     } else {
  //       document.body.style.overflow = null;
  //       document.body.style.paddingRight = null;
  //     }

  //     return this.filteredTickets ? this.filteredTickets.map((ticket) => {
  //       return {
  //         ...ticket,
  //         date: ticket.segments.date,
  //         stops: ticket.segments.stops.stop.map((item) => item),
  //         id: ticket.segments.stops.id,
  //         time: ticket.segments.duration,
  //       };
  //     }).slice(offset, offset + this.ticketsPerList) : [];
  //   },
  //   filteredTickets() {
  //     let filteredTickets = tickets;

  //     if (this.filterStopsIds.length === 1 && this.filterStopsIds.includes(1)) {
  //       filteredTickets = filteredTickets
  //         .map((ticket) => ticket);
  //     } else {
  //       filteredTickets = filteredTickets
  //         .filter((ticket) => this.filterStopsIds.includes(ticket.segments.stops.id));
  //     }

  //     if (this.filterPriorities === 1) {
  //       filteredTickets = filteredTickets
  //         .filter((ticket) => ticket.price < 13000)
  //         .sort((a, b) => a.price - b.price);
  //     }

  //     if (this.filterPriorities === 2) {
  //       filteredTickets = filteredTickets
  //         .filter((ticket) => ticket.segments.duration < 200)
  //         .sort((a, b) => a.segments.duration - b.segments.duration);
  //     }

  //     if (this.filterPriorities === 3) {
  //       filteredTickets = filteredTickets
  //         .filter((ticket) => ticket.segments.duration < 200 && ticket.price < 13000)
  //         .sort((a, b) => a.price - b.price);
  //     }

  //     return filteredTickets;
  //   },
  // },
  // methods: {
  //   resetFilters() {
  //     this.filterStopsIds = [1];
  //     this.filterPriorities = 0;
  //     this.ticketsPerList = 5;
  //     this.ticketsFlag = true;
  //   },
  //   stopShowing() {
  //     if (this.filteredTickets.length === this.ticketsData.length
  //       || this.ticketsData.length === 0) {
  //       this.ticketsFlag = false;
  //     }
  //   },
  //   showMore() {
  //     this.ticketsPerList += 5;
  //   },
  // },
  // beforeUpdate() {
  //   this.stopShowing();
  // },
  setup() {
    const filterStopsIds = ref([1]);
    const filterPriorities = ref(0);
    const list = 1;
    const ticketsPerList = ref(5);
    // const ticketsFlag = ref(true);

    const { filteredTickets } = useFilteredTickets(tickets, filterStopsIds, filterPriorities);

    const { ticketsData } = useTicketsData(
      filteredTickets,
      ticketsPerList,
      list,
    );

    return {
      ticketsData,
      filteredTickets,
    };
  },
};

</script>
