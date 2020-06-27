'use strict'

class LoveController {
  async data({ view }) {
return view.render("who");
}

}

module.exports = LoveController
