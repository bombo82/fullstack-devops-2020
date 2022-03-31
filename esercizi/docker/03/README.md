# Esercizio 03
Quando viene eseguito questo container, esso esegue il comando ```rev /app/invertimi.txt```, che restituisce i caratteri contenuti nel file in ordine inverso.
Se viene passato un comando esterno, esso sovrascrive il comando predefinito, e quest'ultimo viene eseguito normalmente.

## Requisiti
Definire un'immagine Docker tramite ```Dockerfile``` che soddisfa i seguenti requisiti:
- sia derivata da Alpine Linux
- sia minimale
- come comportamento di default esegua il comando ```rev /app/invertimi.txt```

## Test di Accettazione
Sono definiti i seguenti test di accettazione:
- should use Alpine GNU/Linux distribition
- should contain the base layout plus **app** folder
- should **app** folder contains only **invertimi.txt**
- should reverse the content of the **invertimi.txt** file
- should execute the external command
