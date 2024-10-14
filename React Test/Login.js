import React, { useState } from 'react';

function Login() {
  const [data, setData] = useState({
    name: "",
    mail: "",
    password: ""
  });
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const tempError = {};
    if (data.name.trim().length === 0) {
      tempError["name"] = "Name is invalid or required";
    }
    if (data.mail.trim().length === 0) {
      tempError["mail"] = "Email is invalid or required";
    }
    const password = (data.password);
    if (password <= 0 || isNaN(password)) {
      tempError["password"] = "Password is invalid or only number required";
    }
    setError(tempError);
    return tempError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (Object.keys(error).length) {
      return;
    }
    alert("Form Submitted Successfully");
    setError({});
  };

  return (
    <div className="form">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter Name"
            name="name"
          />
          {error.name && <span style={{ color: 'red' }}>{error.name}</span>}
        </div>
        <div>
          <input
            type="email"
            id="mail"
            name="mail"
            value={data.mail}
            onChange={handleChange}
            placeholder="Enter E-mail"
          />
          {error.mail && <span style={{ color: 'red' }}>{error.mail}</span>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
        </div>

        <div className="btn">
          <button type="button">Show Password</button>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
