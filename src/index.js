import { h, render } from 'preact'
import { scan, stream } from 'flyd'
import { P } from 'patchinko/explicit'
import { app, App } from './components/app'

const update = stream()
const states = scan(P, app.initState, update)
const actions = app.actions(update)

render(
  <App states={states} actions={actions} />,
  document.body
)
