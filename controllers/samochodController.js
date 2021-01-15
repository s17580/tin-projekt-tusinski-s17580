exports.showEmployeeList = (req, res, next) => {
    res.render('pages/samochod/samochod-list', {});
}
exports.showAddEmployeeForm = (req, res, next) => {
    res.render('pages/samochod/samochod-form', {});
}
exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/samochod/samochod-details', {});
}



