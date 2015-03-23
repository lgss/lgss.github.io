# LGSS Dev Manual

## Coding Standards

// to be written

To include
* HTML
* CSS
* JavaScript
* .NET
* Sharepoint
* Java
* Version Control

## Using LGSS Styleguide


### The bare minimum
```
<link rel="stylesheet" href="//lgss.github.io/styleguide/0.1/css/patterns.css">
```

### Also recommended
Modernizr is included for old browsers that need a helping hand.
```
<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js?ver=2.8.3'></script>
```

## Local Setup
LGSS Patterns uses <a href="http://jekyllrb.com/">Jekyll</a> to generate pattern files.

1. Install Jekyll <code>$ gem install jekyll</code>  
2. Clone this repository
3. cd into the patterns directory
4. Run: <code>$ jekyll serve --baseurl ''</code>
5. Navigate to <code>http://localhost:4000</code>


## Versioning
LGSS Patterns will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

{major}.{minor}.{patch}

###Guidelines
1. Breaking backward compatibility bumps the major (and resets the minor and patch)
2. New patterns (without breaking backward compatibility) bumps the minor (and resets the patch)
3. Bug fixes and misc changes bumps the patch
