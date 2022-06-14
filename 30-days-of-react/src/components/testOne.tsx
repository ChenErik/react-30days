import { hexaColor } from '../utils'
export interface Props {
  name: string
  skills: string[]
  onClick: () => void
}
const TestOne = (props: Props) => {
  return (
    <div className="test-one" style={{ backgroundColor: hexaColor() }}>
        <h1>SUBSCRIBE</h1>
        <h5>Sign up with your email adress t receive news and updates</h5>
        <h6>{props.name}</h6>
        <div className="test-one-inputs">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Email" />
        </div>
        <div className="test-one-button" onClick={props.onClick}>
            Subscribe
        </div>
        <ul>
            {props.skills.map((skill, index) => (
                <li key={index} style={{ color: hexaColor() }}>{skill}</li>
            ))}
        </ul>
    </div>
  )
}
export default TestOne
