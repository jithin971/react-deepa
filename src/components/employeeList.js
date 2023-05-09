import { useState } from "react"

const EmployeeList = () => {
    const [empList, setEmpList] = useState([])
    const [formData, setFormData] = useState({ employeeName: '', employeeAge: '' })

    const setData = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const saveEmployee=()=>{
        setEmpList([...empList,formData])
    }

    return (
        <>
Employe
            <div>
                Name:<input onChange={setData} name="employeeName" /> {JSON.stringify(formData)}<br />
                age:<input onChange={(event)=>setData(event)} name="employeeAge" />
                <button onClick={(event)=>saveEmployee(event)}>SaveData</button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    {empList.map(employee => (
                        <tr>
                            <td>{employee.employeeName}</td>
                            <td>{employee.employeeAge}</td>
                        </tr>
                    ))}
              
                </table>
            </div>
        </>
    )
}

export default EmployeeList