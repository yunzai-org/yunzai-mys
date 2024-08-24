import fs from 'node:fs'
import Base from './Base.js'

import Character from './Character.js'
import Weapon from './Weapon.js'

const miaoPath = ''

// artifact  , material

for (let game of ['gs', 'sr']) {
  for (let type of ['character', 'material']) {
    let file = `${miaoPath}/resources/meta-${game}/${type}/index.js`
    if (fs.existsSync(file)) {
      try {
        await import(`file://${file}`)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
export { Base, Character, Weapon }
