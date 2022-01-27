import axios from "axios";
import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    fullName: "",
    username: "",
    email: "",
    discordId: "",
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
    axios.post("http://localhost:4000/user/api/register", values).then( res => {
      console.log(res.data)
        if (res.data.error) {
            setValues({
              fullName: "",
              username: "",
              email: "",
              discordId: "",
              password: "",
              password2: "",
            })
            setErrors(res.data.error)
        }  
    })
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
