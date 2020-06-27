'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObjectSchema extends Schema {
  up () {
    this.create('objects', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('objects')
  }
}

module.exports = ObjectSchema
