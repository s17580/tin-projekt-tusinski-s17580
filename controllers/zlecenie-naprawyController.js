exports.showEmployeeList = (req, res, next) => {
    res.render('pages/zlecenie-naprawy-list/list', {});
}
exports.showAddEmployeeForm = (req, res, next) => {
    res.render('pages/zlecenie-naprawy-form/form', {});
}
exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/zlecenie-naprawy-details/details', {});
}