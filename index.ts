import * as distance from 'js-levenshtein'

const scoreCorrect = 1 / 20

export interface Person {
  vorname: string
  nachname: string
  gebDat: string
}

export const getScore = (
  personA: Person,
  personB: Person
) => _getScore(personA, personB)

function _getScore(
  personA: Person,
  personB: Person,
  alsoReverse: boolean = true
): number {
  let score = 1

  const handleValue = (valueA: string, valueB: string) =>
    valueA === valueB
      ? scoreCorrect
      : Math.max(
          (distance(valueA, valueB) -
            Math.abs(valueA.length - valueB.length)) /
            Math.min(valueA.length, valueB.length),
          scoreCorrect
        )

  score /= handleValue(
    personA.vorname.toLowerCase(),
    personB.vorname.toLowerCase()
  )
  score /= handleValue(
    personA.nachname.toLowerCase(),
    personB.nachname.toLowerCase()
  )
  score /= handleValue(personA.gebDat, personB.gebDat)

  const reverseScore = alsoReverse
    ? _getScore(
        personA,
        {
          vorname: personB.nachname,
          nachname: personB.nachname,
          gebDat: personB.gebDat
        },
        false
      )
    : 0

  return Math.max(reverseScore, score)
}
