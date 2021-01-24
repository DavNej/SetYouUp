# syntax=docker/dockerfile:experimental
FROM node:12.16.1 as build-stage

COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d
COPY --from=build-stage /build /usr/share/nginx/html

EXPOSE 3000
