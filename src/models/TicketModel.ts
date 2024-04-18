export interface ITicket {
  idTicket: number,
  price: number,
  segments: {
    origin: string,
    destination: string,
    date: string,
    duration: number,
    stops: {
      id: number,
      stop: string[],
    },
  },
};
