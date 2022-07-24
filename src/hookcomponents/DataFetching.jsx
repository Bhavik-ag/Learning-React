import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost] = useState({});
    const [id,setId] = useState(1);
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[idFromButtonClick])

    const handleClick = () =>{
        setIdFromButtonClick(id);
    }

    return (
        <div>
            <input type="text" onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <ul>
                {
                    post.title
                }
            </ul>
        </div>
    )
}

export default DataFetching