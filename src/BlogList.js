// you can destructure the props i.e.:
// const BlogList = ({blogs}) => {} 
// instead of receiving the props we destructured to get the blogs in the props

const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    {/* <button onClick={() => delBlog(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;