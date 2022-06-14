const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]
interface SkillsProps {
  skills: (string | number)[][]
}
// Skill Component
const Skill = ({ skill: [tech, level] }: { skill: SkillsProps['skills'][0] }) => (
    <li>
      {tech} {level}
    </li>
)

// Skills Component
const Skills = ({ skills }: SkillsProps) => {
  const skillsList = skills.map(skill => <Skill key={skill[0]} skill={skill} />)
  return <ul>{skillsList}</ul>
}

const MapArrary = () => {
  return (
      <div className="container">
        <div>
          <h1>Skills Level</h1>
          <Skills skills={skills} />
        </div>
      </div>
  )
}
export default MapArrary
