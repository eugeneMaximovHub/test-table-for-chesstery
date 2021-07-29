import { Server } from 'miragejs'

new Server({
  routes() {
    this.namespace = 'api'

    this.get('/inf', () => {
      return {
        inf: [
          {
            id: 1,
            ln: 'Урок 1',
            exInLes: 100,
            exD: 90,
            er: 19,
            inac: 33,
            timeSpend: '100 мин',
            coins: '1000',
          },
          {
            id: 2,
            ln: 'Урок 2',
            exInLes: 30,
            exD: 25,
            er: 19,
            inac: 33,
            timeSpend: '100 мин',
            coins: '1000',
          },
          {
            id: 3,
            ln: 'Урок 3',
            exInLes: 70,
            exD: 70,
            er: 19,
            inac: 33,
            timeSpend: '100 мин',
            coins: '1000',
          },
          {
            id: 4,
            ln: 'Урок 4',
            exInLes: 20,
            exD: 10,
            er: 19,
            inac: 33,
            timeSpend: '100 мин',
            coins: '1000',
          },
          {
            id: 5,
            ln: 'Урок 5',
            exInLes: 33,
            exD: 27,
            er: 19,
            inac: 33,
            timeSpend: '100 мин',
            coins: '1000',
          },
          {
            id: 6,
            ln: 'Урок 6',
            exInLes: 23,
            exD: 19,
            er: 19,
            inac: 33,
            timeSpend: '100 мин',
            coins: '1000',
          },
          {
            id: 7,
            ln: 'Урок 7',
            exInLes: 100,
            exD: 55,
            er: 50,
            inac: 33,
            timeSpend: '100 мин',
            coins: '1000',
          },
        ],
      }
    })
  },
})
