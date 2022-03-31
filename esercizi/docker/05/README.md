# Esercizio 05  
Quando viene eseguito questo container, esso esegue il comando ```factor 42```, che restituisce la scomposizione in fattori del numero 42.
Se viene passato un comando esterno, esso viene interpretato come se fosse il parametro del comando ```factor```.

## Requisiti
Definire un'immagine Docker tramite ```Dockerfile``` che soddisfa i seguenti requisiti:
- sia derivata da Alpine Linux
- sia minimale
- come comportamento di default esegua il comando ```factor 42```
- sia possibile passare un il numero come parametro dall'esterno
- non sia possibile eseguire altri comandi

## Test di Accettazione
Sono definiti i seguenti test di accettazione:
- should use Alpine GNU/Linux distribition
- should execute factor with default value (42)
- should execute factor with external value
- should fail to execute the external command
