start:
	docker compose -f ./docker-compose.dev.yml up

# Builnd and deploy to docker hub
deploy:
	docker build . -t markdesign/cowxing-client:latest
	docker push markdesign/cowxing-client

logs:
	docker logs -f cowxing_client_dev

# Update if package changes
update:
	docker stop cowxing_client
	docker rm cowxing_client
	docker compose -f ./docker-compose.dev.yml up