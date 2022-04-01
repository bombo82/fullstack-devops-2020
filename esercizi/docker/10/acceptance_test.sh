#!/usr/bin/env bash

readonly DOCKER_UTILS="../docker_utils.sh"
if [[ -f $DOCKER_UTILS ]]; then
    source $DOCKER_UTILS --source-only;
else
    echo "ERROR!!! No $DOCKER_UTILS file found."
    exit 1
fi

should_app_folder_contains_only_app_files() {
    local readonly DESCRIPTION='should "app" folder contains only the applications files'
    local readonly EXPECTED="node_modules
server.js"
    local readonly ACTUAL=`(docker run --entrypoint "ls" $NAME /app)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_up_sh_exists() {
    local readonly DESCRIPTION='should "up.sh" file exists'
    assertFileExists "up.sh"
}

should_up_script_run_node_and_serve_server_js() {
    local readonly DESCRIPTION='should "up.sh" script run node service and serve "server.js"'
    local readonly CONTAINER_ID=`(./up.sh)`
    sleep 5
    local readonly ACTUAL=$(curl -s http://192.168.50.95:8080)
    assertRegExpMatch "$ACTUAL" "^hello from [A-Za-z0-9]{12}$"
    $((docker container stop $CONTAINER_ID) >/dev/null)
}

should_up_script_run_node_and_serve_server_js_with_external_parameter() {
    local readonly DESCRIPTION='should "up.sh" script run node service and serve "server.js" with external parameters'
    local readonly CONTAINER_ID=`(./up.sh Gianni)`
    local readonly EXPECTED="hello from Gianni"
    sleep 5
    local readonly ACTUAL=$(curl -s http://192.168.50.95:8080)
    assertEquals "$ACTUAL" "$EXPECTED"
    $((docker container stop $CONTAINER_ID) >/dev/null)
}

should_fail_to_execute_the_external_command() {
    local readonly DESCRIPTION='should execute the external command'
    local readonly CONTAINER_ID=`(./up.sh "echo ciao mondo")`
    local readonly EXPECTED="hello from echo ciao mondo"
    sleep 5
    local readonly ACTUAL=$(curl -s http://192.168.50.95:8080)
    assertEquals "$ACTUAL" "$EXPECTED"
    $((docker container stop $CONTAINER_ID) >/dev/null)
}

readonly NAME='serve-js-page-using-node'

setUp build_docker_image

should_use_alpine_linux
should_contains_base_layout_plus_app_folder
should_app_folder_contains_only_app_files
should_up_sh_exists
should_up_script_run_node_and_serve_server_js
should_up_script_run_node_and_serve_server_js_with_external_parameter
should_fail_to_execute_the_external_command

tearDown delete_docker_image
