import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import PostDetail from './PostDetail';

export default function Posts() {
    const [posts, setPosts] = React.useState([])
const {id} = useParams()

const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await resp.json()
    setPosts(json)
}


    React.useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div>
        <Switch>
          <Route path="/posts/:id">
            <PostDetail/>
          </Route>

          <Route >
            <Redirect to="/posts"/>
          </Route>
        
        </Switch> 


            <ul>
                
                {posts.map(el => <Link to={`/posts/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}
                            
            </ul>
        </div>
    )
}
