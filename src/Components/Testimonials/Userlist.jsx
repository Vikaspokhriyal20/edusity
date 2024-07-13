import React from 'react'
import './Testimonial.css'

const Userlist = () => {
    const userList = [
        {
            userId: 1,
            userName: 'Claire Divas',
            userLocation: 'USA',
            userImage: 'https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=YNKLBmo66th0Uugob4qpoaMNEMpA-EhpK89St_hDrBs=',
            userDesc: 'lorem all snt of the main city will be power of the function in all time'
        },

        {
            userId: 2,
            userName: 'Penny Albritton',
            userLocation: 'UK',
            userImage: 'https://media.istockphoto.com/id/1369754198/photo/university-student-in-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=Qv6OQAcDMArANxzUTgJe5Px9psqlH0_dfBkQ5EPCKo0=',
            userDesc: 'lorem all snt of the main city will be power of the function in all time'
        },

        {
            userId: 3,
            userName: 'Emma Megan',
            userLocation: 'USA',
            userImage: 'https://media.istockphoto.com/id/1029801520/photo/happy-female-student-stock-image.webp?b=1&s=170667a&w=0&k=20&c=ME2mSaxuf6Z7ZjdkzcH4EBvyKLrN117eVBSVQXDMfm0=',
            userDesc: 'lorem all snt of the main city will be power of the function in all time'
        },

        {
            userId: 4,
            userName: ' Carla Houston',
            userLocation: 'USA',
            userImage: 'https://media.istockphoto.com/id/2012565290/photo/portrait-of-female-college-student-holding-books-and-looking-at-the-camera-with-a-smile.webp?b=1&s=170667a&w=0&k=20&c=WDsFXNvAdC8TcrT66dHGkrbg2Dn_7C84doCmN_pLlp4=',
            userDesc: 'lorem all snt of the main city will be power of the function in all time'
        },

        {
            userId: 5,
            userName: ' Samantha Smith',
            userLocation: 'USA',
            userImage: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
            userDesc: 'lorem all snt of the main city will be power of the function in all time'
        },

        {
            userId: 6,
            userName: 'Janet Chua',
            userLocation: 'USA',
            userImage: 'https://media.istockphoto.com/id/1329504664/photo/portrait-of-young-women-student-standing-isolated-over-yellow-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=whj135vLjOxVTEpy7DZgDEtSwls5qFmMinCBCmm-Nak=',
            userDesc: 'lorem all snt of the main city will be power of the function in all time'
        },

        {
            userId: 7,
            userName: ' Mira Edorra',
            userLocation: 'USA',
            userImage: 'https://media.istockphoto.com/id/1179018057/photo/one-female-student.webp?b=1&s=170667a&w=0&k=20&c=j0sJhs6M1gPfik-iFs_rRXQCQh_saHkoIO8O6zBH0jo=',
            userDesc: 'lorem all snt of the main city will be power of the function in all time'
        },

        {
            userId: 8,
            userName: 'Tipene Darrow',
            userLocation: 'UK',
            userImage: 'https://media.istockphoto.com/id/1438437093/photo/young-adult-woman-in-studio-shots-making-facial-expressions-and-using-fingers-and-hands.webp?b=1&s=170667a&w=0&k=20&c=s64r95WyPrrg3nEc8X33TqYKIyJiyrj2tu4dRUds_-Y=',
            userDesc: 'lorem all snt of the main city will be power of the function in all time'
        }

    ];

    return (
        <>
            {
                userList.map((user) => {
                    return (
                        <div className="slide" key={user.userId}>
                            <div className="user-info">
                                <img src={user.userImage} alt="img" />
                                <h4>{user.userName}</h4>
                                <span>{user.userLocation}</span>
                                <p>{user.userDesc}</p>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default Userlist
