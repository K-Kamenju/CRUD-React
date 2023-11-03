import React from 'react'


export default function Landingpage() {
  return (
    <div className="row align-items-start">

        <div className="col">
            <img src="https://media.licdn.com/dms/image/C5603AQG_qLw3-PX9QQ/profile-displayphoto-shrink_800_800/0/1630082390508?e=2147483647&v=beta&t=j0mg16gYGAv7fpFOAYQW3Kdt5dbonuTQoR-BmEUOPE0" className="img-fluid" alt="Me"/>
        </div>

        <div className="col">
            <h1 className='p-3 mb-2 mx-5 bg-dark text-white fs-2'> Hello </h1>

            <div className='mx-5 bg-secondary'>
                <p className='p-3 mb-2 bg-danger text-white fs-5'>Happy</p>
            </div>

            <div className='mx-5 bg-success'>
                <p className='p-3 mb-2 bg-success text-white fs-5'>Madaraka Day</p>
            </div>

            <button type="button" className="btn btn-outline-success mx-5
            mt-5">Click to Join SDF-FT06AP2</button>

            <div className='mx-5 mt-5 bg-success'>
                <p className='p-3 mb-2 bg-success text-white fs-5'>Madaraka Day</p>
            </div>
        </div>

    </div>
  )
}
