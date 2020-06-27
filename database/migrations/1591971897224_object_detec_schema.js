'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObjectDetecSchema extends Schema {
  up () {
    this.create('object_detecs', (table) => {
      table.increments()
table.string("image");
      table.integer("user_id");
      table.timestamps()
    })
  }

  down () {
    this.drop('object_detecs')
  }
}

module.exports = ObjectDetecSchema
