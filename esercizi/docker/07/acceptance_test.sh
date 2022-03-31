#!/usr/bin/env bash

readonly DOCKER_UTILS="../docker_utils.sh"
if [[ -f $DOCKER_UTILS ]]; then
    source $DOCKER_UTILS --source-only;
else
    echo "ERROR!!! No $DOCKER_UTILS file found."
    exit 1
fi

should_app_folder_contains_only_invertimi_txt() {
    local readonly DESCRIPTION='should "app" folder contains only "invertimi.txt"'
    local readonly EXPECTED="invertimi.txt"
    local readonly ACTUAL=`(docker run --entrypoint "ls" $NAME /app)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_reverse_the_contet_of_the_default_file() {
    local readonly DESCRIPTION='should reverse the content of the "invertimi.txt" file'
    local readonly EXPECTED="!ittut a oaic"
    local readonly ACTUAL=`(docker run $NAME)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_reverse_the_contet_of_the_file_with_name() {
    local readonly DESCRIPTION='should reverse the content of the "modules" file'
    local readonly EXPECTED="tekcap_fa
6vpi"
    local readonly ACTUAL=`(docker run $NAME /etc/modules)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_fail_to_execute_the_external_command() {
    local readonly DESCRIPTION='should not execute the external command'
    local readonly EXPECTED="rev: echo: No such file or directory
rev: Ciao: No such file or directory
rev: Mondo: No such file or directory"
    local readonly ACTUAL=$((docker run $NAME echo Ciao Mondo 1>&2) 2>&1)
    assertEquals "$ACTUAL" "$EXPECTED"
}

readonly NAME='execute-rev-as-entrypoint'

setUp build_docker_image

should_use_alpine_linux
should_contains_base_layout_plus_app_folder
should_app_folder_contains_only_invertimi_txt
should_reverse_the_contet_of_the_default_file
should_reverse_the_contet_of_the_file_with_name
should_fail_to_execute_the_external_command

tearDown delete_docker_image
