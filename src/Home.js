//this import is used so that we can change a variable for example and the new value is rendered on the screen for us
import BlogList from './BlogList';
import useFetch from './useFetch';

// the useEffect hook is crucial in keeping track in a change of state and then runs everytime we render again to the screen

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    // const delBlog = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setData(newBlogs)
    // }

    // const [name, setName] = useState('Observer')

    // useEffect(() => {
    //     console.log('use effect ran')
    //     console.log(name)
    // }, [name])
    
    
    
    

    // const handleClick = () => {
    //     setName('Tyler')
    // }

    // const handleAgain = name => {
    //     alert(`Hello ${name}`)
    // }

    return (
        <div className="home">
            {/* <button onClick={handleClick}>Click me!</button> */}
            {/* for functions which take parameters we have to wrap them in an anonymous function */}
            {/* <button onClick={() => handleAgain('Clapton')}>Click me Again</button> */}

            { error && <div className="error">{error}</div> }
            {isLoading && <div className="is-loading">Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Observer')} title='Observer'/> */}

            {/* <button onClick={() => setName('Clapton')}>Change Name</button>
            <p>{name}</p> */}

            
        
        </div>
    );
}
 
export default Home;