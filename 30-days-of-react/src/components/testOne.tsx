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
              <li key={index} style={{ color: hexaColor(), listStyle: 'none' }}>{skill}</li>
          ))}
      </ul>
      <input type="text" />
      <input type="number" />
      <input type="range" />

      <input type="email" />
      <input type="password" />
      <input type="tel" />

      <input type="checkbox" />
      <input type="radio" />

      <input type="color" />

      <input type="url" />
      <input type="image" />
      <input type="file" />

      <input type="hidden" />

      <input type="date" />
      <input type="datetime-local" />
      <input type="month" />
      <input type="week" />
      <input type="time" />

      <input type="reset" />
      <input type="search" />
      <input type="submit" />
      <input type="button" />
    </div>
  )
}
export default TestOne
