FROM node:slim
WORKDIR  /app

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app


EXPOSE 4200 49153

ENTRYPOINT ng serve  --host 0.0.0.0 --poll 500 --disable-host-check --port 4200
