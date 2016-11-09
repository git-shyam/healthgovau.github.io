#Helper Marketplace

This is a starter template for the Help 4 Good application.

##App structure

* All Bootstrap components are compiled via Grunt to /dist
* All app-specific components live in /app

```
index.html
app/
├── img/
├── less/
├── js/
dist/
├── less/
├── js/
└── fonts/
```

#Build system

Using a build system is optional. You can simply edit the files with /app and /dist directly. However, using a build system allows LESS, JS and fonts to be compiled from source locally.

##To install, follow these steps:

* Install [node.js](https://nodejs.org/en/)
* Verify install by opening a terminal and typing `node -v`
* [Download the package](https://github.com/healthgovau/healthgovau.github.io/archive/master.zip) or clone the repo `git clone https://github.com/healthgovau/healthgovau.github.io.git` to a local folder of your choice
* Open a terminal at the local folder and install grunt via `npm install -g grunt-cli`
* Run `npm install`

##To compile the app during development:

* Open a terminal at the root of the local folder and run:
  * `grunt dist` to compile JS, LESS and fonts to /dist; or
  * `grunt watch` to compile LESS only on change
* Open /index.html in the root

When pushing to GitHub, the /node_modules folder is ignored as it is only required locally. All other folders are pushed.