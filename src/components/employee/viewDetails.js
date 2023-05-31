import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ViewDetails = () => {
    const params = useParams();
    const [ItemDetails, setItemDetails] = useState({});
    const [currentId, setCurrentID] = useState(params.id)

    useEffect(() => {
        console.log(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => {
            console.log(res)
            setItemDetails(res.data)
        })
    }, [])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${currentId}`).then(res => {
            console.log(res)
            setItemDetails(res.data)
        })
    },[currentId])

    const getData = (text) => {
        text === "NEXT" ? setCurrentID(currentId + 1) : setCurrentID(currentId - 1)
    }

    return (
        <>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
                <tr>
                    <td>{ItemDetails.id}</td>
                    <td>{ItemDetails.title}</td>
                    <td>{ItemDetails.body}</td>
                </tr>
            </table>
            <div>
                <Button type="primary" onClick={()=>getData("PREVIOUS")} >Previous</Button> <Button onClick={()=>getData("NEXT")} type="primary" >Next</Button>
            </div>
        </>
    )
}
export default ViewDetails