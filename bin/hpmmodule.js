#!/usr/bin/env node

const npmlog = require('npmlog');
npmlog.info("HPM", "Welcome to HPM!")
npmlog.info("HPM", "It worked if it ends with ok.")
npmlog.info("HPM", process.argv.toString())
switch (process.argv[2]) {
    case "install":
        npmlog.info("HPM","You are installing from the public REPO.")
        npmlog.info("HPM","Remember to put the install location after the Add-on/Module you which to install.")
        npmlog.info("HPM",`Installing ${process.argv[3]} If it exists in the Repo.`)
        npmlog.info("HPM",`You may see extra logs info if you activated --verbose.`)
        switch (process.argv[3]) {
            case "DroppyAddon":

        }
        break;
}