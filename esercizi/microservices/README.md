# Tech Talent Factory - DevOps Class 2020

## Visione del Prodotto
Creare un convertitore di spazio colore tra i seguenti formati: HEX, RGB, HSL e CMYK. Il prodotto deve poter convertire
un colore fornito in uno qualsiasi dei formati gestiti a uno degli altri. Questo prodotto sarà raggiungibile tramite
Internet e utilizzato sia da pagine HTML che da applicazioni web.

## Specifiche
Le specifiche definite per un prodotto sono la parte fondamentale per la buona riuscita dello stesso. Quando si pensa a
un nuovo prodotto, compreso un'applicazione software, è necessario avere chiaro quale problema si vuole risolvere! La
"visione del prodotto" ci permette di definire l'esigenza da soddisfare e inquadrare il problema da risolvere. Una volta
che la "vision" è stata definita e condivisa è necessario entrare maggiormente nel dettaglio e definire una serie di
specifiche.

Per specifiche s'intende una descrizione schematica del software da sviluppare. Normalmente le specifiche includono dei
"casi d'uso" (in inglese "use cases"). Essi descrivono cosa deve accadere dal punto di vista di un osservatore esterno
al software stesso, tipicamente l'utente finale. Nelle metodologie "agili", a differenza di quella "waterfall", non sono
definite nel dettaglio tutte le specifiche e i casi d'uso prima dell'inizio dello sviluppo. Normalmente le specifiche e
i casi d'uso vengono definiti seguendo un processo interattivo di tipo "outside-in".

Applicando un approccio "outside-in" interattivo partiamo definendo le specifiche a livello più esterno (prodotto),
ignorando tutti i dettagli tecnici e mettendoci nei panni dell'utilizzatore finale. In seguito

### Specifiche funzionali per il prodotto
- conversione dei codici colore da uno spazio colore a un altro
- gli spazi colore supportati sono: HEX, RGB, HSL e CMYK
- consultabile tramite Internet
- utilizzabile da pagine HTML
- utilizzabile da applicazioni web

### Specifiche non funzionali per il prodotto
- ogni funzionalità deve poter essere rilasciata in modo indipendente dalle altre
- un bug o difetto in una funzionalità non deve impattare sul funzionamento delle altre

### Scelte dovute alle specifiche funzionali e non
Le specifiche funzionali ci forniscono informazioni chiare e precise e da quelle decidiamo d'implementare una API HTTP.

Le specifiche non funzionali, invece, richiedono un ragionamento più articolato, perché ci danno indicazioni che
dovrebbero farci riflettere sul tipo di architettura da adottare. In altre parole, ci viene richiesto di creare
funzionalità indipendenti tra loro e che l'applicazione sia resiliente. La prima è una caratteristica tipica delle
architetture a micro-servizi e di difficile (o quasi impossibile) implementazione utilizzando altre architetture. La
seconda caratteristica, invece, è possibile soddisfarla con differenti architetture, ma usando un'architettura a
micro-servizi ha costo implementativo molto basso, tendente a zero!

Visto le specifiche di prodotto e le considerazioni fatto sopra, si decide di realizzare un API HTTP con architettura a
micro-servizi in cui ogni micro-servizio corrisponde a una singola funzionalità richiesta.

Una volta effettuate queste scelte si ragiona a livello più interno, cioè si inizia a pensare alle specifiche più vicine
all'implementazione del software.

### Specifiche funzionali per il singolo micro-servizio
- risponde alle chiamate HTTP:
  - metodo `GET`
  - url `/`
  - esempio: `http://<host>:<porta/<funzionalità>?color=<colore>`
- colore da convertire:
  - ricevuto come _query_param_
- valore di ritorno:
  - nel body
  - in formato JSON
- formati JSON dei colori:
  - sono definiti in `commons/model/Colors.ts`
  - dati di esempio e test in `commons/test-data/colors.ts`

### Specifiche non funzionali per il singolo micro-servizio
- utilizzo dei modelli dati presenti in `commons/model`
- separazione della logica di dominio da quella di presentazione:
  - creare un `service` che effettua la conversione
  - il `service` può delegare la conversione a delle librerie esterne e.g. _color-converter_
  - creare un `controller` che espone l'end-point HTTP
  - il `controller` interagisce con il `service` solo tramite i modelli dati presenti in `commons/model`
- devono essere presenti le seguenti tipologie di test:
  - _lint_ (analisi statica del codice)
  - _unit_ per il service
  - _component_ tramite chiamate HTTP

## Come iniziare
La struttura del progetto, solo file degni di nota:
```
.
+-- commons                                         # file comnuni a tutti i microservizi
|   |   +-- src
|   |   |   +-- model                               # contiene le interface che rappresentano i formati dei colori
|   |   |   +-- test-data                           # contiene i dati da utilizzare nei test
|   +-- docker-compose.yml                          # definizione di docker-compose dell'applicazione
+-- microservice-template
|   +-- src
|   |   +-- controller
|   |   |   +-- HttpController.componentTest.ts     # test del micro-servizio attraverso chiamate HTTP
|   |   |   +-- HttpController.ts                   # logica relativa alla gestione delle chiamate HTTP
|   |   +-- service
|   |   |   +-- Service.test.ts                     # test servizio di conversione
|   |   |   +-- Service.ts                          # logica per la conversione dei colori
|   |   +-- HttpServer.ts                           # file principale del micro-servizio da eseguire con node.js
|   +-- .dockerignore
|   +-- Dockerfile
|   +-- package.json
+-- README.md
+-- STUDENTS.md
```

Approccio incrementale e passi da seguire:
1. completare l'analisi iniziale, decidendo quali microservizi realizzare
1. documentare, ad alto livello, come comporre l'uso dei microservizi per realizzare le conversioni che direttamente non
sono disponibili
1. definire l'interfaccia esterna del primo servizio
1. realizzare un primo microservizio
1. redere disponibile ogni microservizio implementato al suo completamento (aggiungerlo al compose)
1. ritornare al punto 3 fino al completamento di tutti i microservizi

## License
This project is licensed under the GPL-v3 License - see the LICENSE.md file for details
