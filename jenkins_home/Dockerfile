FROM jenkins/jenkins:latest
# デフォルトではPermission Errorが起こる
USER root

RUN apt-get update
# Jenkins agent でDocker動作のため
RUN curl -sSL https://get.docker.com/ | sh