exports.showUzytkownikList = (req, res, next) => {
    res.render('pages/uzytkownik/uzytkownik-list', {navLocation: 'uzytkownik'});
}