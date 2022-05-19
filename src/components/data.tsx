const data = [
  {
    id: 1,
    title: 'EUR',
    status: false,
  },
  {
    id: 2,
    title: 'PLN',
    status: false,
  },
  {
    id: 3,
    title: 'GEL',
    status: false,
  },
  {
    id: 4,
    title: 'DKK',
    status: false,
  },
  {
    id: 5,
    title: 'CZK',
    status: false,
  },
  {
    id: 6,
    title: 'GBP',
    status: false,
  },
  {
    id: 7,
    title: 'SEK',
    status: false,
  },
  {
    id: 8,
    title: 'USD',
    status: false,
  },
  {
    id: 9,
    title: 'RUB',
    status: false,
  },
];
export type NewArray = {
    id: number,
    title: string,
    status: boolean,
};

// export type Status ={
//     status: boolean
// }
export const getUsers = () => [...data];
export const getUser = (id:number) => data.find((item) => item.id === id);
export default data;
