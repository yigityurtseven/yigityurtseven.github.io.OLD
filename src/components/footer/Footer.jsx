import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-outer-container'>
            <div className='footer-text-container'>
                <h2>want to reach out to say hello, talk about a project or just here to stalk ?</h2><br />
                <h2>i got you</h2>
            </div>
            <div className='footer-links-container'>
                <a href="mailto:y.yurtseven@outlook.com" target='__blank'>email ↗</a>
                <a href="https://www.linkedin.com/in/yigithan-yurtseven/" target='__blank'>linkedin ↗</a>
                <a href="https://twitter.com/yigityurtseveen" target='__blank'>twitter ↗</a>
                <a href="https://www.instagram.com/yigityurtseveen/" target='__blank'>instagram ↗</a>
            </div>
        </div>
    )
}

export default Footer