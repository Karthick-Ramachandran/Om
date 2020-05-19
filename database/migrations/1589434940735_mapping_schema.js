"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MappingSchema extends Schema {
  up() {
    this.create("mappings", table => {
      table.increments();
      table.string("title");
      table.string("label");
      table.string("image");
      table.timestamps();
    });
  }

  down() {
    this.drop("mappings");
  }
}

module.exports = MappingSchema;
