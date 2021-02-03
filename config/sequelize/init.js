const sequelize = require("./sequelize");
const authUtils = require("../../utils/authUtils");

const Workshop = require("../../model/sequelize/Workshop");
const User = require("../../model/sequelize/User");
const Car = require("../../model/sequelize/Car");
const RepairOrder = require("../../model/sequelize/RepairOrder");
const RepairType = require("../../model/sequelize/RepairType");
const Address = require("../../model/sequelize/Address");
const Role = require("../../model/sequelize/Role");

module.exports = () => {
  User.belongsTo(Role, { onDelete: "cascade" });
  Role.hasMany(User, { onDelete: "cascade" });

  User.hasMany(Car, { onDelete: "cascade" });
  Car.belongsTo(User, { onDelete: "cascade" });

  Car.hasMany(RepairOrder, { onDelete: "cascade" });
  RepairOrder.belongsTo(Car, { onDelete: "cascade" });
  RepairOrder.belongsTo(Workshop, { onDelete: "cascade" });
  RepairOrder.belongsTo(RepairType, { onDelete: "cascade" });
  RepairType.hasMany(RepairOrder, { onDelete: "cascade" });

  Workshop.hasMany(RepairOrder, { onDelete: "cascade" });
  Workshop.belongsTo(Address, { onDelete: "cascade" });
  Address.hasMany(Workshop, { onDelete: "cascade" });

  return sequelize
    .sync({ force: true })
    .then(() => {
      return Role.findAll();
    })
    .then((roles) => {
      if (!roles || roles.length == 0) {
        return Role.bulkCreate([{ name: "administrator" }, { name: "użytkownik" }]).then(() => {
          return Role.findAll();
        });
      } else {
        return roles;
      }
    })
    .then(() => {
      return User.findAll();
    })
    .then((users) => {
      if (!users || users.length == 0) {
        const password = authUtils.hashPassword("test123");
        return User.bulkCreate([
          { email: "administrator@test.com", password, RoleId: 1 },
          { email: "uzytkownik@test.com", password, RoleId: 2 },
          { email: "gosia@test.com", password, RoleId: 2 },
        ]).then(() => {
          return User.findAll();
        });
      } else {
        return users;
      }
    })
    .then(() => {
      return Car.findAll();
    })
    .then((cars) => {
      if (!cars || cars.length == 0) {
        return Car.bulkCreate([
          {
            numer_rejestracyjny: "RJA84545",
            marka: "Audi",
            typ: "A5",
            rok_produkcji: 2010,
            pojemnosc: 2000,
            UserId: 1,
          },
          {
            numer_rejestracyjny: "WR27191",
            marka: "BMW",
            typ: "X5",
            rok_produkcji: 2015,
            pojemnosc: 3000,
            UserId: 2,
          },
        ]).then(() => {
          return Car.findAll();
        });
      } else {
        return cars;
      }
    })
    .then(() => {
      return RepairType.findAll();
    })
    .then((repairTypes) => {
      if (!repairTypes || repairTypes.length == 0) {
        return RepairType.bulkCreate([
          { nazwa: "wymiana klocków hamulcowych", cena: 149.99 },
          { nazwa: "wymiana rozrządu", cena: 1500 },
          { nazwa: "serwis olejowy", cena: 490.99 },
          { nazwa: "wymiana tarcz", cena: 270 },
          { nazwa: "diagnoza komputerowa", cena: 65.99 },
          { nazwa: "przegląd okresowy", cena: 99.99 },
          { nazwa: "wymiana płynów eksploatacyjnych", cena: 170.2 },
        ]).then(() => {
          return RepairType.findAll();
        });
      } else {
        return repairTypes;
      }
    })
    .then(() => {
      return Address.findAll();
    })
    .then((addresses) => {
      if (!addresses || addresses.length == 0) {
        return Address.bulkCreate([
          {
            ulica: "Powstańców Śląskich",
            numer_lokalu: "126",
            kod_pocztowy: "01-466",
            miasto: "Warszawa",
          },
          {
            ulica: "Modlińska",
            numer_lokalu: "36",
            kod_pocztowy: "03-170",
            miasto: "Warszawa",
          },
          {
            ulica: "Połoczyńska",
            numer_lokalu: "119",
            kod_pocztowy: "01-304",
            miasto: "Warszawa",
          },
          {
            ulica: "Białołęcka",
            numer_lokalu: "170",
            kod_pocztowy: "03-253",
            miasto: "Warszawa",
          },
        ]).then(() => {
          return Address.findAll();
        });
      } else {
        return addresses;
      }
    })
    .then(() => {
      return Workshop.findAll();
    })
    .then((workshops) => {
      if (!workshops || workshops.length == 0) {
        return Workshop.bulkCreate([
          {
            nazwa: "Bemowo CarTu",
            telefon: "789212444",
            email: "bemowo@cartu.pl",
            AddressId: 1,
          },
          {
            nazwa: "Białołęka CarTu",
            telefon: "506492622",
            email: "bialoleka@cartu.pl",
            AddressId: 2,
          },
        ]).then(() => {
          return Workshop.findAll();
        });
      } else {
        return workshops;
      }
    })
    .then(() => {
      return RepairOrder.findAll();
    })
    .then((repairOrders) => {
      if (!repairOrders || repairOrders.length == 0) {
        return RepairOrder.bulkCreate([
          {
            status: "WYKONANE",
            opis: "Proszę o wymianę filtrów i olejów",
            CarId: 1,
            WorkshopId: 1,
            RepairTypeId: 3,
          },
          {
            status: "OCZEKUJE",
            opis: "Dziwny dzwięk przy starcie silnika",
            CarId: 2,
            WorkshopId: 2,
            RepairTypeId: 2,
          },
        ]).then(() => {
          return RepairOrder.findAll();
        });
      } else {
        return repairOrders;
      }
    });
};
