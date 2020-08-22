#!/usr/bin/env node

const npmlog = require('npmlog');
npmlog.info("HPM","Welcome to HPM!")
npmlog.info("HPM","It worked if it ends with ok.")
switch (process.argv[2]) {
    case "install":
        npmlog.info("HPM","You are installing from the public REPO.")
        npmlog.info("HPM","Remember to put the install location after the Add-on/Module you which to install.")
        switch (process.args[4]) {
            case null:
                npmlog.warn("HPM","WARNING! You are using the command WITH OUT A PATH IDENTIFER OR THE PATH YOU ENTERED IS NULL OR UNDEFINED.\nUsing the Directory of the command you are running.")
                npmlog.warn("HPM", process.argv)
                break;
            case undefined:
                npmlog.warn("HPM","WARNING! You are using the command WITH OUT A PATH IDENTIFER OR THE PATH YOU ENTERED IS NULL OR UNDEFINED.\nUsing the Directory of the command you are running.")
                npmlog.warn("HPM", process.argv)
                break;
        }
        break;
}