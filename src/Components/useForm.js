import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    email: "",
    discord: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
