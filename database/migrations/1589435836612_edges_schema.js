"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EdgesSchema extends Schema {
  up() {
    this.create("edges", table => {
      table.increments();
      table.string("from");
      table.string("to");
      table.timestamps();
    });
  }

  down() {
    this.drop("edges");
  }
}

module.exports = EdgesSchema;
