# Esercizio 08
Quando viene eseguito questo container, esso esegue l'applicazione nodejs ```/app/index.js```. Questa semplice applicazione stampa a video la scritta ```Hello from <message>``` dove message è una stringa fornita dall'esterno, se il message non viene passato dall'esterno viene utilizzato _hostname_ come message.
Se viene passato un comando esterno, esso viene interpretato come se fosse il parametro dell'applicazione, quindi il messaggio da visualizzare.

## Requisiti
Definire un'immagine Docker tramite ```Dockerfile``` che soddisfa i seguenti requisiti:
- sia derivata da Alpine Linux
- sia minimale
- come comportamento di default esegua il comando ```node /app/index.js```
- sia possibile passare il messaggio da visualizzare come parametro dall'esterno
- non sia possibile eseguire altri comandi

## Test di Accettazione
Sono definiti i seguenti test di accettazione:
- should use Alpine GNU/Linux distribition
- should contains the base layout plus **app** folder
- should **app** folder contains only **index.js**
- should execute the **index.js** file using the nodejs interpreter
- should execute the **index.js** file with external parameter and using the nodejs interpreter
- should fail to execute the external command
