FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

# -t - tag for container
# . - context

# build
# docker build -t hive/server .

# -p 3000:3000 - to publish port
# -it 
# run
# docker run -it hive/server sh