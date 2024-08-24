import { Sequelize, DataTypes, Model } from 'sequelize'
import { SQLITE_DB_DIR } from 'yunzai'
import { join } from 'path'
import fs from 'fs'
const dir = join(process.cwd(), `${SQLITE_DB_DIR}/data.db`)
fs.mkdirSync(dir, { recursive: true })
// TODO DB自定义
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dir,
  logging: false
})
await sequelize.authenticate()
export default class BaseModel extends Model {
  static Types = DataTypes
  /**
   *
   * @param model
   * @param columns
   */
  static initDB(model, columns) {
    let name = model.name
    name = name.replace(/DB$/, 's')
    model.init(columns, { sequelize, tableName: name })
    model.COLUMNS = columns
  }
}
export { sequelize }
