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


