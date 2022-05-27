# Local Development

## run dev
docker-compose -f ./docker-compose.dev.yml up --force-recreate
docker-compose -f ./docker-compose.dev.yml up -V
docker compose -f ./docker-compose.dev.yml up
# initial setup

npm i express dotenv
npm i -D @types/express typescript ts-node-dev rimraf
npx tsc --init

## tsconfig.json

```
"rootDir": "./src",
"outDir": "./dist",
```

## package.json

```
"dev": "nodemon --exec ts-node src/index.ts",
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/index.js"

docker-compose -f docker-compose.dev.yml up --build

docker exec -it <name-of-container> sh
```

## production

```
docker-compose up --build
```

# Install new package

```
$ npm install <pacakgename>
$ docker stop cowxing_server
$ docker rm cowxing_server
$ docker-compose -f ./docker-compose.dev.yml up --build
```

# build image and push to docker hub

```
$ docker build . -t markdesign/cowxing-server:latest
$ docker push markdesign/cowxing-server
$ docker pull markdesign/cowxing-server:latest
```

# Dev notes

## run Dev

```
docker-compose up -f ./docker-compose.dev.yml
```

## run Prod

```
docker-compose up -d
```
