const sequelize = require('./sequelize');

const Warsztat = require('../../model/sequelize/Warsztat');
const Uzytkownik = require('../../model/sequelize/Uzytkownik');
const Samochod = require('../../model/sequelize/Samochod');

module.exports = () => {
    Uzytkownik.hasMany(Samochod);
    Samochod.belongsTo(Uzytkownik);

    return sequelize
        .sync({force: true}).then( () => {
            return Uzytkownik.findAll();
        })
        .then(users => {
            if( !users || users.length == 0 ) {
                return Uzytkownik.bulkCreate([
                    {email: 'test@test.com', haslo: 'test123'},
                    {email: 'karol@test.com', haslo: 'test1234'},
                    {email: 'gosia@test.com', haslo: 'test1235'},
                ])
                .then( () => {
                    return Uzytkownik.findAll();
                });
            } else {
                return users;
            }
        })
        .then( users => {
            allUsers = users;
            return Samochod.findAll();
        })
        .then( cars => {
            if( !cars || cars.length == 0 ) {
                return Samochod.bulkCreate([
                    { numer_rejestracyjny: 'RJA84545', marka: 'Audi', typ: 'A5', rok_produkcji: 2010, pojemnosc: 2000, UzytkownikId: 1 },
                    { numer_rejestracyjny: 'WR27191', marka: 'BMW', typ: 'X5', rok_produkcji: 2015, pojemnosc: 3000, UzytkownikId: 2 },
                ])
                .then( () => {
                    return Samochod.findAll();
                });
            } else {
                return cars;
            }
        });      
};

