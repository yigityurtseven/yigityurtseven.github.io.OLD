import React from 'react'
import './designcards.css'
const DesignCards = ({ designName = "", designDescription = "", designPhoto = "" }) => {
    return (
        <div className='design-card-outer-container'>
            <div className='design-card-container'>
                <div className='design-text-container'>
                    <div className='design-title'>
                        <h2>{designName}</h2>
                    </div>
                    <div className='design-description'>
                        <p>{designDescription}</p>
                    </div>
                    <div className='design-button'>
                        <a href="#"><button>More</button></a>
                    </div>
                </div>
                <div className='design-photo'>
                    <img src={designPhoto} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DesignCards


        // <div>
        //     <div class="container">
        //         <div class="card">
        //             <div class="image">
        //                 <img href="#" src={designPhoto} alt='' />
        //                 <h2>{designName}</h2>
        //             </div>
        //             <div class="content">
        //                 <h3>This is content</h3>
        //                 <p>DIn publishing and graphic design, Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>