# Local Development

## Install new package

```
$ npm install <pacakgename>
$ docker stop cowxing_client_dev
$ docker rm cowxing_client_dev
$ docker-compose -f ./docker-compose.dev.yml up -d 
```

## Logs

```
$ docker logs -f cowxing_client_dev
```

## Restart

```
$ docker restart cowxing_client_dev
```

# Push to Production

## build new image to docker hub

```
$ docker build . -t markdesign/cowxing-client:latest
$ docker push markdesign/cowxing-client
```

Log into portaienr and pull latest and run image

# Notes

run Dev
docker-compose up -f ./docker-compose.dev.yml

run Prod
docker-compose up -d

# build image

```
$ docker build ./client -t markdesign/cowxing-client:latest
$ docker push markdesign/cowxing-client
$ docker pull markdesign/cowxing-client:latest
```
