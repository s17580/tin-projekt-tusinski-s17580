exports.showAdresList = (req, res, next) => {
    res.render('pages/adres/adres-list', {navLocation: 'adres'});
}
exports.showAddAdresForm = (req, res, next) => {
    res.render('pages/adres/adres-form', {navLocation: 'adres'});
}


