# LGSS Service Manual

This manual is a work in progress and intends to set out the foundations of how we work as an LGSS team.

It is hosted via Github Pages [here](http://lgss.github.io)

## Contribute

Feel free to contribute to the manual by forking the repo and submitting changes via pull request.

### Issues

[Add an issue](https://github.com/lgss/lgss.github.io/issues) if you find something that needs fixing or updating

## Coding Standards

Coding standards outline how we write code so that it's consistent and easy to jump in and out of projects. 

Sticking to coding standards isn't about making it more difficult to write code, it's about making it easier to share the load. With consistent patterns we save time when working on multiple projects at the same time, removing learning curve that is project structure and code patterns.

We're aiming to have standards for:

* HTML
* CSS
* JavaScript
* .NET
* Sharepoint
* Java
* Version Control
+ any other tech that becomes part of the standard stack

## Styleguide

The styleguide is designed to keep the experience of LGSS products consistent throughout, ideally it'll be migrated to its own module as a living styleguide that can be included as part of web projects but for now, it lays out how things should look and function.

### CSS/SASS

The CSS is written in SASS, more about why and how will appear on the CSS standards page.

### The bare minimum
```
<link rel="stylesheet" href="//lgss.github.io/css/patterns.css">
```

### Also recommended
Modernizr is included for old browsers that need a helping hand.
```
<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js?ver=2.8.3'></script>
```

## Local Setup
LGSS Service Manual uses <a href="http://jekyllrb.com/">Jekyll</a> to generate pattern files.

1. Install Jekyll <code>$ gem install jekyll</code>  
2. Fork & clone this repository
3. cd into the patterns directory
4. Run: <code>$ jekyll serve --baseurl ''</code>
5. Navigate to <code>http://localhost:4000</code>
