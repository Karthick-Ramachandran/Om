"use strict";
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
// front end routes
Route.on("/").render("welcome");
Route.get("/login", "AuthController.login").middleware(["LoggedIn"]);
Route.post("/login", "AuthController.authenticate").as("login");
Route.get("/second-login", "AuthController.secondLogin").middleware([
  "ShouldLoggedIn",
  "SecondLogin"
]);
Route.post("/second-login", "AuthController.secondLoginpost")
  .middleware(["ShouldLoggedIn", "SecondLogin"])
  .as("secondlogin");
Route.get("/third-login", "AuthController.thirdLogin").middleware([
  "ShouldLoggedIn",
  "ThirdLogin"
]);
Route.get("/register", "AuthController.register");
Route.post("/register", "AuthController.newUser").as("register");
Route.get("/logout", "AuthController.logout");
Route.get("/server-error", ({ view }) => {
  return view.render("server-error");
});
Route.post("/resend", "AuthController.resend").as("resend");
Route.post("/verifyotp", "AuthController.verify").as("verifyotp");
//
Route.group(() => {
  Route.get("/admin", "AdminController.index");
  Route.get("/upload", "AdminController.upload");
  Route.post("/upload", "AdminController.postupload").as("upload");
  Route.get("/profile", "AdminController.profile");
  Route.get("/gait/recognition", "RecognitionController.gait");
  Route.get("/smart-alert/image", "AlertController.image");
  Route.get("/smart-alert/video", "AlertController.video");
  Route.get("/datatable", "AdminController.datatable");
  Route.get("/map", "AdminController.map");
  Route.get("/mapping-and-profiling", "AdminController.mapping");

  Route.get("/wanted", "AdminController.wanted");
  Route.get("/face/recognition", "RecognitionController.face");
  Route.get("/object/recognition", "ObjectDetecController.data");
  Route.get("/object/recognition/get", "ObjectDetecController.form");
  Route.post("/object/recognition/get", "ObjectDetecController.postUpload").as(
    "ups"
  );
  Route.get("/object/recognition/all", "ObjectDetecController.getAll");
  Route.get("/number-plate", "RecognitionController.numberPlate");
})
  .prefix("/dashboard")
  .middleware(["Threeway"]);
Route.get("/api/nodes", "MappingController.nodes");
Route.get("/process", "LoveController.data");
Route.get("/api/edges", "MappingController.edges");
Route.get("/api/date", "MappingController.compare");
Route.get("/camera", "MappingController.camera");
Route.get("/api/json", "ObjectDetecController.dataApi");

Route.get("*", ({ view }) => {
  return view.render("dashboard.layouts.app");
});

