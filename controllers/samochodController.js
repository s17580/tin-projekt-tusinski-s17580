exports.showSamochodList = (req, res, next) => {
    res.render('pages/samochod/samochod-list', {});
}
exports.showAddSamochodForm = (req, res, next) => {
    res.render('pages/samochod/samochod-form', {});
}
exports.showSamochodnDetails = (req, res, next) => {
    res.render('pages/samochod/samochod-details', {});
}



