import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


function Blog({blog, onChange, setOnChange}) {


    function deleteBtn() {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://crud-react-tql0.onrender.com/blog/${blog.id}`, {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire (
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                setOnChange(!onChange)
            })
          }
        })
        
    }

    return (
    <div className='card p-1'>
        <img src={blog.image} alt="Loading..." className='img-fluid'/>   
        <p className="text-nowrap text-truncate overflow-hidden">{blog.title}</p>
        <div className='d-flex justify-content-between px-2'>
            <Link to={`/blog/${blog.id}`} className="btn btn-outline-primary mb-3 btn-sm">
                <h5 className="d-inline"> Read </h5>
            </Link>

            <button type="button" className="btn btn-outline-danger mb-3 btn-sm" onClick={() => deleteBtn()}>X</button>
        </div>

    </div>
    )
}

export default Blog
