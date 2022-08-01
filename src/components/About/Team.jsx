/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import TeamMember from "./TeamMember"

export default function Team() {

    const [team, setTeam] = useState({
        activeMember: 0,
        allMembers: [
            {
                id: 0,
                img: "https://srkheadshotday.com/wp-content/uploads/Kate_Johnson_Headshot_19L6670-1024x683.jpg",
                first_name: "Kate",
                last_name: "Johnson",
                descripton: "",
            },
            {
                id: 1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iiVTkhEBLmGV-6bHC-2_ffKHQOiZWMg_Ng&usqp=CAU",
                first_name: "Dis",
                last_name: "Guy",
                descripton: "",
            },
            {
                id: 2,
                img: "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
                first_name: "Another",
                last_name: "otherGuy",
                descripton: "",
            },
            {
                id: 3,
                img: "https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=20&m=1089633230&s=612x612&w=0&h=LNxo51TlLc-a8hNjJk5foJC9CI842yor3RvgNosIuKw=",
                first_name: "This",
                last_name: "Woman",
                descripton: "",
            },
            {
                id: 4,
                img: "https://t3.ftcdn.net/jpg/02/10/52/66/360_F_210526625_wcxUSGitfvdLr2MCGpHBKJfvHH17KpS7.jpg",
                first_name: "That",
                last_name: "otherwoman",
                descripton: "",
            },
        ]
    })

    return (
        <div className="team-wrapper">
            <h2>Meet the team</h2>
            <div className="team-members">
                {team.allMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        memberImg={member.img}
                        className={`team-member ${index === team.activeMember ? "member-active" : ""}`}
                    />
                ))}
            </div>
        </div>
    )
}
