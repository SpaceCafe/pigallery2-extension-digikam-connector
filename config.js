"use strict";
/* eslint-disable @typescript-eslint/no-inferrable-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConfig = exports.DigikamGasketConfig = void 0;
const tslib_1 = require("tslib");
// Using https://github.com/bpatrik/typeconfig for configuration
const SubConfigClass_1 = require("typeconfig/src/decorators/class/SubConfigClass");
const ConfigPropoerty_1 = require("typeconfig/src/decorators/property/ConfigPropoerty");
let DigikamGasketConfig = class DigikamGasketConfig {
    constructor() {
        this.digikamShowCollection = 'Public';
        this.digikamDbType = 'MySQL';
        this.digikamSqliteDb = '/app/data/digikam/digikam.db';
        this.digikamMysqlHost = 'localhost';
        this.digikamMysqlPort = 3306;
        this.digikamMysqlDb = 'digikam';
        this.digikamMysqlUser = 'digikam';
        this.digikamMysqlPassword = 'password';
    }
};
exports.DigikamGasketConfig = DigikamGasketConfig;
tslib_1.__decorate([
    (0, ConfigPropoerty_1.ConfigProperty)({ description: 'DigiKam Directory Category' }),
    tslib_1.__metadata("design:type", String)
], DigikamGasketConfig.prototype, "digikamShowCollection", void 0);
tslib_1.__decorate([
    (0, ConfigPropoerty_1.ConfigProperty)({ description: 'DigiKam Database Type (MySQL or SQLite)' }),
    tslib_1.__metadata("design:type", String)
], DigikamGasketConfig.prototype, "digikamDbType", void 0);
tslib_1.__decorate([
    (0, ConfigPropoerty_1.ConfigProperty)({ description: 'DigiKam SQLite DB filename' }),
    tslib_1.__metadata("design:type", String)
], DigikamGasketConfig.prototype, "digikamSqliteDb", void 0);
tslib_1.__decorate([
    (0, ConfigPropoerty_1.ConfigProperty)({ description: 'DigiKam MySQL DB hostname' }),
    tslib_1.__metadata("design:type", String)
], DigikamGasketConfig.prototype, "digikamMysqlHost", void 0);
tslib_1.__decorate([
    (0, ConfigPropoerty_1.ConfigProperty)({ description: 'DigiKam MySQL DB port' }),
    tslib_1.__metadata("design:type", Number)
], DigikamGasketConfig.prototype, "digikamMysqlPort", void 0);
tslib_1.__decorate([
    (0, ConfigPropoerty_1.ConfigProperty)({ description: 'DigiKam MySQL DB name' }),
    tslib_1.__metadata("design:type", String)
], DigikamGasketConfig.prototype, "digikamMysqlDb", void 0);
tslib_1.__decorate([
    (0, ConfigPropoerty_1.ConfigProperty)({ description: 'DigiKam MySQL DB username' }),
    tslib_1.__metadata("design:type", String)
], DigikamGasketConfig.prototype, "digikamMysqlUser", void 0);
tslib_1.__decorate([
    (0, ConfigPropoerty_1.ConfigProperty)({ description: 'DigiKam MySQL DB password' }),
    tslib_1.__metadata("design:type", String)
], DigikamGasketConfig.prototype, "digikamMysqlPassword", void 0);
exports.DigikamGasketConfig = DigikamGasketConfig = tslib_1.__decorate([
    (0, SubConfigClass_1.SubConfigClass)({ softReadonly: true })
], DigikamGasketConfig);
/**
 * (Optional) Setting the configuration template.
 * This function can be called any time. Only use it for setting config template.
 */
const initConfig = (extension) => {
    extension.setConfigTemplate(DigikamGasketConfig);
};
exports.initConfig = initConfig;
//# sourceMappingURL=config.js.map