import { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "Rania",
    email: "RaniaHesham@gmail.com",
    UserName:"raniahesham",
    Password:1234567,
    ConfirmPassword:1234567
  });
  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    passwordError:null,
    UserNameError:null,
    ConfirmPasswordError:null
  });

  const handleChange = (evt) => {
    console.log(evt.target);

    if (evt.target.name == "name") {
      setUser({ ...user, name: evt.target.value });
    } else if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value });
    }
    else if (evt.target.name == "UserName") {
      setUser({ ...user, UserName: evt.target.value });
    }
    else if (evt.target.name == "Password") {
      setUser({ ...user, Password: evt.target.value });
    }
    else if (evt.target.name == "ConfirmPassword") {
      setUser({ ...user, ConfirmPassword: evt.target.value });
    }


    if (evt.target.name == "name") {
      setErrors({
        ...errors,
        nameError:
          evt.target.value.length == 0
            ? "This field is required"
            : null,
      });
    }
    if (evt.target.name == "email") {
                    setErrors({
                      ...errors,
                      emailError:
                        evt.target.value.length == 0
                          ? "This field is required"
                          :evt.target.value.includes('@')&&evt.target.value.includes('.com')
                          ? null
                          :"not email formate"
                    });
                  }
                  if (evt.target.name == "UserName") {
                    setErrors({
                      ...errors,
                      UserNameError:
                        evt.target.value.length == 0
                          ? "This field is required"
                          : evt.target.value.includes(' ')
                          ? "must mot contain space"
                          : null,
                    });
                  }

    if (evt.target.name == "Password") {
                    setErrors({
                      ...errors,
                      passwordError:
                        evt.target.value.length == 0
                          ? "This field is required"
                          :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(evt.target.value)

                          ? null
                          :"un vaild password",
                    });
                  }

                  if (evt.target.name == "ConfirmPassword") {
                    setErrors({
                      ...errors,
                      ConfirmPasswordError:
                        evt.target.value.length == 0
                          ? "This field is required"
                          : evt.target.value == user.Password
                          ? null
                          : "password must match",
                    });
                  }
  };

  const handleSubmit=(e)=>{
  e.preventDefault();
   alert("Done");
  }
  return (
    <>
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${(errors.nameError)?'border-danger':''}`}
          placeholder="Enter your name"
          value={user.name}
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <small className="text-danger">{errors.nameError}</small>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
          value={user.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
    <small className="text-danger">{errors.emailError}</small>
                
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          UserName
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your UserName"
          value={user.UserName}
          name="UserName"
          onChange={(e) => {
            handleChange(e);
          }}
        />
            <small className="text-danger">{errors.UserNameError}</small>

      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your Password"
          value={user.Password}
          name="Password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      <small className="text-danger">{errors.passwordError}</small>

      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          ConfirmPassword
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your Password "
          value={user.ConfirmPassword}
          name="ConfirmPassword"
          onChange={(e) => {
            handleChange(e);
          }}
        />
    <small className="text-danger">{errors.ConfirmPasswordError}</small>

      </div>
      <button type="submit" className="btn btn-success">Register</button>
      </form>
    </>
  );
}
