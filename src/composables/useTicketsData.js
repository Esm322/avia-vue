import { computed } from 'vue';

export default function useTicketsData(
  tickets,
  ticketsPerList,
  list,
) {
  const ticketsData = computed(() => {
    const offset = (list - 1) * ticketsPerList.value;

    if (tickets.length <= 2) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight += '17px';
    } else {
      document.body.style.overflow = null;
      document.body.style.paddingRight = null;
    }

    return tickets.value ? tickets.value.map((ticket) => {
      return {
        ...ticket,
        date: ticket.segments.date,
        stops: ticket.segments.stops.stop.map((item) => item),
        id: ticket.segments.stops.id,
        time: ticket.segments.duration,
      };
    }).slice(offset, offset + ticketsPerList.value) : [];
  });

  return {
    ticketsData,
  };
}
