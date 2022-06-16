import { Link, Route, Routes } from 'react-router-dom'
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}
function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don’t you
          think?
        </p>
      </main>
      <nav>
        <Link to="/asd">Asd</Link>
      </nav>
    </>
  )
}
function NotFound() {
  return (
    <>
      <h2>page not found</h2>
      <Link to="/">Home</Link>
    </>
  )
}
const TestFive = () => {
  return (
    <div className="test-five">
      <h1 style={{ textAlign: 'center' }}>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default TestFive
