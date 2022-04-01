#!/usr/bin/env bash

readonly DOCKER_UTILS="../docker_utils.sh"
if [[ -f $DOCKER_UTILS ]]; then
    source $DOCKER_UTILS --source-only;
else
    echo "ERROR!!! No $DOCKER_UTILS file found."
    exit 1
fi

should_html_folder_contains_only_index_html() {
    local readonly DESCRIPTION='should "html" folder contains only "index.html"'
    local readonly EXPECTED="50x.html
index.html"
    local readonly ACTUAL=`(docker run --entrypoint "ls" $NAME /usr/share/nginx/html)`
    assertEquals "$ACTUAL" "$EXPECTED"
}

should_up_sh_exists() {
    local readonly DESCRIPTION='should "up.sh" file exists'
    assertFileExists "up.sh"
}

should_up_script_run_nginx_and_serve_index_html() {
    local readonly DESCRIPTION='should run nginx service and serve "index.html" page'
    local readonly CONTAINER_ID=`(./up.sh)`
    local readonly EXPECTED="<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <title>Hello World</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>"
    sleep 5
    local readonly ACTUAL=$(curl -s http://192.168.50.95:88)
    assertEquals "$ACTUAL" "$EXPECTED"
    $((docker container stop $CONTAINER_ID) >/dev/null)
}

readonly NAME='serve-html-page-using-nginx'

setUp build_docker_image

should_use_alpine_linux
should_html_folder_contains_only_index_html
should_up_sh_exists
should_up_script_run_nginx_and_serve_index_html

tearDown delete_docker_image
