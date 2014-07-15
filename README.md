Foreign language listening comprehension
=============

An educational project to improve your comprehension of numbers (and soon words) in a foreign language.

You can use this tool to train yourself on how to recognize numbers (listening comprehension).

I have noticed that when I am listening to a sentence, and a number pops up, it is hard for me to 'visualize it'.
With this tool, you can choose a language and train yourself to understand some random numbers.

This project is made with AngularJS, I wanted to learn this framework. Do not hesitate to suggest to me any corrections on how I implemented it. I search some help on how write it in "the good way" (especially with the directive and split into more independant engines with dependency injection)

You can see it running [here](http://paulvayssiere.com/foreign-language-listening-comprehension)

It uses:
* Compass (Sass)
* Yo
* Grunt
* Bower
* AngularJS
* Bootstrap
* jshint

TODO:
-----
* Bug: Angular provider (config: an url for a the text-to-speech API). I currently use the Google translate text-to-speech with a personal proxy because they don't allow cross-origin for my ajax calls.

* Use more directives !!!
* Add some tests (like in the main AngularJS tutorial)
* Finish the part with the letters
* Add all alpha-numeric languages.

Installation
------------

### Install HomeBrew [(site)](http://mxcl.github.com/homebrew/) (MacOS only)

```bash
$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
```

### Install NodeJS [(site)](http://nodejs.org/)

```bash
$ brew install node
```

### Install (globally with -g, else without) Yeoman (Yo + Grunt + Bower) [(site)](http://yeoman.io/)

```bash
$ npm install -g yo grunt-cli bower
```

### Tips:
I got an error while installing my stuff, so here is how to make it works!

```bash
npm remove -g yo bower grunt-cli
npm uninstall -g generator-karma && npm install -g generator-angular
```
then:
```bash
npm install -g yo
```

### Then clone the Git repo

### Go in the project and, to install JavaScript dependencies:

```bash
$ npm install
$ bower install --dev
```


Workflow
--------

### In development

Watch, Compile, Serve and LiveReload

```bash
$ grunt serve
```

### Prodution

To build the compressed files
```bash
grunt build
```

To run a server with the compressed files
```bash
grunt serve:dist
```

