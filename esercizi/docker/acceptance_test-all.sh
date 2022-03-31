#!/usr/bin/env bash

for esercizio in `ls -d */`; do
    cd $esercizio
    ./acceptance_test.sh
    cd ..
done
