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

should_execute_factor_with_external_value() {
    local readonly DESCRIPTION='should execute factor with external value'
    local readonly EXPECTED="20200127: 31 651617"
    local readonly ACTUAL=`(docker run $NAME 20200127)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_fail_to_execute_the_external_command() {
    local readonly DESCRIPTION='should not execute the external command'
    local readonly EXPECTED="BusyBox v1.34.1 (2022-02-02 18:21:20 UTC) multi-call binary.

Usage: factor [NUMBER]...

Print prime factors"
    local readonly ACTUAL=$((docker run $NAME echo Ciao Mondo 1>&2) 2>&1)
    assertEquals "$ACTUAL" "$EXPECTED"
}

readonly NAME='execute-factor-as-entrypoint'

setUp build_docker_image

should_use_alpine_linux
should_execute_factor_with_default_value
should_execute_factor_with_external_value
should_fail_to_execute_the_external_command

tearDown delete_docker_image
