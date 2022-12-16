import { useState } from "react";

const Animals = () => {
    const [animals, setAnimals] = useState(['Dog', 'Lion', 'Bird', 'Fish']);
    const [filter, setFilter] = useState("");

    const onChangeFilterHandler = (event) => {
        setFilter(event.target.value);
    };

    const onChangeAnimalHandler = (event) => {

    };

    return <>
        <h1 className="title">My animals</h1>
        
        <div>
            <input 
                type="test" 
                name="filter" 
                value={filter} 
                placeholder='Filter'
                onChange={onChangeFilterHandler}
            />
        </div>

        <ul className="animals-list">
            { animals
                .filter(animal => animal.includes(filter))
                .map(animal => <li key={`list-${animal}`}>
                    {animal}
                </li> )
            }
        </ul>

        <div>
            <label>Add a animal</label>
            <input 
                type="test" 
                name="animal" 
                value="" 
                placeholder='Name of you animal'
                onChange={onChangeAnimalHandler}
            />
        </div>
    </>
}

export default Animals;