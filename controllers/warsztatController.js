exports.showWarsztatList = (req, res, next) => {
    res.render('pages/warsztat/warsztat-list', {navLocation: 'warsztat'});
}
exports.showAddWarsztatForm = (req, res, next) => {
    res.render('pages/warsztat/warsztat-form', {navLocation: 'warsztat'});
}
exports.showWarsztatDetails = (req, res, next) => {
    res.render('pages/warsztat/warsztat-details', {navLocation: 'warsztat'});
}