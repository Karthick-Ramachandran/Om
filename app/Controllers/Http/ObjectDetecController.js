"use strict";

const ObjectDetec = use("App/Models/ObjectDetec");
const Helpers = use("Helpers");

class ObjectDetecController {
  async data({ view, auth }) {
    const id = await auth.getUser();
    const data = await ObjectDetec.query()
      .where("user_id", id.id)
      .orderBy("created_at", "desc")
      .first();
    return view.render("objc", { data: data.toJSON() });
  }
  async form({ view }) {
    return view.render("objform");
  }
async dataApi({ response }) {
    const data = await ObjectDetec.query()
      .orderBy("created_at", "desc")
      .first();
    return response.json(data);
  }
  async getAll({ view, auth }) {
    const id = await auth.getUser();

    const data = await ObjectDetec.query()
      .where("user_id", id.id)
      .fetch();
    return view.render("fetchobj", { data: data.toJSON() });
  }
  async postUpload({ request, response, session, auth }) {
    const user_id = await auth.getUser();
    const image = request.file("image");
    const uploadImage = await image;
    const upload = await new ObjectDetec();
    upload.user_id = user_id.id;
    const date = Date.now();
    uploadImage.move(Helpers.publicPath("object"), {
      name: uploadImage.clientName,
      overwrite: true
    });
    upload.image =  uploadImage.clientName;
    await upload.save();
    session.flash({ image: "File upload is Successful" });
    return response.redirect("/process");
  }
}

module.exports = ObjectDetecController;

