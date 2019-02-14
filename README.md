<p align="center"><img src="./assets/treehole-en.png" width="60%"></p>

## Development

1. Clone and copy .env file

```bash
git clone https://github.com/senhungnet/treehole-server.git
cd treehole-server
cp .env.example .env
```

2. Edit `.env` file

```dotenv
ENABLE_PLAYGROUND=true
ENABLE_TRACING=true
MONGODB_CONNECTION="mongodb://localhost:27017/"
```

3. Get Mongodb

Make sure mongodb exists, or install one using docker

```bash
docker run --name mongodb -p 27017:27017 -d mongo
```

4. Serve

```bash
yarn && yarn dev
```

## Deployment

1. Clone and copy .env file

```bash
git clone https://github.com/senhungnet/treehole-server.git
cd treehole-server
cp .env.example .env
```

2. Edit `.env` file

```dotenv
ENABLE_PLAYGROUND=false
ENABLE_TRACING=false
MONGODB_CONNECTION="mongodb://mongodb:27017/"
```

3. Build and serve

```bash
docker-compose up --build -d
```

## Re-deployment

1. Update files

```bash
git pull origin master
```

2. Rebuild

```bash
docker-compose down
docker-compose up --build -d
```
