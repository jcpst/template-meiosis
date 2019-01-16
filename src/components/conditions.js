import { h } from 'preact'
import { PS, S } from 'patchinko/explicit'

function skyOption({ state, actions, value, label }) {
  return (
    <label>
      <input
        type="radio"
        id={value}
        name="sky"
        value={value}
        checked={state.conditions.sky === value}
        onChange={e => actions.changeSky(e.target.value)}
      />
      {label}
    </label>
  )
}

export const conditions = {
  initState: {
    conditions: {
      precipitations: false,
      sky: 'SUNNY'
    }
  },
  actions: update => ({
    togglePrecip() {
      update({ conditions: PS({ precipitations: S(x => !x) }) })
    },
    changeSky(value) {
      update({ conditions: PS({ sky: value }) })
    }
  })
}

export const Conditions = ({ state, actions }) => (
  <div>
    <label>
      <input
        type="checkbox"
        checked={state.conditions.precipitations}
        onChange={e => actions.togglePrecip(e.target.checked)}
      />
      Precipitations
    </label>
    <div>
      {skyOption({
        state,
        actions,
        value: 'SUNNY',
        label: 'Sunny'
      })}
      {skyOption({
        state,
        actions,
        value: 'CLOUDY',
        label: 'Cloudy'
      })}
      {skyOption({
        state,
        actions,
        value: 'MIX',
        label: 'Mix of sun/clouds'
      })}
    </div>
  </div>
)
