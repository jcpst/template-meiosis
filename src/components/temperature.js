import { h } from 'preact'
import { PS, S } from 'patchinko/explicit'
import { convert, flipUnits } from '../util'

export const temperature = {
  initState: () => ({
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
          value: convert(t.value, flipUnits(t.units)),
          units: flipUnits(t.units)
        }))
      })
    }
  })
}

export const Temperature = ({ state, id, actions }) => (
  <div>
    {state[id].label} Temperature:
    {state[id].value} &deg; {state[id].units}
    <div>
      <button onClick={() => actions.increment(id, 1)}>Increment</button>
      <button onClick={() => actions.increment(id, -1)}>Decrement</button>
    </div>
    <div>
      <button onClick={() => actions.changeUnits(id)}>Change Units</button>
    </div>
  </div>
)
