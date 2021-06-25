import { useContext, createContext,useState} from 'react';
import { BLOGS } from '../shared/blogs'

const BlogsContext = createContext();


export function BlogsProvider({children}){
const [blogs , setBlogs] = useState(BLOGS)

    return(
        <BlogsContext.Provider value={{blogs, setBlogs}}>
            {children}
        </BlogsContext.Provider>
    )
}

export function useBlogs(){
    return useContext(BlogsContext)
}