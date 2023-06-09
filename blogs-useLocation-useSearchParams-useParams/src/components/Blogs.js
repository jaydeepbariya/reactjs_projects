import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';

const Blogs = () => {

  const appContext = useContext(AppContext);

  useEffect(()=>{
    appContext.fetchBlogPosts();
  },[]);

  return (
    <div  className='flex justify-center items-center my-auto'>
          {
      (appContext.loading) 
      ?
      <div className='spinner my-[300px]'></div>
      :
      <div className='w-[70%] mx-auto mt-5'>
        {
          appContext.posts.map((post, index)=>{
            return (
              <div key={index} className="flex-col my-3 gap-6">
                {/* <p className='text-lg font-bold'><NavLink to={`/blogs/${post.id}`}>{post.title}</NavLink></p> */}
                <p className='text-lg font-bold'>{post.title}</p>
                <p>By <span className='italic'>{post.author}</span> on <span className='font-semibold'><NavLink to={`/categories/${post.category}`}>{post.category}</NavLink></span></p>
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
    }
    </div>

  )
}

export default Blogs