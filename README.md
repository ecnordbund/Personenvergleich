# Personenvergleich

Vergleich zweier Personen auf Ähnlichkeit...

## Benutzung

```
  import { getScore } from 'personenvergleich'

  const score = getScore({vorname: 'Max', nachname: 'Mustermann', gebDat: '01.01.2000'}, {vorname: 'Marie', nachname: 'MusterFrau', gebDat: '31.12.1997'})

  // Hier score = 10.714285714285715 also sehr gering
```

getScore liefert einen Wert zwischen 8000 und 0 der angiebt wie gleich die Personen sind (8000 = identisch oder nur zusätzliche Zeichen)

Hinweis: Dieser Algorithmus ist nicht Perfekt!! Bitte zur überprüfung den Nutzer fragen!!
