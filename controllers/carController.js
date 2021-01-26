exports.showSamochodList = (req, res, next) => {
    res.render('pages/samochod/samochod-list', {navLocation: 'samochod'});
}
exports.showAddSamochodForm = (req, res, next) => {
    res.render('pages/samochod/samochod-form', {navLocation: 'samochod'});
}
exports.showSamochodnDetails = (req, res, next) => {
    res.render('pages/samochod/samochod-details', {navLocation: 'samochod'});
}



