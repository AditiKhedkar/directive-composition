# Directive Composition API Example (Angular 15+)

This is a simple Angular project demonstrating the use of `hostDirectives`, introduced in Angular 15.

## Features

-  Reusable logic using directives
-  Tooltip using `Renderer2`
-  Click logging logic
-  Composed directive using `hostDirectives`
- Simple component using the composed directive

## How it works

- `TooltipDirective` shows a tooltip on hover.
- `ClickTrackerDirective` logs button clicks.
- `EnhancedButtonDirective` composes both using `hostDirectives`.
- `ButtonComponent` uses this composed directive on a button.

## Run the app

```
npm install
ng serve
```

## File Structure

- `tooltip.directive.ts`: Adds hover tooltip.
- `click-tracker.directive.ts`: Logs click events.
- `enhanced-button.directive.ts`: Composes tooltip + click tracker.
- `button.component.ts`: A simple component with one button.
- `app.component.ts`: Root component.


