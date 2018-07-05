const { getScore } = require('./dist/index.js')

const personen = [
  {
    vorname: 'Sebastian Alexander',
    nachname: 'Krüger',
    gebDat: '23.11.1997'
  },
  {
    vorname: 'Sebastian',
    nachname: 'Krüger',
    gebDat: '23.12.1997'
  },
  {
    vorname: 'Krüger',
    nachname: 'Sebastian',
    gebDat: '23.12.1997'
  },
  {
    vorname: 'Sebastian',
    nachname: 'Krüger',
    gebDat: '23.12.1998'
  },
  {
    vorname: 'Sebastan',
    nachname: 'Krüwear',
    gebDat: '25.01.2097'
  },
  {
    vorname: 'Tobias',
    nachname: 'Krause',
    gebDat: '01.01.1996'
  },
  {
    vorname: 'Krüwear',
    nachname: 'Sebastan',
    gebDat: '25.01.2097'
  },
  {
    vorname: 'Krause',
    nachname: 'Tobias',
    gebDat: '01.01.1996'
  }
]

personen.forEach(pA => {
  personen.forEach(pB => {
    console.log(
      JSON.stringify(pA),
      JSON.stringify(pB),
      getScore(pA, pB)
    )
  })
})
