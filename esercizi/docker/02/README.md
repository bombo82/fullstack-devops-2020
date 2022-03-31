# Esercizio 02
Quando viene eseguito questo container, esso esegue il comando ```figlet Hello World```, che restituisce la scritta _Hello World_ in ASCII Art.
Se viene passato un comando esterno, esso sovrascrive il comando predefinito, e quest'ultimo viene eseguito normalmente.

## Requisiti
Definire un'immagine Docker tramite ```Dockerfile``` che soddisfa i seguenti requisiti:
- sia derivata da Alpine Linux
- sia installato il pacchetto ```figlet``` e le sue dipendenze
- sia minimale
- come comportamento di default esegua il comando ```figlet Hello World```

## Test di Accettazione
Sono definiti i seguenti test di accettazione:
- should use Alpine GNU/Linux distribition
- should execute figlet with default value (Hello World)
- should execute the external command
