# Esercizio 10
Quando viene eseguito questo container, esso esegue l'applicazione nodejs ```/app/server.js```. Questa applicazione espone una _rest API_ che restituisce la scritta ```Hello from <message>``` dove message è una stringa fornita dall'esterno, se il message non viene passato dall'esterno viene utilizzato _hostname_ come message.
Se viene passato un comando esterno, esso viene interpretato come se fosse il parametro dell'applicazione, quindi il messaggio da visualizzare.

## Requisiti
Definire un'immagine Docker tramite ```Dockerfile``` che soddisfa i seguenti requisiti:
- sia derivata da Alpine Linux
- sia minimale
- come comportamento di default espone l'applicazione _rest API_
- sia possibile passare il messaggio da visualizzare come parametro dall'esterno
- non sia possibile eseguire altri comandi
- sia esposta la porta 3000
- sia presente uno script bash che:
  - avvia il container in modalità _detach_
  - mappa la porta 3000 (interna) sulla porta 88 (esterna)
- il nome dell'immagine sia ```serve-js-page-using-node```

## Test di Accettazione
Sono definiti i seguenti test di accettazione:
- should use Alpine GNU/Linux distribition
- should contains the base layout plus **app** folder
- should **app** folder contains only the applications files
- should **up.sh** file exists
- should **up.sh** script run node service and serve **server.js**
- should **up.sh** script run node service and serve **server.js** with external parameter
- should fail to execute the external command
