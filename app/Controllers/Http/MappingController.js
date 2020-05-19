"use strict";
const Mapping = use("App/Models/Mapping");
const Edge = use("App/Models/Edge");

class MappingController {
  async nodes({ response }) {
    const data = await Mapping.all();
    return response.json(data);
  }
  async edges({ response }) {
    const data = await Edge.all();
    return response.json(data);
  }
  async compare({ response }) {
    const data = await Edge.all();
  }
  async camera({ view }) {
    return view.render("camera");
  }
}

module.exports = MappingController;
