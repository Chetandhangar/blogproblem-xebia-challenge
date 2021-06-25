import '../Blogs/Blogs.css';

function RenderBlog ({blog}) {
    return(
        <div key={blog.id} className="blog-details-component container-center">
            <h1>{blog.title}</h1>
            <h3>{`Author :  ${blog.authorfirstname} ${" "} ${blog.authorlastname}`}</h3>
            <small>{blog.date}</small>
            <hr  className="container-center"/>
            <p>{blog.description}</p>
        </div>
    )
}

export const BlogDetails = (props) => {
    if(props.blog !== null)
    return(
        <div>
            <RenderBlog blog={props.blog} />
        </div>
    )
    else
     return(
         <div></div>
     )
}

