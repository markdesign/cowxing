# Local Development
http://localhost:3301

## run dev
docker compose -f ./docker-compose.dev.yml up

## Install new package
```
$ npm install <pacakgename>
$ docker stop cowxing_server
$ docker rm cowxing_server
$ docker-compose -f ./docker-compose.dev.yml up --force-recreate
or
$ docker-compose -f ./docker-compose.dev.yml up -V
```

## Logs

```
$ docker logs -f cowxing_client_dev

docker exec -it <name-of-container> sh
```

## Restart

```
$ docker restart cowxing_client_dev
```

# build image and push to docker hub

```
$ docker build . -t markdesign/cowxing-client:latest
$ docker push markdesign/cowxing-client

// on server
$ docker pull markdesign/cowxing-client:latest
```
