Punti esercizio:
1. scomporre docker-file.yml in 3 file separati:
  - docker-compose-local.yml (database che espongono la porta; non contiene quote-service e like-service)
  - docker-compose-test.yml (database non espongono la porta; contiene quote-service e like-service)
  - docker-compose-prod.yml (database non espongono la porta; contiene quote-service, like-service, web-ui; non contiene client UI dei database)

2. ???

NOTE: gli url relativi alla applicazione:
- http://vagrantbox.local:8080/ -> dashboard di traefik
- http://mongo-express.vagrantbox.local/ -> client web mongodb
- http://redis-commander.vagrantbox.local/ -> client web redis
- http://vagrantbox.local/quotes/ -> quote-service
- http://vagrantbox.local/evaluations/ -> like-service

- http://vagrantbox.local/ -> web UI
