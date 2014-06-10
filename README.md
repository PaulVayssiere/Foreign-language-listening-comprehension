numberProject
=============

An educational project to improve your comprehension of numbers and letters in a foreign language.

It uses:
* Compass (Sass)
* Yo
* Grunt
* Bower
* Bootstrap
* jshint

TODO:
-----
* Bug: insert an html audio tag that read automatically (I don't know why it doesn't work. It did work but idk what happened)

* Bug: Angular provider (config: an url for a the text-to-speech API). I currently use the Google translate text-to-speech.

* Finish the part with the letters

* Add all alpha-numeric languages.

Installation
------------

### HomeBrew [(site)](http://mxcl.github.com/homebrew/)

```bash
$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
```

### NodeJS [(site)](http://nodejs.org/)

```bash
$ brew install node
```

### Yeoman [(site)](http://yeoman.io/)

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

Workflow
--------

### In development

Watch, Compile, Serve and LiveReload

```bash
$ grunt serve
```

### In prodution

```bash
grunt build
grunt serve:dist
```

### To install dependencies for NodeJS and JavaScript

```bash
$ npm install
$ bower install --dev
```

