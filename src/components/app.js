import { h, Component } from 'preact'
import { P } from 'patchinko/explicit'
import { conditions, Conditions } from './conditions'
import { temperature, Temperature } from './temperature'

export const app = {
  initState: P(
    {},
    conditions.initState,
    { air: temperature.initState() },
    { water: temperature.initState() }
  ),
  actions: update =>
    P({}, conditions.actions(update), temperature.actions(update))
}

export class App extends Component {
  componentWillMount() {
    var setState = this.setState.bind(this);
    this.props.states.map(function(state) {
      setState(state);
    });
  }
  render() {
    var state = this.state;
    var { actions } = this.props;
    return (
      <div>
        <Conditions state={state} actions={actions} />
        <Temperature state={state} id="air" actions={actions} />
        <Temperature state={state} id="water" actions={actions} />
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div>
    )
  }
}
