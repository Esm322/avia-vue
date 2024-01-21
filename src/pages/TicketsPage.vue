<template>
  <main class="content container">
    <TicketsFilter
    v-model:filterStops="filterStopsIds"
    v-model:ticketsPerList="ticketsPerList"/>

    <div class="content__list">
      <div class="radio-list">
        <label class="radio-list__label">
          <input type="radio" class="radio-list__radio" name="price" value="Самый дешевый">
          <span class="radio-list__custom">
            Самый дешевый
          </span>
        </label>
        <label class="radio-list__label">
          <input type="radio" class="radio-list__radio" name="price" value="Самый быстрый">
          <span class="radio-list__custom">
            Самый быстрый
          </span>
        </label>
        <label class="radio-list__label">
          <input type="radio" class="radio-list__radio" name="price" value="Оптимальный">
          <span class="radio-list__custom">
            Оптимальный
          </span>
        </label>
      </div>

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
import TicketsList from '@/components/TicketsList.vue';
import TicketsFilter from '@/components/TicketsFilter.vue';

export default {
  data() {
    return {
      filterStopsIds: [1],
      list: 1,
      ticketsPerList: 5,
    };
  },
  components: {
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
