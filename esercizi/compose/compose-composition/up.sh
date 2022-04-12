docker-compose -f docker-compose-local.yml docker-compose-hosts.yml docker-compose-ui.yml up
docker-compose -f docker-compose-local.yml docker-compose-test.yml docker-compose-ui.yml up
docker-compose -f docker-compose-local.yml docker-compose-test.yml docker-compose-prod.yml up
