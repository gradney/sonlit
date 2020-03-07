Why?
I keep notes here because I can't remember everything. That's all. Eventually I'll move this into github's wiki section.


NG-BOOK: The Complete Book on Angular 6
---
Page:
I'm going through this book to refresh my memory and actually build something productive. Wish me luck!

DEFINITIONS
---
Components - teaching the browser new tags like <video> or <form> that have custom functionality attached to them. (From AngularJS, this use to be called 'directives'.) Includes two parts: 1) Decorator, 2) Definition.

TERMS
---
__destructuring__ - a feature provided by ES6 and TypeScript...
__decorating__ - adding metadata to our code to make it a decorated component.
__multiline strings__ - a method using backticks (`...`) to add multi-line strings within a template section of @Component instead of using the referenced template (i.e. html).
__style-encapsulation__ - styles specified for a particular component only apply to that component; note that multiple stylesheets can be loaded for a single componenet in its styleUrls section.
__template tages__ - aka 'mustache tags, are the double curly braces used around a property name in a template for rendering its value.

COMMANDS
---
$ ng serve --port 9001  // if default port occupied (4200)
$ ng generate component <comp-name>


THOUGHTS
---
Compilers
1. TypeScript gives us Decorators. -- github.com/microsoft/TypeScript
2. Traceur gives us Annotations. -- github.com/google/traceur-compiler
https://github.com/google/traceur-compiler/wiki/Getting-Started

Angular supports both.