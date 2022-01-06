const BlogList = ({ blogs }) => {
    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.lisence} >
            <h2>{ blog.color }</h2>
            <p>Written by { blog.manufacturer } {blog.model}</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;