import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const ViewEmployee = () => {
    const [post, setPost] = useState([])
    const navigate=useNavigate()

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            result => {
                let { data } = result
                setPost(data)
            }
        )
    }, [])

    const viewDetails = (id) => {
        console.log(id)
        navigate(`${id}`)
    }

    return (<div>
        <table>
            <tr>
                <th>
                    id
                </th>
                <th>
                    Title
                </th>
            </tr>
            {
                post.map(res => {
                    return (
                        <tr key={res.id}>
                            <td>
                                {res.id}
                            </td>
                            <td>
                                {res.title}
                            </td>
                            <td>
                                <button onClick={() => viewDetails(res.id)}>View</button>
                            </td>
                        </tr>
                    )
                })
            }

        </table>
    </div>)
}

export default ViewEmployee