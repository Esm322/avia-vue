import { computed, Ref } from 'vue';
import { ITicket } from '@/models/TicketModel';
import IOffset from '@/models/OffsetModel';
import IPerList from '@/models/PerListModel';

export default function useTicketsData(
  tickets: Ref<ITicket[]>,
  ticketsPerList: IPerList,
  offset: IOffset,
) {
  const ticketsData = computed(() => {
    // if (tickets.value.length <= 2) {
    //   document.body.style.overflow = 'hidden';
    //   document.body.style.paddingRight += '17px';
    // }

    // if (tickets.value.length > 2) {
    //   document.body.style.overflow = null;
    //   document.body.style.paddingRight = null;
    // }

    return tickets.value ? tickets.value.map((ticket: ITicket) => {
      return {
        ...ticket,
        date: ticket.segments.date,
        stops: ticket.segments.stops.stop.map((item: string) => item),
        id: ticket.segments.stops.id,
        time: ticket.segments.duration,
      };
    }).slice(offset.value, offset.value + ticketsPerList.value) : [];
  });

  return {
    ticketsData,
  };
}
