import { useState } from "react"

const Counter = () => {
    let [counter, setCounter] = useState(0);
    let [name, setName] = useState("")
    let [isListEnabled, setListEnabled] = useState(false)
    let [employees,setEmployee]=useState(["jithin"]);
    

    const incrementCounter = () => {

        setCounter(++counter)

    }

    const saveName = (event) => {

        setName(event.target.value)

    }

    const checkboxChanged = (event) => {
        console.log(event.target.checked)
        setListEnabled(event.target.checked)
    }

    const addEmployee=()=>{
        setEmployee([...employees,name])
    }

    return (
        <>
        <div>
            counter={counter} <br />

            Name<input type="test" onChange={saveName} /><br />
            <button onClick={addEmployee}>Add Employee</button><br/>
            Show List <input type="checkbox" onChange={checkboxChanged} />
            {

                isListEnabled ?
                    <ul>
                        {
                            employees.map(res=>(
                                <li>{res}</li>
                            ))
                        }
                       

                    </ul> : <></>
            }
            {name}<br />

            <button onClick={incrementCounter}>+</button>
        </div>
        <div>uy</div>
        </>
    )
}
export default Counter