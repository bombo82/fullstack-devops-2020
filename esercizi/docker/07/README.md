# Esercizio 07
Quando viene eseguito questo container, esso esegue il comando ```rev /app/invertimi.txt```, che restituisce i caratteri contenuti nel file in ordine inverso.
Se viene passato un comando esterno, esso viene interpretato come se fosse il parametro del comando ```rev```, cioè il nome del file di input.

## Requisiti
Definire un'immagine Docker tramite ```Dockerfile``` che soddisfa i seguenti requisiti:
- sia derivata da Alpine Linux
- sia minimale
- come comportamento di default esegua il comando ```rev /app/invertimi.txt```
- sia possibile passare il nome del file come parametro dall'esterno
- non sia possibile eseguire altri comandi

## Test di Accettazione
Sono definiti i seguenti test di accettazione:
- should use Alpine GNU/Linux distribition
- should contains the base layout plus **app** folder
- should **app** folder contains only **invertimi.txt**
- should reverse the content of the **invertimi.txt** file
- should reverse the content of the file with _filename_ given as parameter
- should fail to execute the external command
