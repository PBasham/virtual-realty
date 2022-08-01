import React from 'react'

export default function TeamDetails({activeMember}) {
  return (
    <div className="team-details">
        <div className="team-detail-img">
            <img src={activeMember.img} alt="" />
        </div>
        <div className="team-detail-details">
            <h2>{`${activeMember.first_name} ${activeMember.last_name}`}</h2>
            <h2>Joined Month Year</h2>
            <p>{activeMember.description}</p>
        </div>
    </div>
  )
}
