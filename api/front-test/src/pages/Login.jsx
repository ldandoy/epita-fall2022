import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setAuth } from "../slices/authSlice";
import { login } from "../services/auth";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (form.email === "" || password === "") {
      setMsg("Required field are empty !");
      return;
    }

    const res = await login(form);

    setForm({
      email: "",
      password: "",
    });

    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      dispatch(setAuth(res.data));
      return navigate("/");
    } else {
      setMsg(res.response.data.msg);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1 className='title'>Connect to service</h1>

      {msg && <div className='msg msg-error'>{msg}</div>}

      <div>
        <label htmlFor='email'>Email address</label>
        <input
          id='email'
          type='email'
          name='email'
          value={form.email}
          placeholder='Enter your email address'
          onChange={onChangeHandler}
        />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          name='password'
          value={form.password}
          placeholder='Enter your password'
          onChange={onChangeHandler}
        />
      </div>

      <div>
        <input type='submit' name='send' value='Connect' />
      </div>
    </form>
  );
};

export default Login;
