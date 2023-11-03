import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UpdatedBlog from '../components/UpdatedBlog'

function SingleBlog() {

    const { id } = useParams()
    const [blog, setBlog] = useState([])
    const [change, setChange] = useState(false)


    useEffect(() => {
        fetch(`https://crud-react-tql0.onrender.com/blog/${id}`)
        .then(res => res.json())
        .then(data => {
            setBlog(data)
        })
    }, [change])

    

    return (
        <div className='text-light container mx-auto row'>
            <div className='col-md-6'>
                <img src={blog.image} alt="Loading..." className='img-fluid'/>
            </div>

            <div className='col-md-6'>
                <h1 className='text-center mt-4'>{ blog.title }</h1>
                <p>{blog.description}</p>
                {
                    blog.is_achieved === true ? (
                        <button className='btn btn-outline-success btn-sm'>Achieved</button>
                    ) : (
                        <button className='btn btn-outline-danger btn-sm'>Not Achieved</button>
                    )
                }
                <UpdatedBlog blog={blog} setChange={setChange} change={change} />
            </div>

            
            
        </div>
    )
}

export default SingleBlog