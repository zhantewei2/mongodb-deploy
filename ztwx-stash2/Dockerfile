FROM node:16.17.1-alpine3.15

ADD src /home/src
ADD package.json /home/
WORKDIR /home
RUN echo 'Asia/Shanghai' > /etc/timezone
RUN npm i --registry https://registry.npm.taobao.org/

EXPOSE 4070
ENTRYPOINT ["node"]
CMD ["src/ztwx-kafka.mjs"]
