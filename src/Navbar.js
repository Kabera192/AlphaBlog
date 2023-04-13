const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Alpha Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/createblog" style={{
                    color: 'white',
                    backgroundColor: '#AF132E',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;