export const App = ({ name, age }) => {
    return <div>
        <h1>Hello {name} !</h1>
        {age > 12 ? "I go to college" : "I wont go to college" }
    </div>
}

