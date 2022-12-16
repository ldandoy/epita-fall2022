import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {register} from '../services/auth';

const Register = () => {
  let navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    email_cfg: "",
    password: "",
    password_cfg: ""
  });
  const [msg, setMsg] = useState(null);

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setForm( { ...form, [name]:value } );
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (form.email === "" || form.email_cfg === "" || password === "" || password_cfg === "") {
      setMsg('Required field are empty !');
      return;
    }

    const res = await register(form);
    
    if (res.status === 200) {
      navigate('/');
    } else {
      setMsg(res.response.data.msg);
      setForm({
        email: "",
        email_cfg: "",
        password: "",
        password_cfg: ""
      });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
        <h1 className='title'>Create your account</h1>

        {msg && <div className='msg msg-error'>{ msg }</div>}

        <div>
            <label htmlFor="email">Email address</label>
            <input 
                id="email" 
                type="email" 
                name="email" 
                value={form.email} 
                placeholder='Enter your email address'
                onChange={onChangeHandler}
            />
        </div>

        <div>
            <label htmlFor="email_cfg">Confirmation</label>
            <input 
                id="email_cfg" 
                type="email" 
                name="email_cfg" 
                value={form.email_cfg} 
                placeholder='Enter your email address'
                onChange={onChangeHandler}
            />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                type="password" 
                name="password" 
                value={form.password} 
                placeholder='Enter your password'
                onChange={onChangeHandler}
            />
        </div>

        <div>
            <label htmlFor="password_cfg">Confirmation</label>
            <input 
                id="password_cfg" 
                type="password" 
                name="password_cfg" 
                value={form.password_cfg} 
                placeholder='Enter your password'
                onChange={onChangeHandler}
            />
        </div>

        <div>
            <input type="submit" name='send' value="Create" />
        </div>
    </form>
  )
}

export default Register
