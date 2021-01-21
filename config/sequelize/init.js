const sequelize = require('./sequelize');

const Warsztat = require('../../model/sequelize/Warsztat');
const Uzytkownik = require('../../model/sequelize/Uzytkownik');
const Samochod = require('../../model/sequelize/Samochod');
const ZlecenieNaprawy = require('../../model/sequelize/ZlecenieNaprawy');
const RodzajNaprawy = require('../../model/sequelize/RodzajNaprawy');
const Adres = require('../../model/sequelize/Adres');
const AdresWarsztat = require('../../model/sequelize/AdresWarsztat');
const Rola = require('../../model/sequelize/Rola');

module.exports = () => {
    Uzytkownik.hasMany(Samochod);
    Samochod.belongsTo(Uzytkownik);
    Rola.hasMany(Uzytkownik);
    Uzytkownik.belongsTo(Rola);
    Samochod.hasMany(ZlecenieNaprawy);
    ZlecenieNaprawy.belongsTo(Samochod);
    Warsztat.hasMany(ZlecenieNaprawy);
    ZlecenieNaprawy.belongsTo(Warsztat);
    RodzajNaprawy.hasMany(ZlecenieNaprawy);
    ZlecenieNaprawy.belongsTo(RodzajNaprawy);
    // Adres.hasMany(AdresWarsztat);
    // AdresWarsztat.belongsTo(Adres);
    // Warsztat.hasMany(AdresWarsztat);
    // AdresWarsztat.belongsTo(Warsztat);

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
        })
        .then(cars => {
            allCars = cars;
            return ZlecenieNaprawy.findAll();
        })
        .then( repairorders => {
            if( !repairorders || repairorders.length == 0 ) {
                return ZlecenieNaprawy.bulkCreate([
                    { data_od: '2021-01-14', data_do: '2021-01-16', koszt_naprawy: 745.40, SamochodId: 1},
                    { data_od: '2021-01-10', data_do: '2021-01-15', koszt_naprawy: 1467.80, SamochodId: 2}
                ])
                .then( () => {
                    return ZlecenieNaprawy.findAll();
                });
            } else {
                return repairorders;
            }
              
        })
        .then(repairorders => {
            allRepairorders = repairorders;
            return Warsztat.findAll();
        })
        .then( carsmanufactory => {
            if( !carsmanufactory || carsmanufactory.length == 0 ) {
                return Warsztat.bulkCreate([
                    { nazwa_warsztat: 'Bemowo CarTu', telefon: '22 564 23 56', email: 'bemowo@cartu.pl', WarsztatId: 1 },
                    { nazwa_warsztat: 'Białołęka CarTu', telefon: '22 577 32 44', email: 'bialoleka@cartu.pl', WarsztatId: 2 }
                ])
                .then( () => {
                    return Warsztat.findAll();
                });
            } else {
                return carsmanufactory;
            }
              
        })
        .then(repairorders => {
            allRepairorders = repairorders;
            return RodzajNaprawy.findAll();
        })
        .then( typesrepair => {
            if( !typesrepair || typesrepair.length == 0 ) {
                return RodzajNaprawy.bulkCreate([
                    { rodzaj: 'wymiana klocków hamulcowych', RodzajNaprawyId: 1 },
                    { rodzaj: 'wymiana rozrządu', RodzajNaprawyId: 2 },
                    { rodzaj: 'serwis olejowy', RodzajNaprawyId: 3 },
                    { rodzaj: 'wymiana tarcz', RodzajNaprawyId: 4 },
                    { rodzaj: 'diagnoza komputerowa', RodzajNaprawyId: 5 },
                    { rodzaj: 'przegląd okresowy', RodzajNaprawyId: 6 },
                    { rodzaj: 'wymiana płynów eksploatacyjnych', RodzajNaprawyId: 7 }
                    
                ])
                .then( () => {
                    return RodzajNaprawy.findAll();
                });
            } else {
                return typesrepair;
            } 
        })
        .then(users => {
            allUsers = users;
            return Rola.findAll();
        })
        .then( roles => {
            if( !roles || roles.length == 0 ) {
                return Rola.bulkCreate([
                    { rola: 'administrator', RolaId: 1 },
                    { rola: 'użytkownik', RolaId: 2 }  
                ])
                .then( () => {
                    return Rola.findAll();
                });
            } else {
                return roles;
            } 
        });
};


