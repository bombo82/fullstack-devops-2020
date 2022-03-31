readonly DEBUG=0

total_success=0
total_fail=0

setUp() {
    echo -------
    if [ $# -ne 0 ]; then
        echo -e $NAME test setUp...'\n'
        for fun in $*; do
            $fun
        done
    fi
    echo -e '\n'$NAME test running...
}

tearDown() {
    if [ $# -ne 0 ]; then
        echo -e '\n'$NAME test tearDown...
        for fun in $*; do
            $fun
        done
    fi
    echo -e '\n'$NAME test completed!
    echo -e '\n'total: $((total_success+total_fail)), success: $total_success, fail: $total_fail'\n'
    echo -------
}

assertEquals() {
    if [[ "$1" == "$2" ]]; then
        success;
    else
        fail;
        if [ $DEBUG ]; then print_comparison_fail_details "$1" "$2"; fi
    fi
}

assertRegExpMatch() {
    if [[ "$1" =~ $2 ]]; then
        success;
    else
        fail;
        if [ $DEBUG ]; then print_regexp_fail_details "$1" "$2"; fi
    fi
}

assertFileExists() {
    if [[ -f $1 ]]; then
        success;
    else
        fail;
        if [ $DEBUG ]; then print_file_exists_fail_details "$1"; fi
    fi
}

success() {
    ((total_success++))
    print_success
}

fail() {
    ((total_fail++))
    print_fail
}

print_success() {
    echo -e "\t \e[32m\u2714 \e[39m$DESCRIPTION"
}

print_fail() {
    echo -e "\t \e[31m\u2717 \e[39m\e[5m\e[7m$DESCRIPTION \e[25m\e[27m"
}

print_comparison_fail_details() {
    echo "<<<<<<<<<<<< ACTUAL VALUE"
    echo "$1"
    echo "============"
    echo "$2"
    echo ">>>>>>>>>>>> EXPECTED VALUE"
}

print_regexp_fail_details() {
    echo "============ ACTUAL VALUE"
    echo "$1"
    echo "============ DOES NOT MATCH WITH"
    echo "$2"
    echo "============"
}

print_file_exists_fail_details() {
    echo "============ DOES NOT EXISTS OR IT IS NOT A REGULAR FILE: $1"
}
