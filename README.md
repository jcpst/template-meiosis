### About

A SPA boilerplate. Uses:

* [flyd](https://github.com/paldepind/flyd) - Observable streams.
* [patchinko](https://github.com/barneycarroll/patchinko) - State updates.
* [preact](https://github.com/hyperapp/hyperapp) - View layer.
* [w3-css](https://www.w3schools.com/w3css/default.asp) - Styling.
* [babel](https://github.com/babel/babel) - ES5 compatibility.
* [webpack](https://github.com/webpack/webpack) - Build configuration.
* [prettier](https://github.com/prettier/prettier) - Formatting.

Features include:

* hot-reloading dev server
* production build with:
    * uglify
    * removal of unused CSS
* auto-formatting
* gh-pages deployment (example: [this template](https://github.com/jcpst/template-meiosis))

### Why

I like small libraries, where reading the source code is pleasant. Compose a few of these together and you can have a powerful foundation with a deep understanding of what the guts are doing.

This is copied from from my [hyperapp template](https://github.com/jcpst/template-hyperapp-1), which is based off  [minimal-react-webpack-babel-setup](https://github.com/rwieruch/minimal-react-webpack-babel-setup) .

### Usage

* `npx degit jcpst/template-meiosis my-new-project`
* `cd my-new-project`
* `npm i`
* `npm start`

Then hit up port 8080 and start hacking away!

Format with: `npm run format`

### Structure

**TODO**: No tests yet. Add what you like to use!

I took inspiration from playing around with Vue and the idea of a [single file components](https://vuejs.org/v2/guide/single-file-components.html). So I have the state, actions and view in the same file. I find it more pleasant to navigate than switching between several buffers.