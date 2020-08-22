#!/usr/bin/env node

const npmlog = require('npmlog');
npmlog.info("HPM", "Welcome to HPM!")
npmlog.info("HPM", "It worked if it ends with ok.")
npmlog.info("HPM", process.argv())

const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
 
// Checks for available update and returns an instance
const notifier = updateNotifier({pkg});
 
// Notify using the built-in convenience method
notifier.notify();
 
// `notifier.update` contains some useful info about the update
console.log(notifier.update);
/*
{
    latest: '1.0.1',
    current: '1.0.0',
    type: 'patch', // Possible values: latest, major, minor, patch, prerelease, build
    name: 'pageres'
}
*/

switch (process.argv[2]) {
    case "install":
        npmlog.info("HPM","You are installing from the public REPO.")
        npmlog.info("HPM","Remember to put the install location after the Add-on/Module you which to install.")
        npmlog.info("HPM",`Installing ${process.argv[3]} If it exists in the Repo.`)
        npmlog.info("HPM",`You may see extra logs info if you activated --verbose.`)
        switch (process.argv[3]) {
            case "DroppyAddon":
                npmlog.info("HPM",`Installing the Droppy addon which`)
        }
        break;
}