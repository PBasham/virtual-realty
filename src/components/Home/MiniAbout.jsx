import React from 'react'

export default function MiniAbout() {
    return (
        <div className="miniabout-wrapper">
            <h1><span className="text-blue">V</span>irtual<span className="text-blue">R</span>ealty</h1>
            <div className="miniabout-content">
                <div className="miniabout-content-one">
                    <h3 className="text-blue">Make your next move in less steps...</h3>
                    <p>Find your next move all in the comfort of your home so that ...</p>
                </div>
                <div className="miniabout-content-two">
                    <img src="https://cdn.dribbble.com/users/152834/screenshots/2200351/bpd-steps.gif" alt="" />
                    <p>Your next destination is your new home</p>
                </div>
            </div>
        </div>
    )
}
