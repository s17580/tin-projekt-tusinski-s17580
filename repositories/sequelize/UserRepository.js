exports.findByEmail = (email) => {
  return Uzytkownik.findOne({
    where: { email: email },
  });
};
