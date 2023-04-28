const Test = ({ name, age, empList, isEnabled }) => {
    if (isEnabled) {
        return (
            <div>
                name:{name}<br />
                age:{age}<br />
                employees:
                <ul>
                    {
                        empList.map(employee => (
                            <li>{employee.gender === 'M' ? employee.name : 'xxxx'}</li>

                        ))
                    }
                </ul>
            </div>
        )
    }
    else{
        return(<div>Nothing to Display</div>)
    }
}
export default Test