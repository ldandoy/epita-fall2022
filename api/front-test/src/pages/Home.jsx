import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {getMe} from '../services/auth'
import Chucknorris from '../components/Chucknorris'

const Home = () => {
  const {user, token} = useSelector((state) => state.auth);
  const [name, setName] = useState('')

  useEffect(() => {
    console.log("userEffect")
    const getData = async () => {
      console.log(user, token)
      if (user) {
        const res = await getMe(token)
        setName(res.data.email)
      }
    }

    getData()
  }, [user])

  return (<>
    <h1 className="title">
      Hello {name}
    </h1>

    <Chucknorris />
  </>)
}

export default Home
