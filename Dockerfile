FROM node:12

# как-то должно помочь от out of memory
ENV NODE_OPTIONS --max_old_space_size=4096

COPY . /e-logs-constructor

RUN npm install -g npm http-server node-gyp

RUN cd /e-logs-constructor/frontend && npm install && npm run build
RUN cd /e-logs-constructor/backend && npm install

EXPOSE 80 8000 443 8085 8003
ENTRYPOINT ["e-logs-constructor/entrypoint"]
