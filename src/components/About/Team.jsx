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
                first_name: "Kate",
                last_name: "Johnson",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Gravida neque convallis a cras semper auctor neque vitae tempus. Aliquet risus feugiat in ante.",
            },
            {
                id: 1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iiVTkhEBLmGV-6bHC-2_ffKHQOiZWMg_Ng&usqp=CAU",
                first_name: "Dis",
                last_name: "Guy",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci. Dictum at tempor commodo ullamcorper. Donec ac odio tempor orci dapibus ultrices in iaculis. Sed cras ornare arcu dui vivamus arcu felis bibendum.",
            },
            {
                id: 2,
                img: "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
                first_name: "Another",
                last_name: "otherGuy",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit egestas dui id ornare arcu. Quam adipiscing vitae proin sagittis nisl rhoncus. Donec enim diam vulputate ut pharetra sit amet. Purus non enim praesent elementum facilisis.",
            },
            {
                id: 3,
                img: "https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=20&m=1089633230&s=612x612&w=0&h=LNxo51TlLc-a8hNjJk5foJC9CI842yor3RvgNosIuKw=",
                first_name: "This",
                last_name: "Woman",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Blandit aliquam etiam erat velit scelerisque in. Augue lacus viverra vitae congue eu consequat ac felis donec. Elementum nibh tellus molestie nunc.",
            },
            {
                id: 4,
                img: "https://t3.ftcdn.net/jpg/02/10/52/66/360_F_210526625_wcxUSGitfvdLr2MCGpHBKJfvHH17KpS7.jpg",
                first_name: "That",
                last_name: "otherwoman",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet dictum sit amet justo. Sodales ut eu sem integer vitae justo eget magna fermentum. Adipiscing at in tellus integer feugiat scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor.",
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
