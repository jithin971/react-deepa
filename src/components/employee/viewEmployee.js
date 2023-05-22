import axios from "axios"
import { useEffect, useState } from "react"

const ViewEmployee = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            result => {
                let { data } = result
                setPost(data)
            }
        )
    }, [])

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
                            <div>
                                <button>View</button>
                            </div>
                        </tr>
                    )
                })
            }

        </table>
    </div>)
}

export default ViewEmployee