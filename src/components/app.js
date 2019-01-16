import { h, Component } from 'preact'
import { P } from 'patchinko/explicit'
import { Nav } from './style/nav'
import { Debug } from './style/debug'
import { conditions, Conditions } from './conditions'
import { temperature, Temperature } from './temperature'

export const app = {
  initState: P(
    {},
    conditions.initState,
    { air: temperature.initState('air') },
    { water: temperature.initState('water') }
  ),
  actions: update =>
    P({}, conditions.actions(update), temperature.actions(update))
}

export class App extends Component {
  componentWillMount() {
    var setState = this.setState.bind(this)
    this.props.states.map(function(state) {
      setState(state)
    })
  }
  render() {
    var state = this.state
    var { actions } = this.props
    return (
      <div>
        <Nav />
        <div className="w3-container">
          <Conditions state={state} actions={actions} />
          <div className="w3-row">
            <Temperature state={state} id="air" actions={actions} />
            <Temperature state={state} id="water" actions={actions} />
          </div>
          <br />
          <Debug state={state} />
        </div>
      </div>
    )
  }
}
