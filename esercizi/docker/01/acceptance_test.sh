#!/usr/bin/env bash

readonly DOCKER_UTILS="../docker_utils.sh"
if [[ -f $DOCKER_UTILS ]]; then
    source $DOCKER_UTILS --source-only;
else
    echo "ERROR!!! No $DOCKER_UTILS file found."
    exit 1
fi

should_execute_factor_with_default_value() {
    local readonly DESCRIPTION='should execute factor with default value'
    local readonly EXPECTED="42: 2 3 7"
    local readonly ACTUAL=`(docker run $NAME)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_execute_the_external_command() {
    local readonly DESCRIPTION='should execute the external command'
    local readonly EXPECTED="Ciao Mondo"
    local readonly ACTUAL=`(docker run $NAME echo Ciao Mondo)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

readonly NAME='execute-factor-as-cmd'

setUp build_docker_image

should_use_alpine_linux
should_execute_factor_with_default_value
should_execute_the_external_command

tearDown delete_docker_image
