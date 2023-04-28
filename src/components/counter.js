import { useState } from "react"

const Counter = () => {
    let [counter, setCounter] = useState(0);
    let [name, setName] = useState("")

    const incrementCounter = () => {

        setCounter(++counter)

    }

    const saveName = (event) => {

        setName(event.target.value)

    }

    return (
        <div>
            counter={counter} <br />

            Name<input type="test" onChange={saveName} /><br />
            {name}<br />

            <button onClick={incrementCounter}>+</button>
        </div>
    )
}
export default Counter