import Header from './components/Header';
import Blogs from './components/Blogs';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';
import Pagination from './components/Pagination';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import Home from './pages/Home';

export default function App() {

  const appContext = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get('page') ?? 1;

    if(location.pathname.includes('tags')){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      appContext.fetchBlogPosts(Number(page), tag);
    }

    if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
      appContext.fetchBlogPosts(Number(page), null, category);
    }

    appContext.fetchBlogPosts(Number(page),null, null);

  },[location.pathname, location.search]);

  return <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/blogs/:blogId' element={<BlogPage />}/>
      <Route path='/categories/:category' element={<CategoryPage />}/>
      <Route path='/tags/:tag' element={<TagPage />}/>
    </Routes>
  </div>;
}
