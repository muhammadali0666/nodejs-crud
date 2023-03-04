import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const Navigate = useNavigate();
  let userN = useRef();
  const [data, setData] = useState([])  


  const register = (e) => {
    e.preventDefault();

    let { username, email, password, gender } = e.target;
    let new_user = {
      username: userN.current.value,
      email: email.value,
      gender: gender.value,
      password: password.value,
    };

    useEffect(() => {
      fetch("http://localhost:3000/register_users")
        .then((res) => res.json())
        .then((course) => setData(course));
    }, []);

    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      body: JSON.stringify(new_user),
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg));

      
      if(email) {
        window.localStorage.setItem("email", email);
      Navigate("/home");
      }else if (email === email) {
          Navigate("/");
        }

    // const { token } = res;

    // if (token) {
    //   window.localStorage.setItem("token", token);
    //   Navigate("/home");
    // } else if (token === null) {
    //   Navigate("/");
    // }
  };

  return (
    <div className="m-auto w-50">
      <h1 className="mt-5 pt-5">Registration</h1>
      <form onSubmit={(e) => register(e)}>
        <div className="form-group mt-5">
          <label htmlFor="email" className="fw-bold">
            Email address:
          </label>
          <input
            required
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="username" className="fw-bold">
            username:
          </label>
          <input
            required
            type="text"
            ref={userN}
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password" className="fw-bold">
            password:
          </label>
          <input
            required
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            id="username"
          />
        </div>
        <div className="box d-flex my-3">
          <div className="form-group">
            <label htmlFor="jinsi">Male:</label>
            <input
              className="ms-1"
              required
              type="radio"
              name="gender"
              id="jinsi"
              value="male"
            />
          </div>
          <div className="form-group ms-3">
            <label htmlFor="gender">Female:</label>
            <input
              className="ms-1"
              required
              type="radio"
              name="gender"
              id="gender"
              value="female"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Regsiter
        </button>
      </form>
    </div>
  );
};
