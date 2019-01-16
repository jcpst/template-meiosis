import { h } from 'preact'
import { PS, S } from 'patchinko/explicit'
import { convert, flipUnits } from '../util'

function colorSelector(id) {
  switch (id) {
    case 'air':
      return 'light-blue'
    case 'water':
      return 'blue'
    default:
      return 'light-grey'
  }
}

export const temperature = {
  initState: label => ({
    label,
    value: 22,
    units: 'C'
  }),
  actions: update => ({
    increment(id, amount) {
      update({
        [id]: PS({
          value: S(x => x + amount)
        })
      })
    },
    changeUnits(id) {
      update({
        [id]: S(t => ({
          label: t.label,
          value: convert(t.value, flipUnits(t.units)),
          units: flipUnits(t.units)
        }))
      })
    }
  })
}

export const Temperature = ({ state, id, actions }) => (
  <div className="w3-half w3-container">
  <div className="w3-card-4">
    <header className="w3-center w3-grey">
      <h3>{state[id].label}</h3>
    </header>
    <div className="w3-center w3-large">
    {state[id].value} &deg; {state[id].units}
    </div>
    <div className="w3-bar">
      <button className={`w3-button w3-${colorSelector(id)}`} onClick={() => actions.increment(id, 1)}>+</button>
      <button className={`w3-button w3-${colorSelector(id)}`} onClick={() => actions.increment(id, -1)}>-</button>
      <button className={`w3-button w3-${colorSelector(id)} w3-right`} onClick={() => actions.changeUnits(id)}>Convert</button>
    </div>
  </div>
  </div>
)
