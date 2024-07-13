import React from 'react'
import './Programs.css'

const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src="https://media.istockphoto.com/id/825845796/photo/each-diploma-is-a-lighted-match.webp?b=1&s=170667a&w=0&k=20&c=FIRhVuFMCSN1AG7ydSIahU6XCqSwxkMKy11QaneIw3c=" alt="img" />
                <div className="caption">
                    <i className="fa-solid fa-book-open-reader"></i>
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src="https://media.istockphoto.com/id/953481066/photo/im-a-certified-success.webp?b=1&s=170667a&w=0&k=20&c=oY4tslivLh4IxabPrjGVRas5AYtAtE2pKf-VeyHOg2M=" alt="img" />
                <div className="caption">
                    <i className="fa-solid fa-ribbon"></i>
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="program">
                <img src="https://media.istockphoto.com/id/1349302576/photo/happy-graduate-student-holding-his-diploma-on-graduation-day.webp?b=1&s=170667a&w=0&k=20&c=Rr9c4Evpt3SU3qxVjmUvjYD8JDRomWT_DeKmSg9CuEw=" alt="img" />
                <div className="caption">
                    <i className="fa-solid fa-user-graduate"></i>
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Programs
