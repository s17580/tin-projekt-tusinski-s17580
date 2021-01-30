exports.showCarsList = (req, res, next) => {
  res.render("pages/cars/cars-list", { navLocation: "cars" });
};
exports.showCarForm = (req, res, next) => {
  res.render("pages/cars/car-form", { navLocation: "cars" });
};
exports.showCarDetails = (req, res, next) => {
  res.render("pages/cars/car-details", { navLocation: "cars" });
};
