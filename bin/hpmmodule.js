#!/usr/bin/env node

const npmlog = require('npmlog');
const os = require(`os`)
npmlog.level = -Infinity
npmlog.info(`HPM`, `Welcome to HPM!`)
npmlog.info(`HPM`, `It worked if it ends with ok.`)
npmlog.info(`HPM`, process.argv)
npmlog.verbose(`HPM`, os.homedir())

const pkg = require('./../package.json');

process.on(`SIGINT`, () => {
    npmlog.disableProgress()
    npmlog.info(`HPM`, `ok`)
    npmlog.info(`Closing...`)
    process.exit(0)
})

process.on(`HSIGERR`, () => {
    npmlog.warn(`Closing...`)
    process.exit(1)
})

switch (process.argv[2]) {
    case `install`:
        var fs = require(`fs`)
        var cp = require(`child_process`)
        npmlog.info(`HPM`,`You are installing from the public REPO.`)
        npmlog.info(`HPM`,`Remember to put the install location after the Add-on/Module you which to install.`)
        npmlog.info(`HPM`,`Installing ${process.argv[3]} If it exists in the Repo.`)
        npmlog.info(`HPM`,`You may see extra logs info if you activated --verbose.`)
        if (fs.existsSync(`~/AppData/Roaming/HPM`)) { 
        switch (process.argv[3]) {
            case `DroppyAddon`:
                npmlog.info(`HPM`,`Installing the Rich Persence Custom Module Pack. Which can be run from the command line allowing you to use Discord's Rich Presence with custom settings.`)
                var nfetch = require('node-fetch');
                npmlog.enableProgress()
                var AreWeThereTracker = npmlog.newItem(`TotalWork`, 7, 1)
                npmlog.http(`HPM`, `Downloading and installing main.js`)
                nfetch('https://raw.githubusercontent.com/ProjectHSI/HSI-Modules-Packages/master/RPC/RPC/main.js')
                .then(res => res.text())
                .then(body => fs.writeFileSync(`${os.homedir}/AppData/Roaming/HPM/RPC/main.js`, body));
                AreWeThereTracker.completeWork(1)
                npmlog.http(`HPM`, `Downloading and installing package.json`)
                nfetch('https://raw.githubusercontent.com/ProjectHSI/HSI-Modules-Packages/master/RPC/RPC/package.json')
                .then(res => res.text())
                .then(body => fs.writeFileSync(`${os.homedir}/AppData/Roaming/HPM/RPC/package.json`, body));
                AreWeThereTracker.completeWork(1)
                npmlog.http(`HPM`, `Downloading and installing package-lock.json aka npm-shrinkwrap.json`)
                nfetch('https://raw.githubusercontent.com/ProjectHSI/HSI-Modules-Packages/master/RPC/RPC/npm-shrinkwrap.json')
                .then(res => res.text())
                .then(body => fs.writeFileSync(`${os.homedir}/AppData/Roaming/HPM/RPC/npm-shrinkwrap.json`, body));
                AreWeThereTracker.completeWork(1)
                npmlog.http(`HPM`, `Downloading and installing rpc.ps1`)
                nfetch('https://raw.githubusercontent.com/ProjectHSI/HSI-Modules-Packages/master/RPC/rpc.ps1')
                .then(res => res.text())
                .then(body => fs.writeFileSync(`${os.homedir}/AppData/Roaming/HPM/rpc.ps1`, body));
                AreWeThereTracker.completeWork(1)
                npmlog.http(`HPM`, `Downloading and installing rpc.cmd`)
                nfetch('https://raw.githubusercontent.com/ProjectHSI/HSI-Modules-Packages/master/RPC/rpc.cmd')
                .then(res => res.text())
                .then(body => fs.writeFileSync(`${os.homedir}/AppData/Roaming/HPM/rpc.cmd`, body));
                AreWeThereTracker.completeWork(1)
                npmlog.http(`HPM`, `Downloading and installing rpc [Shell Script]`)
                nfetch('https://raw.githubusercontent.com/ProjectHSI/HSI-Modules-Packages/master/RPC/rpc.sh')
                .then(res => res.text()).then(body => fs.writeFileSync(`${os.homedir}/AppData/Roaming/HPM/rpc.sh`), body);
                AreWeThereTracker.completeWork(1)
                npmlog.info(`HPM`, `Done Installing Files. NPM Install will take care of the installing modules. Naviagte to ~/AppData/Roaming/HPM/RPC. And Run npm install`)
                setInterval(() => {
                    if (fs.existsSync(`~/AppData/Roaming/HPM/RPC/node_modules`)) {
                        AreWeThereTracker.completeWork(1)
                        npmlog.info(`HPM`, `And we are done!`)
                        process.emit(`SIGINT`)
                    }
                }, 20000)
                break;
        }
        } else {
            npmlog.error(`HPM`, `Please run 'HPM prepare'.`)
            process.emit(`HSIGERR`)
        }
        break;
    case `prepare`:
        npmlog.info(`HPM`,`Making folder for installing stuff...`)
        npmlog.enableProgress()
        var AreWeThereTracker = npmlog.newItem(`TotalWork`, 2)
        var fs = require(`fs`)
        AreWeThereTracker.completeWork(1)
        fs.mkdirSync(`${os.homedir}/AppData/Roaming/HPM`, {
            recursive: true
        })
        AreWeThereTracker.completeWork(1)
        process.emit(`SIGINT`)
        break;
}