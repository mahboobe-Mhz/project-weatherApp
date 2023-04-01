import {Container} from '@/layout'
import {ElementGenerator} from '@/library'
import {Header, Main} from '@/components'

const App = () => {
  return ElementGenerator({
    element: 'div',
    child: [Container(Header()), Main()]
  })
}

export default App
