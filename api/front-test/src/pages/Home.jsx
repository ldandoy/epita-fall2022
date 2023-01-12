import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {getMe} from '../services/auth'
import Chucknorris from '../components/Chucknorris'

const Home = () => {
  const {token} = useSelector((state) => state.auth);
  const [name, setName] = useState('')

  useEffect(() => {
    const getData = async () => {
      // console.log(token)
      // const res = await getMe(token);
      // console.log("res", res)
      // setName(res.data.email)
    };

    getData();
  }, []);

  return (
    <div>
      Hello {name}
    </div>
  )
}

export default Home
