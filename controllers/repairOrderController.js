exports.showZlecenieNaprawyList = (req, res, next) => {
    res.render('pages/zlecenie/zlecenie-naprawy-list', {navLocation: 'zlecenie'});
}
exports.showAddZlecenieNaprawyForm = (req, res, next) => {
    res.render('pages/zlecenie/zlecenie-naprawy-form', {navLocation: 'zlecenie'});
}
exports.showZlecenieNaprawyDetails = (req, res, next) => {
    res.render('pages/zlecenie/zlecenie-naprawy-details', {navLocation: 'zlecenie'});
}