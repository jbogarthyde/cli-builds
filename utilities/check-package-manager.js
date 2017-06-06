"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const child_process_1 = require("child_process");
const config_1 = require("../models/config");
const denodeify = require("denodeify");
const execPromise = denodeify(child_process_1.exec);
const packageManager = config_1.CliConfig.fromGlobal().get('packageManager');
function checkYarnOrCNPM() {
    if (packageManager !== 'default') {
        return Promise.resolve();
    }
    return Promise
        .all([checkYarn(), checkCNPM()])
        .then((data) => {
        const [isYarnInstalled, isCNPMInstalled] = data;
        if (isYarnInstalled && isCNPMInstalled) {
            console.log(chalk.yellow('You can `ng set --global packageManager=yarn` '
                + 'or `ng set --global packageManager=cnpm`.'));
        }
        else if (isYarnInstalled) {
            console.log(chalk.yellow('You can `ng set --global packageManager=yarn`.'));
        }
        else if (isCNPMInstalled) {
            console.log(chalk.yellow('You can `ng set --global packageManager=cnpm`.'));
        }
    });
}
exports.checkYarnOrCNPM = checkYarnOrCNPM;
function checkYarn() {
    return execPromise('yarn --version')
        .then(() => true, () => false);
}
function checkCNPM() {
    return execPromise('cnpm --version')
        .then(() => true, () => false);
}
//# sourceMappingURL=/private/var/folders/lp/5h0nls311ws4fn75nn7kzz600037zs/t/angular-cli-builds11756-42142-rgdeza.khinng66r/angular-cli/utilities/check-package-manager.js.map