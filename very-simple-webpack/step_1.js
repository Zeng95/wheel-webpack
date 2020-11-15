modules = {
  0: function (require, exports) {
    const { action } = require('./action')
    const { name } = require('./name')

    const message = `${name} is ${action}`
    console.log(message)
  },

  1: function (require, exports) {
    const action = 'making webpack'

    exports = { action }
  },

  2: function (require, exports) {
    const { familyName } = require('./family-name')

    exports = { name: `${familyName} Tao` }
  },

  3: function (require, exports) {
    exports = { familyName: 'Zeng' }
  },
}
