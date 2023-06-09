import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams,NavLink } from 'react-router-dom'
import { baseUrl } from '../baseUrl'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const CategoryPage = () => {

  const navigate = useNavigate();

  const params = useParams();

  const [posts, setPosts] = useState([]);

  const fetchDataByCategory = async (category)=>{
    const res = await fetch(`${baseUrl}?category=${category}`);
    const data = await res.json();
    setPosts(data.posts);
  }

  useEffect(()=>{
    fetchDataByCategory(params.category);
  },[]);

  return (
    <div className='w-[100vw] h-[100vh]'>
      <Header />

      <div className='flex justify-center items-center gap-5 my-5'>
        <button onClick={()=> navigate(-1)} className="bg-slate-600 text-white py-2 px-4">Back</button>

        <h2>Blogs on <span className='font-bold'>{params.category}</span></h2>
      </div>

      <div className='w-[70%] mx-auto mt-5 mb-4'>
        {
          posts.map((post, index)=>{
            return (
              <div key={index} className="flex-col my-3 gap-6">
                <p className='text-lg font-bold'><NavLink to={`/blogs/${post.id}`}>{post.title}</NavLink></p>
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
    </div>
  )
}

export default CategoryPage