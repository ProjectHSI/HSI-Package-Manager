#!/usr/bin/env node

const npmlog = require('npmlog');
npmlog.info("HPM","Welcome to HPM!")
npmlog.info("HPM","It worked if it ends with ok.")
switch (process.argv[2]) {
    case "test":
        npmlog.notice("HPM","Test")
}