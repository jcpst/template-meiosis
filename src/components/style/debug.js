import { h } from 'preact'

export const Debug = props => (
  <details className="w3-container">
    <summary className="w3-button w3-grey">Toggle State View</summary>
    <pre className="w3-black">{JSON.stringify(props.state, null, 4)}</pre>
  </details>
)
