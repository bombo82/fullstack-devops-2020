#!/usr/bin/env bash

readonly DOCKER_UTILS="../docker_utils.sh"
if [[ -f $DOCKER_UTILS ]]; then
    source $DOCKER_UTILS --source-only;
else
    echo "ERROR!!! No $DOCKER_UTILS file found."
    exit 1
fi

should_app_folder_contains_only_index_js() {
    local readonly DESCRIPTION='should "app" folder contains only "index.js"'
    local readonly EXPECTED="index.js"
    local readonly ACTUAL=`(docker run --entrypoint "ls" $NAME /app)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_execute_index_js_using_nodejs() {
    local readonly DESCRIPTION='should execute the "index.js" file using the nodejs interpreter'
    local readonly ACTUAL=`(docker run $NAME)`
    assertRegExpMatch "$ACTUAL" "^hello from [A-Za-z0-9]{12}$"
}

should_execute_index_js_with_external_parameter() {
    local readonly DESCRIPTION='should execute the "index.js" file with external parameter using the nodejs interpreter'
    local readonly EXPECTED="hello from Gianni"
    local readonly ACTUAL=`(docker run $NAME Gianni)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_fail_to_execute_the_external_command() {
    local readonly DESCRIPTION='should not execute the external command'
    local readonly EXPECTED="hello from echo Ciao Mondo"
    local readonly ACTUAL=`(docker run $NAME echo Ciao Mondo)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

readonly NAME='execute-node-as-entrypoint'

setUp build_docker_image

should_use_alpine_linux
should_contains_base_layout_plus_app_folder
should_app_folder_contains_only_index_js
should_execute_index_js_using_nodejs
should_execute_index_js_with_external_parameter
should_fail_to_execute_the_external_command

tearDown delete_docker_image
