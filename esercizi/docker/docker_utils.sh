readonly TEST_UTILS="../../lib/bash/test_utils.sh"
if [[ -f $TEST_UTILS ]]; then
    source $TEST_UTILS --source-only;
else
    echo "ERROR!!! No $TEST_UTILS file found."
    exit 1
fi

build_docker_image() {
    $((docker build -t $NAME .) >/dev/null)
    if (test 0 -ne $?); then exit $?; fi;
}

delete_docker_image() {
    $((docker image rm $NAME -f) >/dev/null)
}

should_use_alpine_linux() {
    local readonly DESCRIPTION="should use Alpine GNU/Linux distribition"
    local readonly ACTUAL=`(docker run --entrypoint "cat" $NAME /etc/os-release)`
    assertRegExpMatch "$ACTUAL" .*ID=alpine.*
}

should_contains_base_layout_plus_app_folder() {
    local readonly DESCRIPTION='should contains the base layout plus "app" folder'
    local readonly EXPECTED="app
bin
dev
etc
home
lib
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var"
    local readonly ACTUAL=`(docker run --entrypoint "ls" $NAME /)`
    assertEquals "$ACTUAL" "$EXPECTED"
}
