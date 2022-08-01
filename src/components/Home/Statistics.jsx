import React from 'react'

export default function Statistics() {
  return (
    <div className="statistics-wrapper">
        <h2>Why Choose Us?</h2>
        <div className="statistics-content">
            <div className="statistics-content-one">
                <p>Data shows that homes are on the market for <span className="text-blue">31 days</span>. Close quicker while making informed decisions through the help of our expert team</p>
                <div className="statistics-content-links">
                    <a href="/about">{`Meet the Team >`}</a>
                    <a href="/explore">{`Explore Now >`}</a>
                </div>
            </div>
            <div className="statistics-content-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhEwfdoP3rxBVYpZkEPW0OMsEqRzg5Wmn0Q&usqp=CAU" alt="" />
            </div>
        </div>
    </div>
  )
}
