const Animals = () => {
    let animals = ['Dog', 'Lion', 'Bird', 'Fish'];

    return <ul>
        { animals.map(animal => <li>
            {animal}
        </li> ) }
    </ul>
}

export default Animals;