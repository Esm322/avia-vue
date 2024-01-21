<template>
  <ul class="tickets-list">
    <TicketItem v-for="ticket in tickets" :key="ticket.idTicket"
    :price="ticket.price"
    :stops="ticket.stops"
    :date="ticket.date"/>
  </ul>
</template>

<script>
import TicketItem from './TicketItem.vue';

export default {
  props: ['tickets'],
  components: {
    TicketItem,
  },
};
</script>
