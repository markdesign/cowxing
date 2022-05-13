run Dev
docker-compose up -f ./docker-compose.dev.yml

run Prod
docker-compose up -d

# build image
```
$ docker build . -t markdesign/cowxing-server:latest
$ docker push markdesign/cowxing-server
$ docker pull markdesign/cowxing-server:latest
```
