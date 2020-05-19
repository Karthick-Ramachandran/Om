"use strict";
const Smart = use("App/Models/Smart");
class AlertController {
  async image({ view }) {
    const data = await Smart.query()
      .where("type", "image")
      .fetch();
    return view.render("dashboard.alert.image", { data: data.toJSON() });
  }
  async video({ view }) {
    const data = await Smart.query()
      .where("type", "video")
      .fetch();
    return view.render("dashboard.alert.video", { data: data.toJSON() });
  }
}

module.exports = AlertController;
