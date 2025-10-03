function isEmpty(value) {
  return !value || value.trim().length === 0;
}

function userCredentialsAreValid(email, password) {
  const emailIsValid = email && email.includes("@");
  const passwordIsValid = password && password.trim().length >= 6;

  return emailIsValid && passwordIsValid;
}

function userDetailsAreValid(email, password, name, street, postal, city) {
  return (
    userCredentialsAreValid(email, password) &&
    !isEmpty(name) &&
    !isEmpty(street) &&
    !isEmpty(postal) &&
    !isEmpty(city)
  );
}

function emailIsConfirmed(email, confirmEmail) {
  return email === confirmEmail;
}

module.exports = {
  userDetailsAreValid: userDetailsAreValid,
  emailIsConfirmed: emailIsConfirmed,
};
