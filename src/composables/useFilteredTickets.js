import { computed } from 'vue';

export default function useFilteredTickets(tickets, filterStopsIds, filterPriorities) {
  const filteredTickets = computed(() => {
    let filtered = tickets;

    if (filterStopsIds.stopsIds.length === 1 && filterStopsIds.stopsIds.includes(1)) {
      filtered = filtered
        .map((ticket) => ticket);
    } else {
      filtered = filtered
        .filter((ticket) => filterStopsIds.stopsIds.includes(ticket.segments.stops.id));
    }

    if (filterPriorities.value === 1) {
      filtered = filtered
        .filter((ticket) => ticket.price < 13000)
        .sort((a, b) => a.price - b.price);
    }

    if (filterPriorities.value === 2) {
      filtered = filtered
        .filter((ticket) => ticket.segments.duration < 200)
        .sort((a, b) => a.segments.duration - b.segments.duration);
    }

    if (filterPriorities.value === 3) {
      filtered = filtered
        .filter((ticket) => ticket.segments.duration < 200 && ticket.price < 13000)
        .sort((a, b) => a.price - b.price);
    }

    return filtered;
  });

  return {
    filteredTickets,
  };
}
