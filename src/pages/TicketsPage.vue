<template>
  <main class="content container">
    <TicketsFilter
    v-model:filterStops="filterStopsIds"
    v-model:ticketsPerList="ticketsPerList"/>

    <div class="content__list">
      <TicketsFilterTop
      v-model:filterPriorities="filterPriorities"/>

      <TicketsList
      v-model:tickets="ticketsData"/>

      <button class="btn-more"
      @click.prevent="showMore">
        Показать еще 5 билетов!
      </button>
    </div>
  </main>
</template>

<script>
import tickets from '@/data/tickets';
import TicketsFilterTop from '@/components/TicketsFilterTop.vue';
import TicketsList from '@/components/TicketsList.vue';
import TicketsFilter from '@/components/TicketsFilter.vue';

export default {
  data() {
    return {
      filterStopsIds: [1],
      filterPriorities: 0,
      list: 1,
      ticketsPerList: 5,
    };
  },
  components: {
    TicketsFilterTop,
    TicketsList,
    TicketsFilter,
  },
  computed: {
    ticketsData() {
      const offset = (this.list - 1) * this.ticketsPerList;

      return this.filteredTickets ? this.filteredTickets.map((ticket) => {
        return {
          ...ticket,
          date: ticket.segments.date,
          stops: ticket.segments.stops.stop.map((item) => item),
          id: ticket.segments.stops.id,
          time: ticket.segments.duration,
        };
      }).slice(offset, offset + this.ticketsPerList) : [];
    },
    filteredTickets() {
      let filteredTickets = tickets;

      if (this.filterStopsIds.includes(1) && this.filterStopsIds.length === 1) {
        filteredTickets = filteredTickets
          .map((ticket) => ticket);
      } else {
        filteredTickets = filteredTickets
          .filter((ticket) => this.filterStopsIds.includes(ticket.segments.stops.id));
      }

      if (this.filterPriorities === 1) {
        filteredTickets = filteredTickets
          .filter((ticket) => ticket.price < 13000)
          .sort((a, b) => a.price - b.price);
      }

      if (this.filterPriorities === 2) {
        filteredTickets = filteredTickets
          .filter((ticket) => ticket.segments.duration < 200)
          .sort((a, b) => a.segments.duration - b.segments.duration);
      }

      if (this.filterPriorities === 3) {
        filteredTickets = filteredTickets
          .filter((ticket) => ticket.segments.duration < 200 && ticket.price < 13000)
          .sort((a, b) => a.price - b.price);
      }

      return filteredTickets;
    },
  },
  methods: {
    showMore() {
      this.ticketsPerList += 5;
    },
  },
};
</script>
