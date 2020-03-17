Why?
I keep notes here because I can't remember everything. That's all. Eventually I'll move this into github's wiki section.


NG-BOOK: The Complete Book on Angular 6
---
Page:
I'm going through this book to refresh my memory and actually build something productive. Wish me luck!

RESOURCES
---
* http://semantic-ui.com/
* http://foundation.zurb.com
* http://getbootstrap.com 

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
__@NgModule__ has 4 keys: 1) declarations, 2) imports, 3) providers, 4) bootstrap. Module is something like a 'package'.
__declarations__ must declare components in a NgModule before can be used in templates. (Basically, no different from declaring a variable or object.)
__imports__ describes which _dependencies_ this module has.
__providers__ used for _dependency injection_.
__bootstrap__ when module is used, load the AppComponent as top-level component.
__template variable__ a local variable on the template - used to bind input value to this input variable along with binding to this input element on the template; a '#' hash is used to symbolize the template variable and is called a __resolve__.
__host__ the element (in template .html) this component (.ts) is attached to.
__@HostBinding__ using this means we encapsulate the markup tag within our component. We don't have to both use an app-componentName tag AND require a class="row" in the markup of the parent view. By using the @HostBinding decorator, we're able to configure our host element from _within_ the component.

COMMANDS
---
$ ng serve --port 9001  // if default port occupied (4200)
$ ng generate component <comp-name>


BOOTSTRAPPING CRASH COURSE
---
This application is built using Angular CLI (which is built on a tool called "Webpack"). Hence, ability to run 'ng serve' command.
**ng - app rendering process:**
1. angular.json - specifies a "main" file, which in this case is "main.ts"
2. main.ts - entry point for our app and bootstraps app
3. Angular module - a main module that ng bootstraps throughout this process; in this case it's 'AppModule' specified at src/app/app.module.ts
4. AppModule - specifies which components to use; in this case, it's AppComponent
5. AppComponent - renders other components

NgMdoule - the Angular module system.

Angular has a powerful concept of 'modules'. When we boot an Angular app, we are not booting a component directly but instead we create a NgModule which points to the component we want to load. Hence, why we see the @NgModule decorator. This adds the metadata to the class immediately in our main module (i.e. AppModule).

__@NgModule__ has 4 keys: 1) declarations, 2) imports, 3) providers, 4) bootstrap.


THOUGHTS
---
Compilers
1. TypeScript gives us Decorators. -- github.com/microsoft/TypeScript
2. Traceur gives us Annotations. -- github.com/google/traceur-compiler
https://github.com/google/traceur-compiler/wiki/Getting-Started

Angular supports both.