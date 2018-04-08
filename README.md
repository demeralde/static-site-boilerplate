# static-site-boilerplate

A simple yet featureful boilerplate for static website development.

## Features

* [live-server](http://tapiov.net/live-server/) - dev server with live reloading
for rapid development
* [Bootstrap](https://getbootstrap.com/) - component library for rapid front-end
development
* [Sass](https://sass-lang.com/) - because vanilla CSS sucks
* [Gulp](https://gulpjs.com/) - automation for repetitive tasks (e.g Sass
compilation, minification etc)
* [nunjucks](https://mozilla.github.io/nunjucks/) - very nice templating language
to replace vanilla HTML. Enables imports so you DRY
* [Babel](https://babeljs.io/) - so you can write the latest JavaScript
* [autoprefixer](https://github.com/postcss/autoprefixer) - automatic CSS vendor
prefixes because they're a nuisance and no one remembers them
* Linting to enforce code quality with [ESLint](https://eslint.org/) and
[stylelint](https://stylelint.io/)
* CSS minification with Sass, JS minification with [UglifyJS](https://github.com/mishoo/UglifyJS)
* Sourcemaps to make debugging JS and SCSS easier

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development purposes.

See 'Deployment' for notes on how to deploy the project on a live system.

### Prerequisites

You'll need [npm](https://www.npmjs.com/get-npm) to install the dependencies for
the project.

### Installing

Install the dependencies:

```
npm i -D
```

### Running the site

To build the assets and watch for changes as you edit them during development,
you'll need to run Gulp:

```
npm run watch
```

If you want to use the preconfigured dev server, use:

```
npm run dev-server
```

The output will include a link to view the site. Open it in your browser and
you're set.

The dev server is configured for live reloading, so any changes you make will
automatically refresh the page. For this to work ensure both scripts are running.

Also note that `npm run watch` may fail if Gulp encounters any errors during
development, so ensure you restart the process if necessary.

### Linting

Linting is configured for SCSS and JS. If any errors are found during the build
process, it'll fail.

You can manually lint SCSS using `npm run lint-scss`; JS using `npm run lint-js`;
or both using `npm run lint`.

You may also configure your editor to lint in real-time, but that's outside the
scope of this documentation.

## Deployment

To deploy the site you'll need to build the assets into something a web server
can use. To do that, run:

```
npm run build
```

This will build all the site's HTML templates, CSS, JS, images, and fonts inside
the `build` directory.

How you configure the web server to work with these files depends on what you're
using and is outside the scope of this documentation.

One thing to note, however, is that by default assets are mapped to the
`/static/` route (e.g `/static/css/common.css`). You'll need to map `/static` to
each asset directory.
