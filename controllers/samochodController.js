exports.showEmployeeList = (req, res, next) => {
    res.render('pages/samochod-list/list', {});
}
exports.showAddEmployeeForm = (req, res, next) => {
    res.render('pages/samochod-form/form', {});
}
exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/samochod-details/details', {});
}



