import * as distance from 'js-levenshtein'

const scoreCorrect = 1 / 20

export function getScore(
  personA: {
    vorname: string
    nachname: string
    gebDat: string
  },
  personB: {
    vorname: string
    nachname: string
    gebDat: string
  },
  alsoReverse: boolean = true
): number {
  let score = 1

  // Vergleich Vornamen
  const vornameA = personA.vorname.toLowerCase()
  const vornameB = personB.vorname.toLowerCase()

  if (vornameA === vornameB) {
    score /= scoreCorrect
  } else {
    score /= Math.max(
      (distance(vornameA, vornameB) -
        Math.abs(vornameA.length - vornameB.length)) /
        Math.min(vornameA.length, vornameB.length),
      scoreCorrect
    )
  }

  const nachnameA = personA.nachname.toLowerCase()
  const nachnameB = personB.nachname.toLowerCase()

  if (nachnameA === nachnameB) {
    score /= scoreCorrect
  } else {
    score /= Math.max(
      (distance(nachnameA, nachnameB) -
        Math.abs(nachnameA.length - nachnameB.length)) /
        Math.min(nachnameA.length, nachnameB.length),
      scoreCorrect
    )
  }

  if (personA.gebDat === personB.gebDat) {
    score /= scoreCorrect
  } else {
    score /= Math.max(
      (distance(personA.gebDat, personB.gebDat) -
        Math.abs(
          personA.gebDat.length - personB.gebDat.length
        )) /
        Math.min(
          personA.gebDat.length,
          personB.gebDat.length
        ),
      scoreCorrect
    )
  }

  if (alsoReverse) {
    return Math.max(
      score,
      getScore(
        personA,
        {
          vorname: personB.nachname,
          nachname: personB.nachname,
          gebDat: personB.gebDat
        },
        false
      )
    )
  } else {
    return score
  }
}
