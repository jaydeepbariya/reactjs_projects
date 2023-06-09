import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl';

//Creating Context
export const AppContext = createContext();

export function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    //setting data

    const fetchBlogPosts = async (page = 1, tag=null, category=null) => {

        let url = `${baseUrl}?page=${page}`;

        if(tag!=null){
            url += `&tag=${tag}`;
        }

        if(category != null){
            url += `&category=${category}`;
        }

        setLoading(true);
        
        try{
            const response = await fetch(url);
            const data = await response.json();

            setPosts(data.posts);
            setPage(data.page);
            setTotalPage(data.totalPages);

        }
        catch(error){
            console.log("Error in fetching posts data");
            
            setPosts([]);
            setPage(1);
            setTotalPage(null);
        }
        setLoading(false);
    }

    const handlePageChange = (page) =>{
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        
        fetchBlogPosts,
        handlePageChange
    };

    //Providing Context
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}