import React from 'react'
import Navbar from '../components/Navbar'
function ShowEvent({message,}) {
    return (

        <div className="w-full h-screen">
            <Navbar />
            <div className="w-full">
                <div className="w-full p-2 ">
                    <img src=" https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        alt="cat"
                        className="h-48  object-cover w-full object-center shadow rounded" />
                    
                    <h1 className="relative w-1/2 m-auto rounded p-4 text-center bottom-8 bg-white text-4xl font-bold shadow" >Lorem Ipsum</h1>    
            </div>
            </div>
        </div>
    )
}

export default ShowEvent
