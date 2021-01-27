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
  User.belongsTo(Role);
  Role.hasMany(User);

  User.hasMany(Car);
  Car.belongsTo(User);

  Car.hasMany(RepairOrder);
  RepairOrder.belongsTo(Car);
  RepairOrder.belongsTo(Workshop);
  RepairOrder.belongsTo(RepairType);
  RepairType.hasMany(RepairOrder);

  Workshop.hasMany(RepairOrder);
  Workshop.belongsTo(Address);
  Address.hasMany(Workshop);

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
          { rodzaj: "wymiana klocków hamulcowych", RepairTypeId: 1 },
          { rodzaj: "wymiana rozrządu", RepairTypeId: 2 },
          { rodzaj: "serwis olejowy", RepairTypeId: 3 },
          { rodzaj: "wymiana tarcz", RepairTypeId: 4 },
          { rodzaj: "diagnoza komputerowa", RepairTypeId: 5 },
          { rodzaj: "przegląd okresowy", RepairTypeId: 6 },
          { rodzaj: "wymiana płynów eksploatacyjnych", RepairTypeId: 7 },
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
            telefon: "22 564 23 56",
            email: "bemowo@cartu.pl",
            AddressId: 1,
          },
          {
            nazwa: "Białołęka CarTu",
            telefon: "22 577 32 44",
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
            data_od: "2021-01-14",
            data_do: "2021-01-16",
            koszt_naprawy: 745.4,
            CarId: 1,
            WorkshopId: 1,
            RepairTypeId: 3,
          },
          {
            data_od: "2021-01-10",
            data_do: "2021-01-15",
            koszt_naprawy: 1467.8,
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
