start:
	docker compose -f ./docker-compose.dev.yml up

deploy:
	docker build . -t markdesign/cowxing-server:latest
	docker push markdesign/cowxing-server

logs: 
	docker logs -f cowxing_server_dev

update:
	docker stop cowxing_server
	docker rm cowxing_server
	docker compose -f ./docker-compose.dev.yml up 