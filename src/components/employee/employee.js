import { Link, Outlet } from "react-router-dom"

const Employee = () => {
    return (<div style={{ display: 'flex' }}>

        <div style={{ marginRight: '20px' }}>
            <ul>
                <li>
                <Link to="/employee/create">Create Employee</Link>
                </li>
                <li>
                <Link to="/employee/display">View Employee</Link>
                </li>
            </ul>
        </div>
        <div>
            <Outlet/>
        </div>

    </div>)
}

export default Employee