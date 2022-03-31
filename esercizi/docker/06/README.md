# Esercizio 06
Quando viene eseguito questo container, esso esegue il comando ```figlet Hello World```, che restituisce la scritta _Hello World_ in ASCII Art.
Se viene passato un comando esterno, esso viene interpretato come se fosse il parametro del comando ```figlet```.

## Requisiti
Definire un'immagine Docker tramite ```Dockerfile``` che soddisfa i seguenti requisiti:
- sia derivata da Alpine Linux
- sia installato il pacchetto ```figlet``` e le sue dipendenze
- sia minimale
- come comportamento di default esegua il comando ```figlet Hello World```
- sia possibile passare un la frase come parametro dall'esterno
- non sia possibile eseguire altri comandi

## Test di Accettazione
Sono definiti i seguenti test di accettazione:
- should use Alpine GNU/Linux distribition
- should execute figlet with default value (Hello World)
- should execute factor with external value
- should fail to execute the external command
