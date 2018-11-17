# Beginning Thoughts on the Tour of Heroes Project
---
## My Guesses on How Each of these is Implemented
By the end of the tutorial you will be able to do the following:
* Use built-in Angular directives to show and hide elements and display lists of hero data.
  * <div [disabled]="something"> attribute directive
* Create Angular components to display hero details and show an array of heroes.
  * TypeScript component class "Heroes" containing all hero data, which has an array of heroes
* Use one-way data binding for read-only data.
  * Interpolation {{title}}
* Add editable fields to update a model with two-way data binding.
  * <input [(loseFocus)]="function to update model with $element.value">
* Bind component methods to user events, like keystrokes and clicks.
  * <div (click)="myfunc">
* Enable users to select a hero from a master list and edit that hero in the details view.
* Format data with pipes.
  * I don't know what a pipe is
* Create a shared service to assemble the heroes.
  * I forgot how to implement services, maybe @Service decorator
* Use routing to navigate among different views and their components.
  * Routing? I guess we're not doing a single page application then
