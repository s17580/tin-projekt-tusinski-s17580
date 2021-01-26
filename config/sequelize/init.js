const sequelize = require("./sequelize");

const Workshop = require("../../model/sequelize/Workshop");
const User = require("../../model/sequelize/User");
const Car = require("../../model/sequelize/Car");
const RepairOrder = require("../../model/sequelize/RepairOrder");
const RepairType = require("../../model/sequelize/RepairType");
const Address = require("../../model/sequelize/Address");
const WorkshopAddress = require("../../model/sequelize/WorkshopAddress");
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
  Workshop.hasMany(WorkshopAddress);
  WorkshopAddress.belongsTo(Workshop);
  WorkshopAddress.belongsTo(Address);
  Address.hasMany(WorkshopAddress);

  return sequelize
    .sync({ force: true })
    .then(() => {
      return User.findAll();
    })
    .then((users) => {
      if (!users || users.length == 0) {
        return User.bulkCreate([
          { email: "test@test.com", password: "test123" },
          { email: "karol@test.com", password: "test123" },
          { email: "gosia@test.com", password: "test123" },
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
          },
          {
            data_od: "2021-01-10",
            data_do: "2021-01-15",
            koszt_naprawy: 1467.8,
            CarId: 2,
          },
        ]).then(() => {
          return RepairOrder.findAll();
        });
      } else {
        return repairOrders;
      }
    })
    .then(() => {
      return Workshop.findAll();
    })
    .then((workshops) => {
      if (!workshops || workshops.length == 0) {
        return Warsztat.bulkCreate([
          {
            nazwa_warsztat: "Bemowo CarTu",
            telefon: "22 564 23 56",
            email: "bemowo@cartu.pl",
          },
          {
            nazwa_warsztat: "Białołęka CarTu",
            telefon: "22 577 32 44",
            email: "bialoleka@cartu.pl",
          },
        ]).then(() => {
          return Workshop.findAll();
        });
      } else {
        return workshops;
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
    .then((users) => {
      allUsers = users;
      return Rola.findAll();
    })
    .then((roles) => {
      if (!roles || roles.length == 0) {
        return Rola.bulkCreate([
          { rola: "administrator", RolaId: 1 },
          { rola: "użytkownik", RolaId: 2 },
        ]).then(() => {
          return Rola.findAll();
        });
      } else {
        return roles;
      }
    });
};
