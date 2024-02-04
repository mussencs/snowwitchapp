import React from 'react'
import LoadingSpin from "react-loading-spin";
import Typewriter from 'typewriter-effect';



const Loading = () => {

    return (
        <div className='section-div-col'>
            <div className='section-div-row'>
                <LoadingSpin primaryColor='#DC7BD0'/>
            </div>
            <div className='tile-font tile-dvv-col-center'>
                <Typewriter
                    options={{
                        strings: ['LOADING...'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
        
    )
}

export default Loading