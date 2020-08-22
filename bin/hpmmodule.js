#!/usr/bin/env node

const npmlog = require('npmlog');
npmlog.info("HPM", "Welcome to HPM!")
npmlog.info("HPM", "It worked if it ends with ok.")
npmlog.info("HPM", process.argv)

const updateNotifier = require('update-notifier');
const pkg = require('./../package.json');
 
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

const fs = require("fs")

const Gauge = require("gauge")

switch (process.argv[2]) {
    case "install":
        npmlog.info("HPM","You are installing from the public REPO.")
        npmlog.info("HPM","Remember to put the install location after the Add-on/Module you which to install.")
        npmlog.info("HPM",`Installing ${process.argv[3]} If it exists in the Repo.`)
        npmlog.info("HPM",`You may see extra logs info if you activated --verbose.`)
        switch (process.argv[3]) {
            case "DroppyAddon":
                const bar = Gauge(process.stdout)
                bar.show("working…", 0)
                setTimeout(() => { bar.pulse(); bar.show("working…", 0.25) }, 500)
                setTimeout(() => { bar.pulse(); bar.show("working…", 0.50) }, 1000)
                setTimeout(() => { bar.pulse(); bar.show("working…", 0.75) }, 1500)
                setTimeout(() => { bar.pulse(); bar.show("working…", 0.99) }, 2000)
                setTimeout(() => bar.hide(), 2300)
                npmlog.info("HPM",`Installing the Droppy addon which can provide more information about your Droppy configuration on startup.`)
                if (args[4] != undefined) {
                    if (fs.existsSync(`${process.argv[4]}/node_modules/droppy`)) {
                        const nfetch = require("node-fetch")
                        const fetch = require('node-fetch');

                        async () => {
	                        const response = await fetch('https://github.com/');
	                        const body = await response.text();

	                    console.log(body);
                        };
                    }
                }
        }
        break;
}