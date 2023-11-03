import React, { useEffect, useState } from 'react'
import Blog from './Blog'

function Blogs() {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [onChange, setOnChange] = useState(false)

    useEffect(() => {
        fetch("https://crud-react-tql0.onrender.com/blog")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBlogs(data)
            setLoading(true)
        })
    }, [onChange])

    if(!loading) return <h3>Loading...</h3>

    return (
    <div className='container bg-white text-dark mt-5'>
        <h1 className='p-2'>Blogs</h1>

        {blogs.length < 1 && <p className='.bg-danger.bg-gradient'>Currently No blogs at the moment</p>}
        <div className='container row'>
            {blogs.map(blog => <div className='col-md-3 mb-3 mt-2'><Blog blog={blog} key={blog.id} onChange={onChange} setOnChange={setOnChange} /></div>)}
        </div>
        

    </div>
    )
}

export default Blogs
