export default function validateInfo(values) {
  let errors = {};

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
}
