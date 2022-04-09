FROM node:14-slim
RUN apt-get update && apt-get install -y build-essential

WORKDIR /backend/
COPY package.json package-lock.json ./

RUN npm ci --silent
COPY . .
USER node
CMD npm run dev
