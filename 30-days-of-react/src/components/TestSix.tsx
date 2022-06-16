import type { CatList } from '../types'
import '../style/index.less'
import { useFetch } from '../hooks/useFetch'
const TestSix = () => {
  const catList = useFetch<CatList[]>('http://api.thecatapi.com/v1/breeds')
  return (
    <div className="test-six">
        {
            catList.map(item => (
                <div key={item.id} className="test-six-box">
                    <div className="test-six-image">
                        <img src={item.image?.url} alt="暂无图片" />
                    </div>
                    <div className="test-six-text">
                        <h1>{item.name}</h1>
                        <p>{item.origin}</p>
                        <p>temperament:{item.temperament}</p>
                        <p>Life Span:{item.life_span}</p>
                        <p>Weight:{item.weight.metric}</p>
                        <p>Description</p>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default TestSix
