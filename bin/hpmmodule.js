#!/usr/bin/env node

const npmlog = require('npmlog');
npmlog.info("HPM", "Welcome to HPM!")
npmlog.info("HPM", "It worked if it ends with ok.")
npmlog.info("HPM", process.argv)

const pkg = require('./../package.json');

process.on("SIGINT", () => {
    npmlog.info("Closing...")
    process.exit(0)
})

process.on("HSIGERR", () => {
    npmlog.warn("Closing...")
    process.exit(1)
})

switch (process.argv[2]) {
    case "install":
        var fs = require("fs")
        npmlog.info("HPM","You are installing from the public REPO.")
        npmlog.info("HPM","Remember to put the install location after the Add-on/Module you which to install.")
        npmlog.info("HPM",`Installing ${process.argv[3]} If it exists in the Repo.`)
        npmlog.info("HPM",`You may see extra logs info if you activated --verbose.`)
        if (fs.existsSync("~/AppData/Roaming/HPM")) { 
        switch (process.argv[3]) {
            case "DroppyAddon":
                npmlog.info("HPM",`Installing the Rich Persence Custom Module Pack. Which can be run from the command line allowing you to use Discord's Rich Presence with custom settings.`)
                const nfetch = require("node-fetch")
                npmlog.enableProgress()
                npmlog.newItem("TotalWork", 2, 1)
                nfetch('https://github.com/')
                .then(res => res.text())
                .then(body => console.log(body));
                break;
        }
        } else {
            npmlog.error("HPM", "Please run 'HPM prepare'.")
            process.emit("HSIGERR")
        }
        break;
    case "prepare":
        npmlog.info("HPM","Making folder for installing stuff...")
        npmlog.enableProgress()
        var AreWeThereTracker = npmlog.newItem("TotalWork", 3)
        var UserAppData = "~/AppData/Roaming/"
        AreWeThereTracker.completeWork(1)
        var fs = require("fs")
        AreWeThereTracker.completeWork(1)
        fs.mkdirSync(UserAppData + "HPM")
        AreWeThereTracker.completeWork(1)
        break;
}