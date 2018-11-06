#!/bin/bash

cd $(dirname $0)

DEBUG="js-schema.debug.js"
MIN="js-schema.min.js"

if [ -f node_modules/browserify/bin/cmd.js ]
then
    ROLLUP='node_modules/rollup/bin/rollup'
else
    ROLLUP=rollup
fi

if [ -f node_modules/uglify-js/bin/uglifyjs ]
then
    UGLIFY='node_modules/uglify-js/bin/uglifyjs'
else
    UGLIFY=uglifyjs
fi


$ROLLUP index.js --file $DEBUG --format umd --name "schema"
$UGLIFY $DEBUG >$MIN
