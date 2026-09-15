/* eslint-disable @typescript-eslint/no-inferrable-types */

// Using https://github.com/bpatrik/typeconfig for configuration
import { SubConfigClass } from 'typeconfig/src/decorators/class/SubConfigClass'
import { ConfigProperty } from 'typeconfig/src/decorators/property/ConfigPropoerty'

/**
 * config.ts should not import any custom package (i.e.: that is not used by the main app)
 * */

export type dbTypes = 'MySQL' | 'SQLite'

@SubConfigClass({ softReadonly: true })
export class DigikamGasketConfig {
  @ConfigProperty({ description: 'DigiKam Directory Category' })
    digikamShowCollection: string = 'Public'

  @ConfigProperty({ description: 'DigiKam Database Type (MySQL or SQLite)' })
    digikamDbType: dbTypes = 'MySQL'

  @ConfigProperty({ description: 'DigiKam SQLite DB filename' })
    digikamSqliteDb: string = '/app/data/digikam/digikam.db'

  @ConfigProperty({ description: 'DigiKam MySQL DB hostname' })
    digikamMysqlHost: string = 'localhost'

  @ConfigProperty({ description: 'DigiKam MySQL DB port' })
    digikamMysqlPort: number = 3306

  @ConfigProperty({ description: 'DigiKam MySQL DB name' })
    digikamMysqlDb: string = 'digikam'

  @ConfigProperty({ description: 'DigiKam MySQL DB username' })
    digikamMysqlUser: string = 'digikam'

  @ConfigProperty({ description: 'DigiKam MySQL DB password' })
    digikamMysqlPassword: string = 'password'
}

/**
 * (Optional) Setting the configuration template.
 * This function can be called any time. Only use it for setting config template.
 */
export const initConfig = (extension: { setConfigTemplate: (cfg: typeof DigikamGasketConfig) => void }): void => {
  extension.setConfigTemplate(DigikamGasketConfig)
}
