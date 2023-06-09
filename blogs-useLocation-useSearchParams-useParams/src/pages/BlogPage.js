import React, { useContext, useEffect, useState } from 'react'
import { useLocation,NavLink, useParams } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import { AppContext } from '../context/AppContext';

const BlogPage = () => {
  
  const appContext = useContext(AppContext);

  const params = useParams();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const fetchBlog = async (blogId)=>{
    appContext.setLoading(true);
    const res = await fetch(`${baseUrl}?blogId=${blogId}`);
    const data = await res.json();
    console.log(data);
    setPost(data.blog);
    setRelatedPosts(data.relatedBlogs);
    appContext.setLoading(false);
  }

  useEffect(()=>{
    fetchBlog(params.blogId);
    console.log(post);
    console.log(relatedPosts);
  },[]);

  return (
    <div className='w-[70%] flex-col justify-center items-center'>
      <div className="flex-col my-3 gap-6">
                <p className='text-lg font-bold'>{post.title}</p>
                <p>By <span className='italic'>{post.author}</span> on <span className='font-semibold'>{post.category}</span></p>
                <p className='text-sm font-semibold'>Posted On {post.date}</p>
                <p className='text-md'>{post.content}</p>

                <div className='flex text-blue-700 gap-3 mt-6'>
                  {
                    post.tags.map((tag, index)=>{
                      return (
                        <p><NavLink to={`/tags/${tag}`}>#{tag}</NavLink></p>
                      )
                    })
                  }
                </div>
        </div>

        <div className='flex-col my-3 gap-6'>
            {
              relatedPosts.map((post, index)=>{
                return (
                <div key={index} className="flex-col my-3 gap-6">
                <p className='text-lg font-bold'><NavLink to={`/blogs/${post.id}`}>{post.title}</NavLink></p>
                <p>By <span className='italic'>{post.author}</span> on <span className='font-semibold'>{post.category}</span></p>
                <p className='text-sm font-semibold'>Posted On {post.date}</p>
                <p className='text-md'>{post.content}</p>

                <div className='flex text-blue-700 gap-3 mt-6'>
                  {
                    post.tags.map((tag, index)=>{
                      return (
                        <p key={index}><NavLink to={`/tags/${tag}`}>#{tag}</NavLink></p>
                      )
                    })
                  }
                </div>
              </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default BlogPage