import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost/worksetData/')
    console.log(inputs);
  };

  return (
    <>
      <h1>Project Form Submission</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label>Email: </label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <label>Mobile: </label>
        <input type="text" name="mobile" onChange={handleChange} />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Form;
