import { computed } from 'vue';
import { ITicket } from '@/models/TicketModel';
import IStops from '@/models/StopsModel';
import IPriorities from '@/models/PrioritiesModel';

export default function useFilteredTickets(
  tickets: ITicket[],
  filterStopsIds: IStops,
  filterPriorities: IPriorities,
) {
  const filteredTickets = computed(() => {
    let filtered = tickets;

    if (filterStopsIds.stopsIds.length === 1 && filterStopsIds.stopsIds.includes(1)) {
      filtered = filtered
        .map((ticket: ITicket) => ticket);
    } else {
      filtered = filtered
        .filter((ticket: ITicket) => filterStopsIds.stopsIds.includes(ticket.segments.stops.id));
    }

    if (filterPriorities.value === 1) {
      filtered = filtered
        .filter((ticket: ITicket) => ticket.price < 13000)
        .sort((a: ITicket, b: ITicket) => a.price - b.price);
    }

    if (filterPriorities.value === 2) {
      filtered = filtered
        .filter((ticket: ITicket) => ticket.segments.duration < 200)
        .sort((a: ITicket, b: ITicket) => a.segments.duration - b.segments.duration);
    }

    if (filterPriorities.value === 3) {
      filtered = filtered
        .filter((ticket: ITicket) => ticket.segments.duration < 200 && ticket.price < 13000)
        .sort((a: ITicket, b: ITicket) => a.price - b.price);
    }

    return filtered;
  });

  return {
    filteredTickets,
  };
}
