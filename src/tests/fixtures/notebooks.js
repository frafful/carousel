import moment from 'moment';

export default [
  {
    id: '1',
    name: 'Família',
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '2',
    name: 'Festas',
    createdAt: moment(0).subtract(2, 'days').valueOf()
  },
  {
    id: '1',
    name: 'Viagens',
    createdAt: moment(0).add(3, 'days').valueOf()
  }
]