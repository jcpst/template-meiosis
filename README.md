### About

A SPA boilerplate. Uses:

* [hyperapp](https://github.com/hyperapp/hyperapp) - For DOM manipulation and application state.
* [w3-css](https://www.w3schools.com/w3css/default.asp) - For styling
* [babel](https://github.com/babel/babel) - For ES5 compatibility
* [webpack](https://github.com/webpack/webpack) - For build configuration
* [prettier](https://github.com/prettier/prettier) - For linting

Features include:

* hot-reloading dev server
* production build with:
    * uglify
    * removal of unused CSS
* auto-formatting
* gh-pages deployment (example: [this template](https://jcpst.github.io/template-hyperapp-1/))

### Why

I like no-nonsense UI libraries that are useful with as little as dropping a script tag in an HTML file. I like 'em even more when they are small. Hyperapp is right up my alley, and I think it's a ton of fun.

I chose w3-css for this because it's feature-packed but not too heavy, simple to use, and looks clean. I want enough in a CSS lib that I can _almost_ get away with just tossing in class names.

Sometimes I want to start hacking right away. After a few too many ~500 LOC html files with bloated script tags, I took inspiration from [minimal-react-webpack-babel-setup](https://github.com/rwieruch/minimal-react-webpack-babel-setup) and made a build, with some tweaks.

### Usage

* `npx degit jcpst/template-hyperapp-1 my-new-project`
* `cd my-new-project`
* `npm i`
* `npm start`

Then hit up port 8080 and start hacking away!

Format with: `npm run format`

### Webstorm Setup

All of the following happens in the settings window.

* Go to _Languages & Frameworks -> JavaScript_
* Set **JavaScript language version** to **React JSX**
* Go to _Editor -> Inspections_...
    * Go to _JavaScript -> General -> Missing React import with JSX_.
    * Change the **Namespace** value from **React** to **h**
    * Go to _HTML -> Unknown HTML tag attribute_
    * Check **Custom HTML tag attributes**
    * add `class,onclick,oncreate,onupdate,onremove,ondestroy`

