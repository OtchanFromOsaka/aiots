FROM debian:bookworm-slim

ENV TZ=Asia/Tokyo

RUN groupadd -g 1001 aiots
RUN useradd -m -g 1001 -u 1001 aiots
USER aiots
RUN mkdir -p /home/aiots/dev
WORKDIR /home/aiots/dev
