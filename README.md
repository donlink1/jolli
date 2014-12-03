# Jolli

A design prototype for the OLLI at Auburn folks. Shows what their site could/will look like.

This document intends to highlight how to develop and maintain this site beyond its existing state.

## Prerequisites

You will need the following things properly installed on your computer. 
We assume you'll be using either a Posix or a Mac development environment. If neither of these is available (i.e. you're on Windows), you may have more difficulty. Check out [Cmder](http://bliker.github.io/cmder/) and MSYSGIT.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

Sparse description of each: Git is a version control solution. Node.js is a JavaScript runtime. Bower is a front-end package manager. Also -- you need all of these installed globally. The way I would install Bower would be to install Node.js first, then run `npm install -g bower`. That will get the Bower package and install it globally.

## Installation

* `git clone <repository-url>` this repository (or click the Clone to Desktop button on the Github repository page)
* change into the new directory
* `npm install`
* `bower install`

It's okay if this takes a minute. There are a lot of dependencies.

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

This is an Ember.js application. It uses Express (a very common, quick-deploy, and well-documented Node web server) as its server, which handles requests most immediately, and then hands those requests off to Ember to be sent through its routing hoops. 

Because it is an Ember application, that means page requests aren't really new page loads (fancy AJAX magic). The whole app is one page that Ember makes *look* like several pages. 

`/app/index.html` is the master page for this project. It has our default head tag, etc. built in. 
`/app/templates/application.hbs` also contains some of our master page details, but has more content in it. It contains our nav header, and our avatar.

`/app/templates/*.hbs` are the pages we have created. Each `.hbs` file is a separate page (except `application.hbs`. That file extension is specific to Handlebars, an HTML templating engine that Ember uses. If you want to make an edit to a particular page like courses, edit `/app/templates/courses.hbs`. Handlebars code can be entirely standard HTML5, and it can also contain Handlebars templates and expressions. If this confuses you off the bat or is beyond your immediate scope of knowledge, then you can probably get away with writing as though it were just HTML *unless* you need a page whose content is dynamic based on data pulled from the server. As soon as the content on the page depends on what is stored in JSON/a database, consider learning/using Handlebars.

`/app/styles/*.scss` are our stylesheets. If you're not familiar with Sass, it works to CSS as Handlebars does to HTML -- you can write in plain CSS if you'd like, but then you're not really taking advantage of the language. Sass is nice because it lets a stylesheet wizard code up a sheet more semantically/logically, and with more English, while not losing anything that CSS provides. You should certainly learn this before beginning, or at least become familiar with some of the tricks we use in the project.

`/vendor/*.js` are our global scripts. These are Javascript files that will all be concatenated, in order, into a file called `vendor.js`, which will then be served to the client. 

`/public/` is where any extraneous files (pdfs, docs, etc.) are hosted. Throw them in there, and you can access them by navigating to `server/filename.ext`. If you're running on localhost, that might look like `localhost:4200/fall-calendar.pdf`.

### Moving Forward
We tried to provide reasonable designs that anyone coming forward could see our intent. Not every page is visually complete, but it should give a good sense of what we thought we were doing with each page. Don't make changes to those designs unless you have a justifiable reason that either the client or the users support.

There are lists of things we didn't have time for, or that were just outside the scope of our project for the semester. Primary focii for the next team should be a CMS for static pages, and an events calendar that is editable in some way by Linda and Barbara, as well as an auth system (may need to integrate with Auburn auth, which will be a political hurdle).

The avatar could use some love. It has a few words that it can use to help navigate around the site, but honestly we had hoped for something a bit more fully featured. More words, more navigation endpoints, and integration with the events system. ("Where is X event?" might have taken you to `/events/X`.)

Don't forget that this will eventually need to be deployed. That was one of our major mistakes. We forgot to account for the time deployment would take, thinking it would be simple when it actuality it was a very politically-involved process, amongst other restraints.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

