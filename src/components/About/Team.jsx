/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
/*========================================
        Import Components
========================================*/
import TeamDetails from "./TeamDetails"
import TeamMember from "./TeamMember"

export default function Team() {

    const [team, setTeam] = useState({
        activeMember: 0,
        allMembers: [
            {
                id: 0,
                img: "https://srkheadshotday.com/wp-content/uploads/Kate_Johnson_Headshot_19L6670-1024x683.jpg",
                first_name: "Mirabel",
                last_name: "Johnson",
                role: "Co-founder, CEO",
                joined: "December 2015",
                description: "Mirabel is a futurist who's always been fascinated with the concept of virtual reality. She wanted to take that idea and bring it to real estate.",
            },
            {
                id: 1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iiVTkhEBLmGV-6bHC-2_ffKHQOiZWMg_Ng&usqp=CAU",
                first_name: "Rhode",
                last_name: "Scotts",
                role: "Co-founder, CFO",
                joined: "December 2015",
                description: "Rhodes believes in the power of technological innovation. He loves to brainstorm industries and business strategies to introduce modernization.",
            },
            {
                id: 2,
                img: "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
                first_name: "Jeff",
                last_name: "Dahl",
                role: "Real Estate Agent",
                joined: "March 2016",
                description: "Jeff has been in the real estate industry for 20 years. He enjoys being able to find his clients their dream home by making it a simple process.",
            },
            {
                id: 3,
                role: "",
                joined: "",
                img: "https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=20&m=1089633230&s=612x612&w=0&h=LNxo51TlLc-a8hNjJk5foJC9CI842yor3RvgNosIuKw=",
                first_name: "Maureen",
                last_name: "Mattheson",
                role: "Real Estate Agent",
                joined: "October 2017",
                description: "Maureen started her career in marketing before making the transition to real estate. She's always loved homes and working with people. She set about bringing her marketing skills to the real estate world.",
            },
            {
                id: 4,
                img: "https://t3.ftcdn.net/jpg/02/10/52/66/360_F_210526625_wcxUSGitfvdLr2MCGpHBKJfvHH17KpS7.jpg",
                first_name: "Lauren",
                last_name: "Reddy",
                role: "Real Estate Agent",
                joined: "February 2018",
                description: "Lauren is a third-generation Real Estate Agent. She believes in the best of both world, technology with a human touch. She's continues to find new ways to improve the real estate game to make her clients even happier.",
            },
        ]
    })

    const handleActiveMember = (memberId) => {
        setTeam({...team, activeMember: memberId})
    }
    
    return (
        <div className="team-wrapper">
            <h2>Meet the team</h2>
            <div className="team-members">
                {team.allMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        member={member}
                        className={`team-member ${index === team.activeMember ? "member-active" : ""}`}
                        handleActiveMember={handleActiveMember}
                    />
                ))}
            </div>
            <TeamDetails 
                activeMember={team.allMembers[team.activeMember]}
            />
        </div>
    )
}
