<template>
  <ul class="tickets-list">
    <TicketItem v-for="ticket in props.tickets" :key="ticket.idTicket"
    :id="ticket.idTicket"
    :price="ticket.price"
    :stops="ticket.stops"
    :date="ticket.date"/>
  </ul>
</template>

<script setup lang="ts">
import { INewTicket } from '@/models/NewTicketModel';
import TicketItem from './TicketItem.vue';

const props = defineProps<{
  tickets: INewTicket[],
}>();
</script>
