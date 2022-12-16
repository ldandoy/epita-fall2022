import {useEffect, useState} from 'react';

import {getRandomFact} from '../services/chucknorris';

const Chucknorris = () => {
    const [fact, setFact] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setFact(await getRandomFact());
      }

      fetchData();
    }, []);

  return (
    <div className='fact'>
      { fact ? fact.value : "No fact !" }
    </div>
  )
};

export default Chucknorris;
