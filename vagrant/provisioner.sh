#!/usr/bin/env bash

readonly USER_NAME="Gianni Bombelli (bombo82)"
readonly USER_EMAIL="gianni@giannibombelli.it"

install_and_configure_git() {
    echo "### Install and configure git"
    apk add git git-doc nano tig
    git config --system core.editor nano
    su vagrant -c "git config --global user.name \"$USER_NAME\""
    su vagrant -c "git config --global user.email \"$USER_EMAIL\""
}

install_and_configure_docker() {
    echo "### Install and configure docker"
    apk add docker
    adduser vagrant docker
    sed -i 's/DOCKER_OPTS=""/DOCKER_OPTS="-H unix:\/\/\/var\/run\/docker.sock -H tcp:\/\/0.0.0.0:2375"/g' /etc/conf.d/docker
    rc-update add docker boot
    rc-service docker start
}

install_and_configure_docker-compose() {
    echo "### Install and configure docker-compose"
    apk add py3-pip python3-dev libffi-dev libressl-dev gcc libc-dev make musl-dev cargo
    pip install --upgrade pip
    pip install docker-compose
}

install_nodejs_and_npm() {
    echo "### Install and configure Node.js"
    apk add nodejs npm
}

install_and_configure_git
install_and_configure_docker
install_and_configure_docker-compose
install_nodejs_and_npm
