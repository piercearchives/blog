import api from '../../services/api';
import Post from '../../components/Post';
import { useEffect, useState } from 'react';

const Main = () => {

const [post, setPost] = useState([]);

useEffect(() => {
  api.get('/posts')
    .then((response) => {
      setPost(response.data)
      console.log(response)
    })
}, [])



return (
  <>
  <section className='container'>
   <h2>Articles</h2>
  <div className='mt-5 container-posts'>
    {
      post.map(post => {
        return(
          
          <Post
          key={post.id}
          subtitle={post.category}
          title={post.title}
          author={post.author}
          date={post.date}
          >
            {post.resume}
          </Post>
        )
      })
    }
  </div>
  </section>
  </>
)
}

export default Main;