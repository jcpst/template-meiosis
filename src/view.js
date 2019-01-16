import { h } from 'hyperapp'
import { Button, Container } from './components/style'

export default (state, actions) => (
  <Container>
    <h1>{state.count}</h1>
    <Button action={() => actions.down(1)}>-</Button>
    <Button action={() => actions.up(1)}>+</Button>
    <br />
    <a href="https://github.com/jcpst/template-hyperapp-1/">url for this template</a>
  </Container>
)
