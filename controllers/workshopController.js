exports.showWorkshopList = (req, res, next) => {
  res.render("pages/warsztat/warsztat-list", { navLocation: "warsztat" });
};

exports.showAddWorkshopForm = (req, res, next) => {
  res.render("pages/warsztat/warsztat-form", { navLocation: "warsztat" });
};

exports.showWorkshopDetails = (req, res, next) => {
  res.render("pages/warsztat/warsztat-details", { navLocation: "warsztat" });
};
