dev:
	docker compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build 
prod:
	docker compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build 
down:
	docker compose down