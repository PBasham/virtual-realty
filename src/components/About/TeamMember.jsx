export default function TeamMember({member, className, handleActiveMember}) {
  return (
    <div className={className} onClick={() => {handleActiveMember(member.id)}}>
        <img src={member.img} alt="" />
    </div>
  )
}
