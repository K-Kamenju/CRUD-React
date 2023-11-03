import React, { useState } from 'react'
import Swal from 'sweetalert2'

function UpdatedBlog({ blog, change, setChange }) {

    const [formData, setFormData] = useState({
        title: blog.title,
        description: blog.description,
        image: blog.image,
        is_achieved: false
    })

    // console.log(formData)

    function handleSubmit(e) {
        e.preventDefault()
        const forms = {
            title: formData.title,
            description: formData.description,
            image: formData.image,
            is_achieved: formData.is_achieved
        }
        fetch(`http://localhost:4000/blog/${blog.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(forms)
            })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Blog Posted',
                showConfirmButton: false,
                timer: 2500
              })
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        })
        setFormData({
            title: blog.title,
            description: blog.description,
            image: blog.image,
            is_achieved: false
        })
        setChange(!change)
    }

    return (
        <div className='container mt-5 text-light'>

            <div className=''> 
                <h3>Updated Blog</h3>
            </div>
            
            <div className=''> 
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    required 
                    value={formData.title || blog.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    required 
                    value={formData.description || blog.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input 
                    type="url" 
                    className="form-control" 
                    required 
                    value={formData.image || blog.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}/>
                </div>
                <div className="mb-3 form-check">
                    <input 
                    type="checkbox" 
                    className="form-check-input"
                    checked={formData.is_achieved || blog.is_achieved}
                    onChange={(e) => setFormData({...formData, is_achieved: e.target.checked})} />
                    <label className="form-check-label" for="exampleCheck1">Archived</label>
                </div>
                
                <button type="submit" className="btn btn-outline-success">Update</button>
                </form>
            </div>

        </div>
    )
}

export default UpdatedBlog