FROM debian:bookworm-slim

ENV TZ=Asia/Tokyo

RUN apt-get update && apt-get install -y nodejs npm curl
RUN npm install -g n
RUN npm install -g pnpm
RUN npm install -g @playwright/test

RUN groupadd -g 1001 aiots
RUN useradd -m -g 1001 -u 1001 aiots
USER aiots
RUN mkdir -p /home/aiots/dev
WORKDIR /home/aiots/dev
