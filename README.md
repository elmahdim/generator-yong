> NOT PUBLISHED YET!  

# AngularJS generator-yong

Yeoman generator for AngularJS that handles all common tedious tasks for you.


## Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Questions](#questions)
* [Directory structure]()
* [Automating tasks]()
* [Sub generators]()

---

## Features

![Logo](docs/assets/gulp.png)
![Logo](docs/assets/angular.png)
![Logo](docs/assets/bootstrap.png)
![Logo](docs/assets/materialdesign.png)
![Logo](docs/assets/bower.png)
![Logo](docs/assets/karma.png)
![Logo](docs/assets/browsersync.png)
![Logo](docs/assets/jasmine.png)
![Logo](docs/assets/protractor.png)
![Logo](docs/assets/sass.png)

## Prerequisites

The yong generator project has dependencies that require:

* Node
* bower
* karma
* gulp

Install the required tools: yo, gulp-cli, bower and karma:

```
npm i -g gulp-cli bower yo karma generator-yong
```

## Usage

1. Let's get started by installing the `generator-yong`:

  ```
  npm i -g generator-yong
  ```

2. Create a new directory, and `cd` into:

  ```
  mkdir newProject && cd $_
  ```

3. Run!

  ```
  yo yong
  ```

## Questions

Questions the generator will ask:

* Your project name?
* Describe your project:
* What is your project version?
* Your project licensed under?
* What is your name?
* What is your email address?
* Choose UI Component framework?
  * Twitter Bootstrap
  * Angular Material

## Sub generators

Available sub-generators

* [yong:component]()
* [yong:controller]()
* [yong:directive]()
* [yong:view]()
* [yong:value]()
* [yong:filter]()
* [yong:route]()
* [yong:service]()
* [yong:provider]()
* [yong:factory]()

## Changelog
Recent changes can be viewed on Github on the [Releases Page](/releases)

## Known issues
