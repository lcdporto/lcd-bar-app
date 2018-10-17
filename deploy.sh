#!/bin/bash

DOCKER_REPO=lcdporto/lcd-bar-app
HASHED=$(git log --pretty=format:'%h' -n 1 2>&1)
docker build -t $DOCKER_REPO:$HASHED .
docker push $DOCKER_REPO:$HASHED
