# Esercizio 09
Quando viene eseguito questo container, esso esegue il web server _nginx_ e serve una pagina HTML statica. La pagina HTML viene resa disponibile all'indirizzo ```http://192.168.50.95:88```.

Questa semplice applicazione stampa a video la scritta ```Hello from <message>``` dove message è una stringa fornita dall'esterno, se il message non viene passato dall'esterno viene utilizzato _hostname_ come message.
Se viene passato un comando esterno, esso viene interpretato come se fosse il parametro dell'applicazione, quindi il messaggio da visualizzare.

## Requisiti
Definire un'immagine Docker tramite ```Dockerfile``` che soddisfa i seguenti requisiti:
- sia derivata da Alpine Linux
- sia minimale
- come comportamento di default esegua il webserver nginx
- sia esposta la porta 80
- sia presente uno script bash che:
  - avvia il container in modalità _detach_
  - mappa la porta 80 (interna) sulla porta 88 (esterna)
- il nome dell'immagine sia ```serve-html-page-using-nginx```

> NOTA: alcuni dei punti sopra sono già garantiti dalla versione alpine dell'immagine di [nginx](https://hub.docker.com/_/nginx). Potete utilizzare tale immagine come base di questo esercizio!

## Test di Accettazione
Sono definiti i seguenti test di accettazione:
- should use Alpine GNU/Linux distribition
- should **html** folder contains only **index.html**
- should **up.sh** file exists
- should **up.sh** run nginx service and serve **index.html** page
