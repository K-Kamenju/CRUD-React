import React, { useState } from 'react'
import Swal from 'sweetalert2'

function AddBlog() {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        is_achieved: false
    })

    // console.log(formData)

    function handleSubmit(e) {
        e.preventDefault()
        const forms = {
            title: formData.title,
            description: formData.description,
            image: formData.image,
            is_achieved: false
        }
        fetch("https://crud-react-tql0.onrender.com/blog", {
            method: 'POST',
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
            title: '',
            description: '',
            image: '',
            is_achieved: false
        })
    }

    return (
        <div className='container row mt-5 text-light'>

            <div className='col-md-6'> 
                <h1>Add Blog</h1>
            </div>
            
            <div className='col-md-6'> 
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    required 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    required 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input 
                    type="url" 
                    className="form-control" 
                    required 
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}/>
                </div>
                
                <button type="submit" className="btn btn-outline-success">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddBlog