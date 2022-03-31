#!/usr/bin/env bash

readonly DOCKER_UTILS="../docker_utils.sh"
if [[ -f $DOCKER_UTILS ]]; then
    source $DOCKER_UTILS --source-only;
else
    echo "ERROR!!! No $DOCKER_UTILS file found."
    exit 1
fi

should_execute_figlet_with_default_value() {
    local readonly DESCRIPTION='should execute figlet with default value'
    local readonly EXPECTED=" _   _      _ _        __        __         _     _ 
| | | | ___| | | ___   \ \      / /__  _ __| | __| |
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _\` |
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_|
                                                    "
    local readonly ACTUAL=`(docker run $NAME)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_execute_figlet_with_external_value() {
    local readonly DESCRIPTION='should execute figlet with default value'
    local readonly EXPECTED="  ____ _               __  __                 _       
 / ___(_) __ _  ___   |  \/  | ___  _ __   __| | ___  
| |   | |/ _\` |/ _ \  | |\/| |/ _ \| '_ \ / _\` |/ _ \ 
| |___| | (_| | (_) | | |  | | (_) | | | | (_| | (_) |
 \____|_|\__,_|\___/  |_|  |_|\___/|_| |_|\__,_|\___/ 
                                                      "
    local readonly ACTUAL=`(docker run $NAME Ciao Mondo)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_fail_to_execute_the_external_command() {
    local readonly DESCRIPTION='should not execute the external command'
    local readonly EXPECTED="           _              ____ _               __  __                 _       
  ___  ___| |__   ___    / ___(_) __ _  ___   |  \/  | ___  _ __   __| | ___  
 / _ \/ __| '_ \ / _ \  | |   | |/ _\` |/ _ \  | |\/| |/ _ \| '_ \ / _\` |/ _ \ 
|  __/ (__| | | | (_) | | |___| | (_| | (_) | | |  | | (_) | | | | (_| | (_) |
 \___|\___|_| |_|\___/   \____|_|\__,_|\___/  |_|  |_|\___/|_| |_|\__,_|\___/ 
                                                                              "
    local readonly ACTUAL=$((docker run $NAME echo Ciao Mondo 1>&2) 2>&1)
    assertEquals "$ACTUAL" "$EXPECTED"
}

readonly NAME='execute-figlet-as-entrypoint'

setUp build_docker_image

should_use_alpine_linux
should_execute_figlet_with_default_value
should_execute_figlet_with_external_value
should_fail_to_execute_the_external_command

tearDown delete_docker_image
