"use strict";
const Gait = use("App/Models/Gait");
const Gimage = use("App/Models/Gimage");

class RecognitionController {
  async gait({ view }) {
    const gaitdata = await Gait.query()
      .with("gimages")
      .fetch();

    return view.render("dashboard.gait", {
      gaitdata: gaitdata.toJSON()
    });
  }
  async numberPlate({ view }) {
    const gaitdata = await Gait.query()
      .with("gimages")
      .fetch();

    return view.render("dashboard.gait", {
      gaitdata: gaitdata.toJSON()
    });
  }
  async object({ view }) {
    const gaitdata = await Gait.query()
      .with("gimages")
      .fetch();

    return view.render("dashboard.gait", {
      gaitdata: gaitdata.toJSON()
    });
  }
  async face({ view }) {
    const gaitdata = await Gait.query()
      .with("gimages")
      .fetch();

    return view.render("dashboard.gait", {
      gaitdata: gaitdata.toJSON()
    });
  }
}

module.exports = RecognitionController;
